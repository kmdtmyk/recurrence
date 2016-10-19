import assert from 'power-assert'
import CalendarDate from '../src/calendar-date.js'


describe('CalendarDate', () => {

  describe('diffInWeek', () => {

    it('basic usage', () => {
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/05', CalendarDate.SUNDAY) === -2)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/06', CalendarDate.SUNDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/07', CalendarDate.SUNDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/08', CalendarDate.SUNDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/09', CalendarDate.SUNDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/10', CalendarDate.SUNDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/11', CalendarDate.SUNDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/12', CalendarDate.SUNDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/13', CalendarDate.SUNDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/14', CalendarDate.SUNDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/15', CalendarDate.SUNDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/16', CalendarDate.SUNDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/17', CalendarDate.SUNDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/18', CalendarDate.SUNDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/19', CalendarDate.SUNDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/20', CalendarDate.SUNDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/21', CalendarDate.SUNDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/22', CalendarDate.SUNDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/23', CalendarDate.SUNDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/24', CalendarDate.SUNDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/25', CalendarDate.SUNDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/26', CalendarDate.SUNDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/27', CalendarDate.SUNDAY) === 2)

      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/04', CalendarDate.SATURDAY) === -2)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/05', CalendarDate.SATURDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/06', CalendarDate.SATURDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/07', CalendarDate.SATURDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/08', CalendarDate.SATURDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/09', CalendarDate.SATURDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/10', CalendarDate.SATURDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/11', CalendarDate.SATURDAY) === -1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/12', CalendarDate.SATURDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/13', CalendarDate.SATURDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/14', CalendarDate.SATURDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/15', CalendarDate.SATURDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/15', CalendarDate.SATURDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/17', CalendarDate.SATURDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/18', CalendarDate.SATURDAY) === 0)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/19', CalendarDate.SATURDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/20', CalendarDate.SATURDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/21', CalendarDate.SATURDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/22', CalendarDate.SATURDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/23', CalendarDate.SATURDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/24', CalendarDate.SATURDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/25', CalendarDate.SATURDAY) === 1)
      assert(CalendarDate.diffInWeek('2016/03/15', '2016/03/26', CalendarDate.SATURDAY) === 2)
    })

    it('basisDayOfWeek is empty', () => {
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/06') === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/07') === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/08') === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/09') === -1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/10') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/11') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/12') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/13') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/14') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/15') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/16') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/17') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/18') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/19') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/20') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/21') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/22') === 0)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/23') === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/24') === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/25') === 1)
      assert(CalendarDate.diffInWeek('2016/03/16', '2016/03/26') === 1)
    })

    it('invalid argument', () => {
      assert(isNaN(CalendarDate.diffInWeek('invalid', '2016/10/30')))
      assert(isNaN(CalendarDate.diffInWeek('2016/10/01', 'invalid')))
      assert(isNaN(CalendarDate.diffInWeek('2016/10/01', '2016/10/30', 'invalid')))
    })

  })

  describe('startOfMonth', () => {

    it('basic usage', () => {
      assert(CalendarDate.startOfMonth('2015/01/16', CalendarDate.SUNDAY) === '2014/12/28')
      assert(CalendarDate.startOfMonth('2014/12/01', CalendarDate.SUNDAY) === '2014/11/30')
      assert(CalendarDate.startOfMonth('2015/02/01', CalendarDate.SUNDAY) === '2015/01/25')
      assert(CalendarDate.startOfMonth('2015/03/01', CalendarDate.SUNDAY) === '2015/02/22')

      assert(CalendarDate.startOfMonth('2015/02/01', CalendarDate.MONDAY) === '2015/01/26')
      assert(CalendarDate.startOfMonth('2015/02/10', CalendarDate.MONDAY) === '2015/01/26')
      assert(CalendarDate.startOfMonth('2015/02/28', CalendarDate.MONDAY) === '2015/01/26')
      assert(CalendarDate.startOfMonth('2015/03/01', CalendarDate.MONDAY) === '2015/02/23')

      assert(CalendarDate.startOfMonth('2015/02/01', CalendarDate.SATURDAY) === '2015/01/31')
      assert(CalendarDate.startOfMonth('2015/02/28', CalendarDate.SATURDAY) === '2015/01/31')
      assert(CalendarDate.startOfMonth('2015/03/01', CalendarDate.SATURDAY) === '2015/02/28')
    })

    it('invalid argument', () => {
      assert(CalendarDate.startOfMonth('invalid', CalendarDate.SUNDAY) === '')
      assert(CalendarDate.startOfMonth('2016/10/06', null) === '')
      assert(CalendarDate.startOfMonth('invalid', null) === '')
    })

  })

  describe('startOfWeek', () => {

    it('basic usage', () => {
      assert(CalendarDate.startOfWeek('2015/01/11', CalendarDate.SUNDAY) === '2015/01/11')
      assert(CalendarDate.startOfWeek('2015/01/14', CalendarDate.SUNDAY) === '2015/01/11')
      assert(CalendarDate.startOfWeek('2015/01/17', CalendarDate.SUNDAY) === '2015/01/11')

      assert(CalendarDate.startOfWeek('2015/01/12', CalendarDate.MONDAY) === '2015/01/12')
      assert(CalendarDate.startOfWeek('2015/01/15', CalendarDate.MONDAY) === '2015/01/12')
      assert(CalendarDate.startOfWeek('2015/01/18', CalendarDate.MONDAY) === '2015/01/12')

      assert(CalendarDate.startOfWeek('2015/01/10', CalendarDate.SATURDAY) === '2015/01/10')
      assert(CalendarDate.startOfWeek('2015/01/13', CalendarDate.SATURDAY) === '2015/01/10')
      assert(CalendarDate.startOfWeek('2015/01/16', CalendarDate.SATURDAY) === '2015/01/10')
    })

    it('invalid argument', () => {
      assert(CalendarDate.startOfWeek('invalid', CalendarDate.SUNDAY) === '')
      assert(CalendarDate.startOfWeek('2016/10/06', null) === '')
      assert(CalendarDate.startOfWeek('invalid', null) === '')
    })

  })

  describe('weekOfMonth', () => {

    it('basic usage', () => {
      assert(CalendarDate.weekOfMonth('2016/01/01', CalendarDate.SUNDAY) === 4)
      assert(CalendarDate.weekOfMonth('2016/01/01', CalendarDate.MONDAY) === 4)
      assert(CalendarDate.weekOfMonth('2016/01/01', CalendarDate.TUESDAY) === 5)
      assert(CalendarDate.weekOfMonth('2016/01/01', CalendarDate.WEDNESDAY) === 5)
      assert(CalendarDate.weekOfMonth('2016/01/01', CalendarDate.THURSDAY) === 5)
      assert(CalendarDate.weekOfMonth('2016/01/01', CalendarDate.FRIDAY) === 1)
      assert(CalendarDate.weekOfMonth('2016/01/01', CalendarDate.SATURDAY) === 4)

      assert(CalendarDate.weekOfMonth('2016/03/01', CalendarDate.SUNDAY) === 4)
      assert(CalendarDate.weekOfMonth('2016/03/01', CalendarDate.MONDAY) === 5)
      assert(CalendarDate.weekOfMonth('2016/03/01', CalendarDate.TUESDAY) === 1)
      assert(CalendarDate.weekOfMonth('2016/03/01', CalendarDate.WEDNESDAY) === 4)
      assert(CalendarDate.weekOfMonth('2016/03/01', CalendarDate.THURSDAY) === 4)
      assert(CalendarDate.weekOfMonth('2016/03/01', CalendarDate.FRIDAY) === 4)
      assert(CalendarDate.weekOfMonth('2016/03/01', CalendarDate.SATURDAY) === 4)

      assert(CalendarDate.weekOfMonth('2016/03/15', CalendarDate.SUNDAY) === 2)
      assert(CalendarDate.weekOfMonth('2016/03/15', CalendarDate.MONDAY) === 2)
      assert(CalendarDate.weekOfMonth('2016/03/15', CalendarDate.TUESDAY) === 3)
      assert(CalendarDate.weekOfMonth('2016/03/15', CalendarDate.WEDNESDAY) === 2)
      assert(CalendarDate.weekOfMonth('2016/03/15', CalendarDate.THURSDAY) === 2)
      assert(CalendarDate.weekOfMonth('2016/03/15', CalendarDate.FRIDAY) === 2)
      assert(CalendarDate.weekOfMonth('2016/03/15', CalendarDate.SATURDAY) === 2)
    })

    it('basisDayOfWeek is empty', () => {
      assert(CalendarDate.weekOfMonth('2016/01/01') === 1)
      assert(CalendarDate.weekOfMonth('2016/01/11') === 2)
      assert(CalendarDate.weekOfMonth('2016/01/12') === 2)
      assert(CalendarDate.weekOfMonth('2016/01/13') === 2)
      assert(CalendarDate.weekOfMonth('2016/01/14') === 2)
      assert(CalendarDate.weekOfMonth('2016/01/15') === 3)
      assert(CalendarDate.weekOfMonth('2016/01/16') === 3)
      assert(CalendarDate.weekOfMonth('2016/01/17') === 3)
      assert(CalendarDate.weekOfMonth('2016/01/31') === 5)
    })

    it('invalid argument', () => {
      assert(isNaN(CalendarDate.weekOfMonth('invalid')))
    })

  })

})
