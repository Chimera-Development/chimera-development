import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FaqService} from "../faq.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FaqAnswer} from "../../model/faq-answer";
import {CanComponentDeactivate} from "../../auth/can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faq-edit',
  templateUrl: './faq-edit.component.html',
  styleUrls: ['./faq-edit.component.css']
})
export class FaqEditComponent implements OnInit, CanComponentDeactivate {
  answerId!: number
  isEdit: boolean = false

  faqForm!:FormGroup

  loadedAnswer:FaqAnswer = new FaqAnswer('','','','')
  changesSaved = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private faqService: FaqService
  ) { }

  @HostListener('window:beforeunload')
  canDeactivate(): boolean | Observable<boolean> {
    const currentAnswer = new FaqAnswer(
      this.faqForm.value.question,
      this.faqForm.value.answer,
      this.faqForm.value.optional.display,
      this.faqForm.value.optional.link
    )

    return !(this.loadedAnswer.title !== currentAnswer.title ||
      this.loadedAnswer.answer !== currentAnswer.answer ||
      this.loadedAnswer.linkDisplay !== currentAnswer.linkDisplay ||
      this.loadedAnswer.link !== currentAnswer.link
      && !this.changesSaved);

  }

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
      answer = retrievedAnswer.answer
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

    this.loadedAnswer = new FaqAnswer(question, answer,display,link)
  }

  onCancelClicked() {
    this.changesSaved = true
    this.router.navigate(['../'],{ relativeTo: this.route} ).then()
  }

  onFormSubmit() {
    this.loadedAnswer = new FaqAnswer(
      this.faqForm.value.question,
      this.faqForm.value.answer,
      this.faqForm.value.optional.display,
      this.faqForm.value.optional.link
    )


    if(this.isEdit) {
      this.faqService.updateAnswer(this.answerId, this.loadedAnswer)
    } else {
      this.faqService.addAnswer(this.loadedAnswer)
    }

    this.isEdit = false
    this.onCancelClicked()
  }
}
