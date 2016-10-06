import assert from 'power-assert'
import Calendar from '../src/calendar.js'


describe('Calendar', () => {

  describe('diffInWeek', () => {

  })

  describe('startOfMonth', () => {

    it('basic usage', () => {
      assert(Calendar.startOfMonth('2015/01/16', Calendar.SUNDAY) === '2014/12/28')
      assert(Calendar.startOfMonth('2014/12/01', Calendar.SUNDAY) === '2014/11/30')
      assert(Calendar.startOfMonth('2015/02/01', Calendar.SUNDAY) === '2015/01/25')
      assert(Calendar.startOfMonth('2015/03/01', Calendar.SUNDAY) === '2015/02/22')

      assert(Calendar.startOfMonth('2015/02/01', Calendar.MONDAY) === '2015/01/26')
      assert(Calendar.startOfMonth('2015/02/10', Calendar.MONDAY) === '2015/01/26')
      assert(Calendar.startOfMonth('2015/02/28', Calendar.MONDAY) === '2015/01/26')
      assert(Calendar.startOfMonth('2015/03/01', Calendar.MONDAY) === '2015/02/23')

      assert(Calendar.startOfMonth('2015/02/01', Calendar.SATURDAY) === '2015/01/31')
      assert(Calendar.startOfMonth('2015/02/28', Calendar.SATURDAY) === '2015/01/31')
      assert(Calendar.startOfMonth('2015/03/01', Calendar.SATURDAY) === '2015/02/28')
    })

    it('invalid argument', () => {
      assert(Calendar.startOfMonth('invalid', Calendar.SUNDAY) === '')
      assert(Calendar.startOfMonth('2016/10/06', null) === '')
      assert(Calendar.startOfMonth('invalid', null) === '')
    })

  })

  describe('startOfWeek', () => {

  })

  describe('weekOfMonth', () => {

  })

})
