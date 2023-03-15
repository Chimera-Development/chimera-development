import { Injectable } from '@angular/core';
import {FaqAnswer} from "../model/faq-answer";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqUpdated = new Subject<FaqAnswer[]>()
  faqAnswers: FaqAnswer[] = [
    new FaqAnswer(
      'What is Topological Sorting?',
      'Topological sorting is a technique that guarantees that the utility modules and the game events are executed in a correct and consistent order that follows their dependencies and prevents conflicts or errors. It also optimizes the performance and efficiency of the Chimera Client by eliminating unnecessary or redundant executions',
      'Wikipedia - Topological sorting',
      'https://de.wikipedia.org/wiki/Topologische_Sortierung'
    ),
    new FaqAnswer(
      'What separates Chimera from just another client?',
      'Glad you asked.  Topological sorting is a proven and elegant technique that can improve the functionality and reliability of your minecraft utility client.',
      'Learn more about topological sorting',
      'https://de.wikipedia.org/wiki/Topologische_Sortierung'
    ),
    new FaqAnswer(
      'What separates Chimera from just another client?',
      'Glad you asked.  Topological sorting is a proven and elegant technique that can improve the functionality and reliability of your minecraft utility client.'
    )
  ]

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
}
