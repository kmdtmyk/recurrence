import assert from 'power-assert'
import Calendar from '../src/calendar.js'


describe('Calendar', () => {

  describe('diffInWeek', () => {

    it('basic usage', () => {
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/05', Calendar.SUNDAY) === -2)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/06', Calendar.SUNDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/07', Calendar.SUNDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/08', Calendar.SUNDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/09', Calendar.SUNDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/10', Calendar.SUNDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/11', Calendar.SUNDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/12', Calendar.SUNDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/13', Calendar.SUNDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/14', Calendar.SUNDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/15', Calendar.SUNDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/16', Calendar.SUNDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/17', Calendar.SUNDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/18', Calendar.SUNDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/19', Calendar.SUNDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/20', Calendar.SUNDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/21', Calendar.SUNDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/22', Calendar.SUNDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/23', Calendar.SUNDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/24', Calendar.SUNDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/25', Calendar.SUNDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/26', Calendar.SUNDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/27', Calendar.SUNDAY) === 2)

      assert(Calendar.diffInWeek('2016/03/15', '2016/03/04', Calendar.SATURDAY) === -2)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/05', Calendar.SATURDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/06', Calendar.SATURDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/07', Calendar.SATURDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/08', Calendar.SATURDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/09', Calendar.SATURDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/10', Calendar.SATURDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/11', Calendar.SATURDAY) === -1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/12', Calendar.SATURDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/13', Calendar.SATURDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/14', Calendar.SATURDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/15', Calendar.SATURDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/15', Calendar.SATURDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/17', Calendar.SATURDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/18', Calendar.SATURDAY) === 0)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/19', Calendar.SATURDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/20', Calendar.SATURDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/21', Calendar.SATURDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/22', Calendar.SATURDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/23', Calendar.SATURDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/24', Calendar.SATURDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/25', Calendar.SATURDAY) === 1)
      assert(Calendar.diffInWeek('2016/03/15', '2016/03/26', Calendar.SATURDAY) === 2)
    })

    it('basisDayOfWeek is empty', () => {
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/06') === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/07') === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/08') === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/09') === -1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/10') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/11') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/12') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/13') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/14') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/15') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/16') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/17') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/18') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/19') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/20') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/21') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/22') === 0)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/23') === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/24') === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/25') === 1)
      assert(Calendar.diffInWeek('2016/03/16', '2016/03/26') === 1)
    })

    it('invalid argument', () => {
      assert(isNaN(Calendar.diffInWeek('invalid', '2016/10/30')))
      assert(isNaN(Calendar.diffInWeek('2016/10/01', 'invalid')))
      assert(isNaN(Calendar.diffInWeek('2016/10/01', '2016/10/30', 'invalid')))
    })

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

    it('basic usage', () => {
      assert(Calendar.startOfWeek('2015/01/11', Calendar.SUNDAY) === '2015/01/11')
      assert(Calendar.startOfWeek('2015/01/14', Calendar.SUNDAY) === '2015/01/11')
      assert(Calendar.startOfWeek('2015/01/17', Calendar.SUNDAY) === '2015/01/11')

      assert(Calendar.startOfWeek('2015/01/12', Calendar.MONDAY) === '2015/01/12')
      assert(Calendar.startOfWeek('2015/01/15', Calendar.MONDAY) === '2015/01/12')
      assert(Calendar.startOfWeek('2015/01/18', Calendar.MONDAY) === '2015/01/12')

      assert(Calendar.startOfWeek('2015/01/10', Calendar.SATURDAY) === '2015/01/10')
      assert(Calendar.startOfWeek('2015/01/13', Calendar.SATURDAY) === '2015/01/10')
      assert(Calendar.startOfWeek('2015/01/16', Calendar.SATURDAY) === '2015/01/10')
    })

    it('invalid argument', () => {
      assert(Calendar.startOfWeek('invalid', Calendar.SUNDAY) === '')
      assert(Calendar.startOfWeek('2016/10/06', null) === '')
      assert(Calendar.startOfWeek('invalid', null) === '')
    })

  })

  describe('weekOfMonth', () => {

    it('basic usage', () => {
      assert(Calendar.weekOfMonth('2016/01/01', Calendar.SUNDAY) === 4)
      assert(Calendar.weekOfMonth('2016/01/01', Calendar.MONDAY) === 4)
      assert(Calendar.weekOfMonth('2016/01/01', Calendar.TUESDAY) === 5)
      assert(Calendar.weekOfMonth('2016/01/01', Calendar.WEDNESDAY) === 5)
      assert(Calendar.weekOfMonth('2016/01/01', Calendar.THURSDAY) === 5)
      assert(Calendar.weekOfMonth('2016/01/01', Calendar.FRIDAY) === 1)
      assert(Calendar.weekOfMonth('2016/01/01', Calendar.SATURDAY) === 4)

      assert(Calendar.weekOfMonth('2016/03/01', Calendar.SUNDAY) === 4)
      assert(Calendar.weekOfMonth('2016/03/01', Calendar.MONDAY) === 5)
      assert(Calendar.weekOfMonth('2016/03/01', Calendar.TUESDAY) === 1)
      assert(Calendar.weekOfMonth('2016/03/01', Calendar.WEDNESDAY) === 4)
      assert(Calendar.weekOfMonth('2016/03/01', Calendar.THURSDAY) === 4)
      assert(Calendar.weekOfMonth('2016/03/01', Calendar.FRIDAY) === 4)
      assert(Calendar.weekOfMonth('2016/03/01', Calendar.SATURDAY) === 4)

      assert(Calendar.weekOfMonth('2016/03/15', Calendar.SUNDAY) === 2)
      assert(Calendar.weekOfMonth('2016/03/15', Calendar.MONDAY) === 2)
      assert(Calendar.weekOfMonth('2016/03/15', Calendar.TUESDAY) === 3)
      assert(Calendar.weekOfMonth('2016/03/15', Calendar.WEDNESDAY) === 2)
      assert(Calendar.weekOfMonth('2016/03/15', Calendar.THURSDAY) === 2)
      assert(Calendar.weekOfMonth('2016/03/15', Calendar.FRIDAY) === 2)
      assert(Calendar.weekOfMonth('2016/03/15', Calendar.SATURDAY) === 2)
    })

    it('basisDayOfWeek is empty', () => {
      assert(Calendar.weekOfMonth('2016/01/01') === 1)
      assert(Calendar.weekOfMonth('2016/01/11') === 2)
      assert(Calendar.weekOfMonth('2016/01/12') === 2)
      assert(Calendar.weekOfMonth('2016/01/13') === 2)
      assert(Calendar.weekOfMonth('2016/01/14') === 2)
      assert(Calendar.weekOfMonth('2016/01/15') === 3)
      assert(Calendar.weekOfMonth('2016/01/16') === 3)
      assert(Calendar.weekOfMonth('2016/01/17') === 3)
      assert(Calendar.weekOfMonth('2016/01/31') === 5)
    })

    it('invalid argument', () => {
      assert(isNaN(Calendar.weekOfMonth('invalid')))
    })

  })

})
