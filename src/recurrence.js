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
    const { startDate, interval, dayOfWeeks, basisDayOfWeek } = options
    if(Sdate.diffInMonth(startDate, date) % interval !== 0){
      return false
    }
    if(dayOfWeeks){
      return dayOfWeeks.includes(Sdate.dayOfWeek(date)) && Calendar.weekOfMonth(startDate, basisDayOfWeek) === Calendar.weekOfMonth(date, basisDayOfWeek)
    }
    return Sdate.day(startDate) === Sdate.day(date)
  }

  static __yearly(options, date){
    const { startDate, interval, dayOfWeeks, basisDayOfWeek } = options
    if(Sdate.diffInYear(startDate, date) % interval !== 0){
      return false
    }
    if(dayOfWeeks){
      return dayOfWeeks.includes(Sdate.dayOfWeek(date)) && Calendar.weekOfMonth(startDate, basisDayOfWeek) === Calendar.weekOfMonth(date, basisDayOfWeek)
    }
    return Sdate.month(startDate) === Sdate.month(date) && Sdate.day(startDate) === Sdate.day(date)
  }

  static next(options = {}, date, times){
    options = {...defaultOptions, ...options}
    const { startDate, endDate, interval, every } = options
    if(this.__isValidOptions(options) === false || Sdate.isValid(date) === false || !times){
      return ''
    }

    let i = 0
    let matchTimes = 0
    const limit = 10000
    const estimateStartDate =
      0 < times ?
      Sdate.max(date, Sdate.addDay(startDate, -1)) :
      Sdate.min(date, Sdate.addDay(endDate, 1))
    const estimateEndDate =
      every === 'week' ? Sdate.addDay(estimateStartDate, times * interval * 7) :
      every === 'month' ? Sdate.addMonth(estimateStartDate, times * interval * 4) :
      every === 'year' ? Sdate.addYear(estimateStartDate, times * interval * 4) :
      Sdate.addDay(estimateStartDate, times * interval)
    let estimateDate

    do{
      i++
      estimateDate = Sdate.addDay(estimateStartDate, times > 0 ? i : -i)
      if(this.includes(options, estimateDate)){
        matchTimes++
      }
      if(matchTimes === Math.abs(times)){
        return estimateDate
      }
      var c = (0 < times ?
        Sdate.lessThanOrEqual(estimateDate, estimateEndDate) :
        Sdate.lessThanOrEqual(estimateEndDate, estimateDate)
      ) && i < limit
    }while(c)

    return ''
  }

  static __isValidOptions(options){
    const { startDate, endDate } = options
    if(Sdate.isValid(startDate) === false){
      return false
    }
    if(endDate && Sdate.isValid(endDate) === false){
      return false
    }
    return true
  }

  static extract(options, start, end){
    let result = []
    let date = Sdate.addDay(start, -1)
    let i = 0
    const limit = 10000
    while(i < limit){
      i++
      date = this.next(options, date, 1)
      if(!date || Sdate.lessThan(end, date)){
        break
      }
      result.push(date)
    }
    return result
  }

}
