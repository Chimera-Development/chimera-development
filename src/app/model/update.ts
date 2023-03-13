export class Update {
  constructor(
    public title: string,
    public date: Date,
    public description: string,
    public image: string,
    public referenceLink:string,
    public quote?:string,
    public developer?:string
  ) { }
}


export interface UpdateResponse {
  title: string
  date: Date
  description: string
  image: string
  referenceLink:string
  quote?:string
  developer?:string
}
