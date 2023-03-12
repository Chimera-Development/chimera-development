import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
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

  constructor(private route: ActivatedRoute, private updateService: UpdateService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=> {
        this.componentId = params['id']

        let update:Update = this.updateService.getUpdate(this.componentId)

        this.editForm = new FormGroup({
          titleInput: new FormControl(update.title, Validators.required),
          descriptionInput: new FormControl(update.description, Validators.required),
          detailUrl: new FormControl(update.referenceLink, Validators.required),
          imageUrl: new FormControl(update.image, Validators.required),

          userQuote: new FormGroup({
            userName: new FormControl(update.developer),
            quote: new FormControl(update.quote)
          })
        })
      }
    )
  }

  onSubmit() {
    console.log(this.editForm.value)
  }
}
