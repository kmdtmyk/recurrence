
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24


export default class{

  static addDays(str, days){
    let date = new Date(str)
    let newDate = new Date(date.valueOf() + DAY * days)
    return this.dateToString(newDate)
  }

  static diffInDay(str1, str2){
    let date1 = new Date(str1)
    let date2 = new Date(str2)
    return (date2 - date1) / DAY
  }

  static dateToString(date){
    let year = date.getFullYear()
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
    let date = new Date(str)
    date.setDate(1)
    date.setMonth(date.getMonth() + 1)
    date.setDate(0)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    if(month < 10){
      month = '0' + month
    }
    let day = date.getDate()
    if(day < 10){
      day = '0' + day
    }
    return `${year}/${month}/${day}`
  }

  static equal(){

  }

  static startOfMonth(str){
    let date = new Date(str)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    if(month < 10){
      month = '0' + month
    }
    return `${year}/${month}/01`
  }

}
