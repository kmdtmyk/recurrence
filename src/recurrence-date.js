import StringDate from './string-date'
import CalendarDate from './calendar-date'
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
    if(endDate && StringDate.lessThan(endDate, date) ){
      return false
    }
    return StringDate.lessThanOrEqual(startDate, date)
  }

  static __daily(options, date){
    options = {...defaultOptions, ...options}
    const { startDate, interval } = options
    const diffInDay = StringDate.diffInDay(startDate, date)
    return ( diffInDay % interval ) === 0
  }

  static __weekly(options, date){
    const { startDate, dayOfWeeks, interval, basisDayOfWeek } = options
    if(!dayOfWeeks){
      return false
    }
    const diffInWeek = CalendarDate.diffInWeek(startDate, date, basisDayOfWeek)
    if(diffInWeek % interval !== 0){
      return false
    }
    return dayOfWeeks.includes(StringDate.dayOfWeek(date))
  }

  static __monthly(options, date){
    const { startDate, interval, dayOfWeeks, basisDayOfWeek } = options
    if(StringDate.diffInMonth(startDate, date) % interval !== 0){
      return false
    }
    if(dayOfWeeks){
      return dayOfWeeks.includes(StringDate.dayOfWeek(date)) && CalendarDate.weekOfMonth(startDate, basisDayOfWeek) === CalendarDate.weekOfMonth(date, basisDayOfWeek)
    }
    return StringDate.day(startDate) === StringDate.day(date)
  }

  static __yearly(options, date){
    const { startDate, interval, dayOfWeeks, basisDayOfWeek } = options
    if(StringDate.diffInYear(startDate, date) % interval !== 0){
      return false
    }
    if(dayOfWeeks){
      return dayOfWeeks.includes(StringDate.dayOfWeek(date)) && CalendarDate.weekOfMonth(startDate, basisDayOfWeek) === CalendarDate.weekOfMonth(date, basisDayOfWeek)
    }
    return StringDate.month(startDate) === StringDate.month(date) && StringDate.day(startDate) === StringDate.day(date)
  }

  static next(options = {}, date, times){
    options = {...defaultOptions, ...options}
    const { startDate, endDate, interval, every } = options
    if(this.__isValidOptions(options) === false || StringDate.isValid(date) === false || !times){
      return ''
    }

    let i = 0
    let matchTimes = 0
    const limit = 10000
    const estimateStartDate =
      0 < times ?
      StringDate.max(date, StringDate.addDay(startDate, -1)) :
      StringDate.min(date, StringDate.addDay(endDate, 1))
    const estimateEndDate =
      every === 'week' ? StringDate.addDay(estimateStartDate, times * interval * 7) :
      every === 'month' ? StringDate.addMonth(estimateStartDate, times * interval * 4) :
      every === 'year' ? StringDate.addYear(estimateStartDate, times * interval * 4) :
      StringDate.addDay(estimateStartDate, times * interval)
    let estimateDate

    do{
      i++
      estimateDate = StringDate.addDay(estimateStartDate, times > 0 ? i : -i)
      if(this.includes(options, estimateDate)){
        matchTimes++
      }
      if(matchTimes === Math.abs(times)){
        return estimateDate
      }
      var c = (0 < times ?
        StringDate.lessThanOrEqual(estimateDate, estimateEndDate) :
        StringDate.lessThanOrEqual(estimateEndDate, estimateDate)
      ) && i < limit
    }while(c)

    return ''
  }

  static __isValidOptions(options){
    const { startDate, endDate } = options
    if(StringDate.isValid(startDate) === false){
      return false
    }
    if(endDate && StringDate.isValid(endDate) === false){
      return false
    }
    return true
  }

  static extract(options, start, end){
    let result = []
    let date = StringDate.addDay(start, -1)
    let i = 0
    const limit = 10000
    while(i < limit){
      i++
      date = this.next(options, date, 1)
      if(!date || StringDate.lessThan(end, date)){
        break
      }
      result.push(date)
    }
    return result
  }

}

export {StringDate, CalendarDate}
