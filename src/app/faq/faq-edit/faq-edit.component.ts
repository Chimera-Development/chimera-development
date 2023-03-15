import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FaqService} from "../faq.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-faq-edit',
  templateUrl: './faq-edit.component.html'
})
export class FaqEditComponent implements OnInit {
  answerId!: number
  isEdit: boolean = false

  faqForm!:FormGroup

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private faqService: FaqService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.answerId = id
      this.isEdit = id != null

      this.initForm()
    })
  }

  private initForm() {
    let question: string = ''
    let answer: string = ''
    let display: string = ''
    let link: string = ''

    if(this.isEdit) {
      const retrievedAnswer = this.faqService.getAnswerById(this.answerId);
      question = retrievedAnswer.title
      answer = retrievedAnswer.title
      if(retrievedAnswer.link != null) {
        display = retrievedAnswer.linkDisplay!
        link = retrievedAnswer.link!
      }
    }

    this.faqForm = new FormGroup({
      'question': new FormControl(question, Validators.required),
      'answer': new FormControl(answer, Validators.required),
      'optional': new FormGroup({
        'display': new FormControl(display),
        'link': new FormControl(link)
      })
    })
  }

  onCancelClicked() {
    this.router.navigate(['../'],{ relativeTo: this.route} ).then()
  }

  onFormSubmit() {
    console.log(this.faqForm.value)
  }
}
