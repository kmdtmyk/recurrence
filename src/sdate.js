import flattenDeep from 'lodash.flattendeep'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24


export default class {

  static addDay(str, days){
    const o = this.toObject(str)
    return this.create(o.year, o.month, o.day + days)
  }

  static addMonth(str, month){
    const o = this.toObject(str)
    return this.min(
      this.create(o.year, o.month + month, o.day),
      this.create(o.year, o.month + month + 1, 0)
    )
  }

  static addYear(str, year){
    const o = this.toObject(str)
    return this.min(
      this.create(o.year + year, o.month, o.day),
      this.create(o.year + year, o.month + 1, 0)
    )
  }

  static create(year, month, day){
    const date = new Date(year, month - 1, day)
    return this.dateToString(date)
  }

  static day(str){
    return this.toObject(str).day
  }

  static dayOfWeek(str){
    const o = this.toObject(str)
    return o.dayOfWeek
  }

  static diffInDay(str1, str2){
    const date1 = this.stringToDate(str1)
    const date2 = this.stringToDate(str2)
    return (date2 - date1) / DAY
  }

  static dateToString(date){
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if(month < 10){
      month = '0' + month
    }
    if(day < 10){
      day = '0' + day
    }
    return `${year}/${month}/${day}`
  }

  static endOfMonth(str){
    const o = this.toObject(str)
    return this.create(o.year, o.month + 1, 0)
  }

  static equal(str1, str2){
    if(this.isValid(str1) === false && this.isValid(str2) === false){
      return true
    }
    const o1 = this.toObject(str1)
    const o2 = this.toObject(str2)
    return o1.year == o2.year && o1.month == o2.month && o1.day == o2.day
  }

  static isValid(str){
    const date = this.stringToDate(str)
    return date.toString() !== "Invalid Date"
  }

  static max(...args){
    const strs = flattenDeep(args)
    return strs.reduce((str1, str2) => this.greaterThan(str1, str2) ? str1 : str2)
  }

  static min(...args){
    const strs = flattenDeep(args)
    return strs.reduce((str1, str2) => this.lessThan(str1, str2) ? str1 : str2)
  }

  static month(str){
    return this.toObject(str).month
  }

  static greaterThan(str1, str2){
    const date1 = this.stringToDate(str1)
    const date2 = this.stringToDate(str2)
    return date1.valueOf() > date2.valueOf()
  }

  static greaterThanOrEqual(str1, str2){
    const date1 = this.stringToDate(str1)
    const date2 = this.stringToDate(str2)
    return date1.valueOf() >= date2.valueOf()
  }

  static lessThan(str1, str2){
    const date1 = this.stringToDate(str1)
    const date2 = this.stringToDate(str2)
    return date1.valueOf() < date2.valueOf()
  }

  static lessThanOrEqual(str1, str2){
    const date1 = this.stringToDate(str1)
    const date2 = this.stringToDate(str2)
    return date1.valueOf() <= date2.valueOf()
  }

  static startOfMonth(str){
    const o = this.toObject(str)
    return this.create(o.year, o.month, 1)
  }

  static stringToDate(str){
    return new Date(str.replace(/[-.]/g, '/'))
  }

  static toObject(str){
    const date = this.stringToDate(str)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dayOfWeek = date.getDay()
    return {year, month, day, dayOfWeek}
  }

  static year(str){
    return this.toObject(str).year
  }

}
