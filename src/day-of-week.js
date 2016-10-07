

const SUNDAY = 0
const MONDAY = 1
const TUESDAY = 2
const WEDNESDAY = 3
const THURSDAY = 4
const FRIDAY = 5
const SATURDAY = 6


export default class {

  static get SUNDAY(){
    return SUNDAY
  }

  static get MONDAY(){
    return MONDAY
  }

  static get TUESDAY(){
    return TUESDAY
  }

  static get WEDNESDAY(){
    return WEDNESDAY
  }

  static get THURSDAY(){
    return THURSDAY
  }

  static get FRIDAY(){
    return FRIDAY
  }

  static get SATURDAY(){
    return SATURDAY
  }

  static isValidDayOfWeek(dayOfWeek){
    return (
      dayOfWeek === SUNDAY ||
      dayOfWeek === MONDAY ||
      dayOfWeek === TUESDAY ||
      dayOfWeek === WEDNESDAY ||
      dayOfWeek === THURSDAY ||
      dayOfWeek === FRIDAY ||
      dayOfWeek === SATURDAY
    )
  }

}
