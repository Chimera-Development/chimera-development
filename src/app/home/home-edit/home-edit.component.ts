import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit {
  componentId!: number
  editForm!: FormGroup
  quoteExpanded: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=> {
        this.componentId = params['id']

        this.editForm = new FormGroup({
          titleInput: new FormControl('Title here.', Validators.required),
          descriptionInput: new FormControl('Lorem Ipsum', Validators.required),
          detailUrl: new FormControl('github.com/markm001', Validators.required),
          imageUrl: new FormControl(
            'https://www.minecraft.net/content/dam/community/fy22/community-news/ccp2-stage-recap/recapthumb-440x250.png',
            Validators.required),

          userQuote: new FormGroup({
            userName: new FormControl(null),
            quote: new FormControl(null)
          })
        })
      }
    )
  }

  onSubmit() {
    console.log(this.editForm.value)
  }
}
