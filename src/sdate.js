

export default class{

  static diffInDay(date1, date2){
    let d1 = new Date(date1)
    let d2 = new Date(date2)
    let diffInMilliSec = d2 - d1
    return (d2 - d1) / ( 1000 * 60 * 60 * 24 )
  }

  static equal(){

  }

}
