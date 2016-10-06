import Sdate from './sdate'
import DayOfWeek from './DayOfWeek'


export default class extends DayOfWeek {

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
