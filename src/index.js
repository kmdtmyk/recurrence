import Sdate from './sdate'


const defaultOptions = {
  interval: 1,
}

export default class{

  static includes(options = {}, date){
    options = {...defaultOptions, ...options}
    const diffInDay = Sdate.diffInDay(options.startDate, date)
    return options.startDate <= date && ( diffInDay % options.interval ) === 0
  }

}
