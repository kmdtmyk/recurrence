import Sdate from './sdate'


const defaultOptions = {
  interval: 1,
}

export default class{

  static includes(options = {}, date){
    options = {...defaultOptions, ...options}
    const { startDate, endDate, interval } = options
    let isBetween = Sdate.lessThanOrEqual(startDate, date)
    if(endDate){
      isBetween = isBetween && Sdate.greaterThanOrEqual(endDate, date)
    }
    if(!isBetween){
      return false
    }
    const diffInDay = Sdate.diffInDay(startDate, date)
    return ( diffInDay % interval ) === 0
  }

}
