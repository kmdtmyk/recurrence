
export default class{

  constructor(options={}){
    Object.assign(this, options)
  }

  match(date){
    return this.start <= date
  }

}
