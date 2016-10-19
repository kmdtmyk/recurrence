import StringDate from './string-date'
import DayOfWeek from './day-of-week'


export default class extends DayOfWeek {

  static diffInWeek(date1, date2, dayOfWeek){
    if(StringDate.isValid(date1) === false || StringDate.isValid(date1) === false){
      return NaN
    }
    if(DayOfWeek.isValidDayOfWeek(dayOfWeek)){
      date2 = this.startOfWeek(date2, dayOfWeek)
      return Math.floor(StringDate.diffInDay(date1, date2) / 7) + 1
    }
    if(dayOfWeek !== null && dayOfWeek !== undefined){
      return NaN
    }
    if(StringDate.lessThanOrEqual(date1, date2)){
      return Math.floor(StringDate.diffInDay(date1, date2) / 7)
    }
    return - Math.floor(StringDate.diffInDay(date2, date1) / 7)
  }

  static startOfMonth(date, dayOfWeek){
    if(StringDate.isValid(date) === false || DayOfWeek.isValidDayOfWeek(dayOfWeek) === false){
      return ''
    }
    date = StringDate.startOfMonth(date)
    do{
      date = StringDate.addDay(date, -1)
    }while(StringDate.dayOfWeek(date) !== dayOfWeek)
    return date
  }

  static startOfWeek(date, dayOfWeek){
    if(StringDate.isValid(date) === false || DayOfWeek.isValidDayOfWeek(dayOfWeek) === false){
      return ''
    }
    while(StringDate.dayOfWeek(date) !== dayOfWeek){
      date = StringDate.addDay(date, -1)
    }
    return date
  }

  static weekOfMonth(date, dayOfWeek){
    if(StringDate.isValid(date) === false){
      return NaN
    }
    if(dayOfWeek === undefined || dayOfWeek === null){
      dayOfWeek = StringDate.dayOfWeek(StringDate.startOfMonth(date))
    }else if(DayOfWeek.isValidDayOfWeek(dayOfWeek) === false){
      return NaN
    }
    const diffInDay = StringDate.diffInDay(this.startOfMonth(this.startOfWeek(date, dayOfWeek), dayOfWeek), date)
    return Math.floor(diffInDay / 7)
  }

}
