import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UpdateService} from "../update.service";
import {Update} from "../../model/update";
import {CanComponentDeactivate} from "../../auth/can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit, CanComponentDeactivate {
  componentId!: number
  editForm!: FormGroup
  quoteExpanded: boolean = false;
  isEdit = true

  changesSaved = false
  loadedUpdate: Update = new Update('', new Date(), '', '', '')

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private updateService: UpdateService) {
  }

  private initForm(): void {
    let titleInput: string = ''
    let descriptionInput: string = ''
    let detailUrl: string = ''
    let imageUrl: string = ''
    let userName: string = ''
    let quote: string = ''

    if (this.isEdit) {
      const update = this.updateService.getUpdate(this.componentId)
      titleInput = update.title
      descriptionInput = update.description
      detailUrl = update.referenceLink
      imageUrl = update.image
      if (update.quote != null) {
        userName = update.developer!
        quote = update.quote!
      }
    }

    this.editForm = new FormGroup({
      'titleInput': new FormControl(titleInput, Validators.required),
      'descriptionInput': new FormControl(descriptionInput, Validators.required),
      'detailUrl': new FormControl(detailUrl, Validators.required),
      'imageUrl': new FormControl(imageUrl, Validators.required),

      userQuote: new FormGroup({
        'userName': new FormControl(userName),
        'quote': new FormControl(quote)
      })
    })

    this.loadedUpdate = new Update(
      titleInput,
      new Date(),
      descriptionInput,
      imageUrl,
      detailUrl,
      quote,
      userName
    )
  }

  canDeactivate(): boolean | Observable<boolean> {
    const currentUpdate = new Update(
      this.editForm.value.titleInput,
      new Date(),
      this.editForm.value.descriptionInput,
      this.editForm.value.imageUrl,
      this.editForm.value.detailUrl,
      this.editForm.value.userQuote.quote,
      this.editForm.value.userQuote.userName
    )

    return !(this.loadedUpdate.title !== currentUpdate.title ||
      this.loadedUpdate.description !== currentUpdate.description ||
      this.loadedUpdate.referenceLink !== currentUpdate.referenceLink ||
      this.loadedUpdate.image !== currentUpdate.image ||
      this.loadedUpdate.quote !== currentUpdate.quote ||
      this.loadedUpdate.developer !== currentUpdate.developer
      && !this.changesSaved);
  }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.queryParams['edit']

    this.route.params.subscribe(params => {
      this.componentId = params['id']
      this.initForm()
    })
  }

  onSubmit() {
    this.loadedUpdate = new Update(
      this.editForm.value.titleInput,
      new Date(Date.now()),
      this.editForm.value.descriptionInput,
      this.editForm.value.imageUrl,
      this.editForm.value.detailUrl,
      this.editForm.value.userQuote.quote,
      this.editForm.value.userQuote.userName
    )

    if (this.isEdit) {
      this.updateService.updateUpdate(this.componentId, this.loadedUpdate)
    } else {
      this.updateService.createUpdate(this.loadedUpdate)
    }

    this.onNavigate()
  }

  onNavigate() {
    this.changesSaved = true

    this.isEdit = false
    this.router.navigate(['../'], {relativeTo: this.route}).then()
  }
}
