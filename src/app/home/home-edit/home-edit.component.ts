import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UpdateService} from "../update.service";
import {Update} from "../../model/update";

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit {
  componentId!: number
  editForm!: FormGroup
  quoteExpanded: boolean = false;
  isEdit = true

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private updateService: UpdateService) {
  }

  private initForm(): void {
    let titleInput:string = ''
    let descriptionInput:string = ''
    let detailUrl:string = ''
    let imageUrl:string = ''
    let userName:string = ''
    let quote:string = ''

    if(this.isEdit) {
      const update = this.updateService.getUpdate(this.componentId)
      titleInput = update.title
      descriptionInput = update.description
      detailUrl = update.referenceLink
      imageUrl = update.image
      if(update.quote != null) {
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
  }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.queryParams['edit']

    this.route.params.subscribe(params => {
      this.componentId = params['id']
      this.initForm()
    })
  }

  onSubmit() {
    const update = new Update(
      this.editForm.value.titleInput,
      new Date(Date.now()),
      this.editForm.value.descriptionInput,
      this.editForm.value.imageUrl,
      this.editForm.value.detailUrl,
      this.editForm.value.userQuote.quote,
      this.editForm.value.userQuote.userName
    )

    if(this.isEdit) {
      this.updateService.updateUpdate(this.componentId, update)
    } else {
      this.updateService.createUpdate(update)
    }

    this.onNavigate()
  }

  onNavigate() {
    this.isEdit = false
    this.router.navigate(['../'], {relativeTo: this.route}).then()
  }
}
