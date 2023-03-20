import { Injectable } from '@angular/core';
import {FaqAnswer} from "../model/faq-answer";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqUpdated = new Subject<FaqAnswer[]>()
  faqAnswers: FaqAnswer[] = []
  initialFaqState: FaqAnswer[] = []

  constructor() { }

  getAnswerById(index: number): FaqAnswer {
    return this.faqAnswers[index]
  }

  getAnswers(): FaqAnswer[] {
    return this.faqAnswers.slice()
  }

  shiftItemUpByIndex(index:number) {
    const answers = this.getAnswers();

    if (index > 0) {
      const element = this.faqAnswers[index];
      answers[index] = answers[index - 1];
      answers[index - 1] = element;
    }
    this.faqAnswers = answers
    this.faqUpdated.next(this.faqAnswers.slice())
  }

  deleteItemById(answerIndex: number) {
    this.faqAnswers.splice(answerIndex, 1)
    this.faqUpdated.next(this.faqAnswers.slice())
  }

  updateAnswer(index: number, answer: FaqAnswer) {
    this.faqAnswers[index] = answer
    this.faqUpdated.next(this.faqAnswers.slice())
  }

  addAnswer(answer: FaqAnswer) {
    this.faqAnswers.push(answer)
    this.faqUpdated.next(this.faqAnswers.slice())
  }

  setAnswers(answers: FaqAnswer[]) {
    this.faqAnswers = answers
    this.faqUpdated.next(this.faqAnswers.slice())
  }

  setInitialState() {
    this.initialFaqState = this.faqAnswers.slice()
  }
  resetAnswers() {
    this.faqAnswers = this.initialFaqState.slice()
    this.faqUpdated.next(this.faqAnswers.slice())
  }
}
