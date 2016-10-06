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

}
