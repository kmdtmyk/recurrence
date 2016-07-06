import Sdate from './sdate'


export default class{

  constructor(options={}){
    this.startDate = options.startDate
    this.interval = options.interval || 1
  }

  include(date){
    let diffInDay = Sdate.diffInDay(this.startDate, date)
    return this.startDate <= date && ( diffInDay % this.interval ) === 0
  }

}
