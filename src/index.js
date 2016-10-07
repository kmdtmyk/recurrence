import Sdate from './sdate'
import Calendar from './calendar'
import DayOfWeek from './DayOfWeek'


const defaultOptions = {
  interval: 1,
}

class Recurrence extends DayOfWeek {

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
    const { startDate, endDate, interval } = options
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
    const { day } = options
    return Sdate.toObject(date).day === day
  }

  static __yearly(options, date){
    const { startDate } = options
    return Sdate.month(startDate) === Sdate.month(date) && Sdate.day(startDate) === Sdate.day(date)
  }

}



export default Recurrence
