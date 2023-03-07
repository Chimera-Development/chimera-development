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
