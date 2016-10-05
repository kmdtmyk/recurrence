import Sdate from './sdate'


const SUNDAY = 0
const MONDAY = 1
const TUESDAY = 2
const WEDNESDAY = 3
const THURSDAY = 4
const FRIDAY = 5
const SATURDAY = 6

const defaultOptions = {
  interval: 1,
}

class Recurrence {

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
    const { startDate, dayOfWeeks } = options
    if(!dayOfWeeks){
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

  static get SUNDAY(){
    return SUNDAY
  }

  static get MONDAY(){
    return MONDAY
  }

  static get TUESDAY(){
    return TUESDAY
  }

  static get WEDNESDAY(){
    return WEDNESDAY
  }

  static get THURSDAY(){
    return THURSDAY
  }

  static get FRIDAY(){
    return FRIDAY
  }

  static get SATURDAY(){
    return SATURDAY
  }

}



export default Recurrence
