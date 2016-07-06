
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24


export default class{

  static addDays(date, days){
    let d = new Date(date)
    d = new Date(d.valueOf() + DAY * days)
    return this.dateToString(d)
  }

  static diffInDay(date1, date2){
    let d1 = new Date(date1)
    let d2 = new Date(date2)
    return (d2 - d1) / DAY
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

  static equal(){

  }

}
