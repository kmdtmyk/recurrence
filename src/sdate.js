
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24


export default class{

  static diffInDay(date1, date2){
    let d1 = new Date(date1)
    let d2 = new Date(date2)
    return (d2 - d1) / DAY
  }

  static equal(){

  }

}
