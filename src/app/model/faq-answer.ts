export class FaqAnswer {
  constructor(
    public title: string,
    public answer: string,
    public linkDisplay?: string,
    public link?: string
  ){ }
}

export interface FaqAnswerResponse {
  title:string
  answer:string
  linkDisplay?:string
  link?:string
}
