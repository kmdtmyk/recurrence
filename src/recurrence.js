import Sdate from './sdate'
import Calendar from './calendar'
import DayOfWeek from './day-of-week'


const defaultOptions = {
  interval: 1,
}

export default class extends DayOfWeek {

  static includes(options = {}, date){
    options = {...defaultOptions, ...options}
    if(this.__between(options, date) === false){
      return false
    }
    const { every } = options
    if(every === 'week'){
      return this.__weekly(options, date)
    }else if(every === 'month'){
      return this.__monthly(options, date)
    }else if(every === 'year'){
      return this.__yearly(options, date)
    }else{
      return this.__daily(options, date)
    }
  }

  static __between(options, date){
    const { startDate, endDate } = options
    if(endDate && Sdate.lessThan(endDate, date) ){
      return false
    }
    return Sdate.lessThanOrEqual(startDate, date)
  }

  static __daily(options, date){
    options = {...defaultOptions, ...options}
    const { startDate, interval } = options
    const diffInDay = Sdate.diffInDay(startDate, date)
    return ( diffInDay % interval ) === 0
  }

  static __weekly(options, date){
    const { startDate, dayOfWeeks, interval, basisDayOfWeek } = options
    if(!dayOfWeeks){
      return false
    }
    const diffInWeek = Calendar.diffInWeek(startDate, date, basisDayOfWeek)
    if(diffInWeek % interval !== 0){
      return false
    }
    return dayOfWeeks.includes(Sdate.dayOfWeek(date))
  }

  static __monthly(options, date){
    if(options.dayOfWeeks){
      return this.__monthlyDayOfWeek(options, date)
    }else{
      return this.__monthlyDay(options, date)
    }
  }

  static __monthlyDay(options, date){
    const { startDate, interval } = options
    if(Sdate.diffInMonth(startDate, date) % interval !== 0){
      return false
    }
    return Sdate.day(startDate) === Sdate.day(date)
  }

  static __monthlyDayOfWeek(options, date){
    const { startDate, interval, dayOfWeeks, basisDayOfWeek } = options
    if(Sdate.diffInMonth(startDate, date) % interval !== 0){
      return false
    }
    if(Calendar.weekOfMonth(startDate, basisDayOfWeek) !== Calendar.weekOfMonth(date, basisDayOfWeek)){
      return false
    }
    return dayOfWeeks.includes(Sdate.dayOfWeek(date))
  }

  static __yearly(options, date){
    const { startDate } = options
    return Sdate.month(startDate) === Sdate.month(date) && Sdate.day(startDate) === Sdate.day(date)
  }

}
