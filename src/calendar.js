import Sdate from './sdate'
import DayOfWeek from './DayOfWeek'


export default class extends DayOfWeek {

  static diffInWeek(date1, date2, dayOfWeek){
    if(Sdate.isValid(date1) === false || Sdate.isValid(date1) === false){
      return NaN
    }
    if(DayOfWeek.isValidDayOfWeek(dayOfWeek)){
      date2 = this.startOfWeek(date2, dayOfWeek)
      return Math.floor(Sdate.diffInDay(date1, date2) / 7) + 1
    }
    if(dayOfWeek !== null && dayOfWeek !== undefined){
      return NaN
    }
    if(Sdate.lessThanOrEqual(date1, date2)){
      return Math.floor(Sdate.diffInDay(date1, date2) / 7)
    }
    return - Math.floor(Sdate.diffInDay(date2, date1) / 7)
  }

  static startOfMonth(date, dayOfWeek){
    if(Sdate.isValid(date) === false || DayOfWeek.isValidDayOfWeek(dayOfWeek) === false){
      return ''
    }
    date = Sdate.startOfMonth(date)
    do{
      date = Sdate.addDay(date, -1)
    }while(Sdate.dayOfWeek(date) !== dayOfWeek)
    return date
  }

  static startOfWeek(date, dayOfWeek){
    if(Sdate.isValid(date) === false || DayOfWeek.isValidDayOfWeek(dayOfWeek) === false){
      return ''
    }
    while(Sdate.dayOfWeek(date) !== dayOfWeek){
      date = Sdate.addDay(date, -1)
    }
    return date
  }

  static weekOfMonth(date, dayOfWeek){
    if(Sdate.isValid(date) === false){
      return NaN
    }
    if(dayOfWeek === undefined || dayOfWeek === null){
      dayOfWeek = Sdate.dayOfWeek(Sdate.startOfMonth(date))
    }else if(DayOfWeek.isValidDayOfWeek(dayOfWeek) === false){
      return NaN
    }
    const diffInDay = Sdate.diffInDay(this.startOfMonth(this.startOfWeek(date, dayOfWeek), dayOfWeek), date)
    return Math.floor(diffInDay / 7)
  }

}
