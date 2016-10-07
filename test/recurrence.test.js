import assert from 'power-assert'
import Recurrence from '../src/recurrence'


describe('Recurrence', () => {

  describe('includes', () => {

    describe('daily', () => {

      it('startDate only', () => {
        const options = {
          startDate: '2016/06/22',
        }
        assert(Recurrence.includes(options, '2016/06/21') === false)
        assert(Recurrence.includes(options, '2016/06/22') === true)
        assert(Recurrence.includes(options, '2016/06/23') === true)
      })

      it('startDate and endDate', () => {
        const options = {
          startDate: '2016/06/22',
          endDate: '2016/06/24',
        }
        assert(Recurrence.includes(options, '2016/06/21') === false)
        assert(Recurrence.includes(options, '2016/06/22') === true)
        assert(Recurrence.includes(options, '2016/06/23') === true)
        assert(Recurrence.includes(options, '2016/06/24') === true)
        assert(Recurrence.includes(options, '2016/06/25') === false)
      })

      it('interval', () => {
        const options = {
          startDate: '2016/06/22',
          interval: 2,
        }
        assert(Recurrence.includes(options, '2016/06/22') === true)
        assert(Recurrence.includes(options, '2016/06/23') === false)
        assert(Recurrence.includes(options, '2016/06/24') === true)
      })

      it('different date format ', () => {
        const options = {
          startDate: '2016/06/01',
        }
        assert(Recurrence.includes(options, '2016/06/05') === true)
        assert(Recurrence.includes(options, '2016-06-05') === true)
        assert(Recurrence.includes(options, '2016.06.05') === true)
        assert(Recurrence.includes(options, '2016/6/5') === true)
        assert(Recurrence.includes(options, '2016-6-5') === true)
        assert(Recurrence.includes(options, '2016.6.5') === true)
      })

    })

    describe('weekly', () => {

      it('every monday', () => {
        const options = {
          startDate: '2016/10/01',
          every: 'week',
          dayOfWeeks: [Recurrence.MONDAY],
        }
        assert(Recurrence.includes(options, '2016/10/01') === false)
        assert(Recurrence.includes(options, '2016/10/02') === false)
        assert(Recurrence.includes(options, '2016/10/03') === true)
        assert(Recurrence.includes(options, '2016/10/04') === false)
        assert(Recurrence.includes(options, '2016/10/05') === false)
        assert(Recurrence.includes(options, '2016/10/06') === false)
        assert(Recurrence.includes(options, '2016/10/07') === false)
        assert(Recurrence.includes(options, '2016/10/08') === false)
        assert(Recurrence.includes(options, '2016/10/09') === false)
        assert(Recurrence.includes(options, '2016/10/10') === true)
        assert(Recurrence.includes(options, '2016/10/11') === false)
      })

      it('every monday, wednesday and friday', () => {
        const options = {
          startDate: '2016/10/01',
          every: 'week',
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2016/10/01') === false)
        assert(Recurrence.includes(options, '2016/10/02') === false)
        assert(Recurrence.includes(options, '2016/10/03') === true)
        assert(Recurrence.includes(options, '2016/10/04') === false)
        assert(Recurrence.includes(options, '2016/10/05') === true)
        assert(Recurrence.includes(options, '2016/10/06') === false)
        assert(Recurrence.includes(options, '2016/10/07') === true)
        assert(Recurrence.includes(options, '2016/10/08') === false)
        assert(Recurrence.includes(options, '2016/10/09') === false)
        assert(Recurrence.includes(options, '2016/10/10') === true)
        assert(Recurrence.includes(options, '2016/10/11') === false)
      })

      it('alternate week monday, wednesday and friday without basis day of week', () => {
        const options = {
          startDate: '2015/12/16',
          every: 'week',
          interval: 2,
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2015/12/14') === false)
        assert(Recurrence.includes(options, '2015/12/16') === true)
        assert(Recurrence.includes(options, '2015/12/18') === true)
        assert(Recurrence.includes(options, '2015/12/21') === true)
        assert(Recurrence.includes(options, '2015/12/23') === false)
        assert(Recurrence.includes(options, '2015/12/25') === false)
        assert(Recurrence.includes(options, '2015/12/28') === false)
        assert(Recurrence.includes(options, '2015/12/30') === true)
        assert(Recurrence.includes(options, '2016/01/01') === true)
        assert(Recurrence.includes(options, '2016/01/04') === true)
      })

      it('alternate week monday, wednesday and friday with basis sunday', () => {
        const options = {
          startDate: '2015/12/16',
          every: 'week',
          interval: 2,
          basisDayOfWeek: Recurrence.SUNDAY,
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2015/12/14') === false)
        assert(Recurrence.includes(options, '2015/12/16') === true)
        assert(Recurrence.includes(options, '2015/12/18') === true)
        assert(Recurrence.includes(options, '2015/12/21') === false)
        assert(Recurrence.includes(options, '2015/12/23') === false)
        assert(Recurrence.includes(options, '2015/12/25') === false)
        assert(Recurrence.includes(options, '2015/12/28') === true)
        assert(Recurrence.includes(options, '2015/12/30') === true)
        assert(Recurrence.includes(options, '2016/01/01') === true)
      })

    })

    describe('monthly', () => {

      it('10th day of every months', () => {
        const options = {
          startDate: '2016/10/10',
          every: 'month',
        }
        assert(Recurrence.includes(options, '2016/09/10') === false)
        assert(Recurrence.includes(options, '2016/10/10') === true)
        assert(Recurrence.includes(options, '2016/10/25') === false)
        assert(Recurrence.includes(options, '2016/11/10') === true)
      })

      it('15th day of every two months', () => {
        const options = {
          startDate: '2016/10/15',
          every: 'month',
          interval: 2,
        }
        assert(Recurrence.includes(options, '2016/09/15') === false)
        assert(Recurrence.includes(options, '2016/10/15') === true)
        assert(Recurrence.includes(options, '2016/11/15') === false)
        assert(Recurrence.includes(options, '2016/12/15') === true)
      })

      it('2nd monday, wednesday and friday every months', () => {
        const options = {
          startDate: '2016/10/10',
          every: 'month',
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2016/10/10') === true)
        assert(Recurrence.includes(options, '2016/10/11') === false)
        assert(Recurrence.includes(options, '2016/10/12') === true)
        assert(Recurrence.includes(options, '2016/10/13') === false)
        assert(Recurrence.includes(options, '2016/10/14') === true)

        assert(Recurrence.includes(options, '2016/11/07') === false)
        assert(Recurrence.includes(options, '2016/11/09') === true)
        assert(Recurrence.includes(options, '2016/11/11') === true)
        assert(Recurrence.includes(options, '2016/11/14') === true)

        assert(Recurrence.includes(options, '2016/12/09') === true)
        assert(Recurrence.includes(options, '2016/12/12') === true)
        assert(Recurrence.includes(options, '2016/12/14') === true)
        assert(Recurrence.includes(options, '2016/12/16') === false)
      })

      it('2nd monday, wednesday and friday every two months', () => {
        const options = {
          startDate: '2016/10/10',
          every: 'month',
          interval: 2,
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2016/10/10') === true)
        assert(Recurrence.includes(options, '2016/10/11') === false)
        assert(Recurrence.includes(options, '2016/10/12') === true)
        assert(Recurrence.includes(options, '2016/10/13') === false)
        assert(Recurrence.includes(options, '2016/10/14') === true)

        assert(Recurrence.includes(options, '2016/11/07') === false)
        assert(Recurrence.includes(options, '2016/11/09') === false)
        assert(Recurrence.includes(options, '2016/11/11') === false)
        assert(Recurrence.includes(options, '2016/11/14') === false)

        assert(Recurrence.includes(options, '2016/12/09') === true)
        assert(Recurrence.includes(options, '2016/12/12') === true)
        assert(Recurrence.includes(options, '2016/12/14') === true)
        assert(Recurrence.includes(options, '2016/12/16') === false)
      })

      it('2nd monday, wednesday and friday every months with basis sunday', () => {
        const options = {
          startDate: '2016/11/09',
          every: 'month',
          basisDayOfWeek: Recurrence.SUNDAY,
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2016/11/07') === false)
        assert(Recurrence.includes(options, '2016/11/09') === true)
        assert(Recurrence.includes(options, '2016/11/11') === true)
        assert(Recurrence.includes(options, '2016/11/14') === false)

        assert(Recurrence.includes(options, '2016/12/05') === true)
        assert(Recurrence.includes(options, '2016/12/07') === true)
        assert(Recurrence.includes(options, '2016/12/09') === true)
        assert(Recurrence.includes(options, '2016/12/12') === false)
      })

    })

    describe('yearly', () => {

      it('10/25 of every years', () => {
        const options = {
          startDate: '2016/10/25',
          every: 'year',
        }
        assert(Recurrence.includes(options, '2015/10/25') === false)
        assert(Recurrence.includes(options, '2016/10/25') === true)
        assert(Recurrence.includes(options, '2016/10/30') === false)
        assert(Recurrence.includes(options, '2016/11/25') === false)
        assert(Recurrence.includes(options, '2017/10/25') === true)
        assert(Recurrence.includes(options, '2018/10/25') === true)
      })

      it('10/25 of every two years', () => {
        const options = {
          startDate: '2016/10/25',
          every: 'year',
          interval: 2,
        }
        assert(Recurrence.includes(options, '2015/10/25') === false)
        assert(Recurrence.includes(options, '2016/10/25') === true)
        assert(Recurrence.includes(options, '2017/10/25') === false)
        assert(Recurrence.includes(options, '2018/10/25') === true)
        assert(Recurrence.includes(options, '2019/10/25') === false)
      })

      it('2nd monday, wednesday and friday of every July', () => {
        const options = {
          startDate: '2016/06/08',
          every: 'year',
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2016/06/06') === false)
        assert(Recurrence.includes(options, '2016/06/08') === true)
        assert(Recurrence.includes(options, '2016/06/10') === true)
        assert(Recurrence.includes(options, '2016/06/13') === true)
        assert(Recurrence.includes(options, '2016/06/15') === false)
        assert(Recurrence.includes(options, '2016/06/17') === false)

        assert(Recurrence.includes(options, '2017/06/05') === false)
        assert(Recurrence.includes(options, '2017/06/07') === false)
        assert(Recurrence.includes(options, '2017/06/09') === true)
        assert(Recurrence.includes(options, '2017/06/12') === true)
        assert(Recurrence.includes(options, '2017/06/14') === true)
        assert(Recurrence.includes(options, '2017/06/16') === false)
      })

      it('2nd monday, wednesday and friday of every July with basis sunday', () => {
        const options = {
          startDate: '2016/06/15',
          every: 'year',
          basisDayOfWeek: Recurrence.SUNDAY,
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2016/06/13') === false)
        assert(Recurrence.includes(options, '2016/06/15') === true)
        assert(Recurrence.includes(options, '2016/06/17') === true)
        assert(Recurrence.includes(options, '2016/06/20') === false)

        assert(Recurrence.includes(options, '2017/06/09') === false)
        assert(Recurrence.includes(options, '2017/06/12') === true)
        assert(Recurrence.includes(options, '2017/06/14') === true)
        assert(Recurrence.includes(options, '2017/06/16') === true)
        assert(Recurrence.includes(options, '2017/06/19') === false)
      })

      it('2nd monday, wednesday and friday of every two July with basis sunday', () => {
        const options = {
          startDate: '2016/06/15',
          every: 'year',
          basisDayOfWeek: Recurrence.SUNDAY,
          interval: 2,
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2016/06/13') === false)
        assert(Recurrence.includes(options, '2016/06/15') === true)
        assert(Recurrence.includes(options, '2016/06/17') === true)
        assert(Recurrence.includes(options, '2016/06/20') === false)

        assert(Recurrence.includes(options, '2017/06/12') === false)
        assert(Recurrence.includes(options, '2017/06/14') === false)
        assert(Recurrence.includes(options, '2017/06/16') === false)

        assert(Recurrence.includes(options, '2018/06/08') === false)
        assert(Recurrence.includes(options, '2018/06/11') === true)
        assert(Recurrence.includes(options, '2018/06/13') === true)
        assert(Recurrence.includes(options, '2018/06/15') === true)
        assert(Recurrence.includes(options, '2018/06/18') === false)
      })

    })

  })

  xdescribe('next', () => {

    it('daily', () => {
      let r = new Recurrence({
        startDate: '2016/07/13',
      })
      assert(r.next('2016/07/11') === '2016/07/13')
      assert(r.next('2016/07/12') === '2016/07/13')
      assert(r.next('2016/07/13') === '2016/07/14')
      assert(r.next('2016/07/14') === '2016/07/15')
    })

    it('daily interval', () => {
      let r = new Recurrence({
        startDate: '2016/07/13',
        interval: 2,
      })
      assert(r.next('2016/07/11') === '2016/07/13')
      assert(r.next('2016/07/12') === '2016/07/13')
      assert(r.next('2016/07/13') === '2016/07/15')
      assert(r.next('2016/07/14') === '2016/07/15')
      assert(r.next('2016/07/15') === '2016/07/17')
    })

  })

  it('inheritance properties from DayOfWeek', () => {
    assert(Recurrence.SUNDAY === Recurrence.SUNDAY)
    assert(Recurrence.MONDAY === Recurrence.MONDAY)
    assert(Recurrence.TUESDAY === Recurrence.TUESDAY)
    assert(Recurrence.WEDNESDAY === Recurrence.WEDNESDAY)
    assert(Recurrence.THURSDAY === Recurrence.THURSDAY)
    assert(Recurrence.FRIDAY === Recurrence.FRIDAY)
    assert(Recurrence.SATURDAY === Recurrence.SATURDAY)
  })

  it('static const properties can not be assigned', () => {
    assert.throws(() => {Recurrence.SUNDAY = 0}, TypeError)
    assert.throws(() => {Recurrence.MONDAY = 0}, TypeError)
    assert.throws(() => {Recurrence.TUESDAY = 0}, TypeError)
    assert.throws(() => {Recurrence.WEDNESDAY = 0}, TypeError)
    assert.throws(() => {Recurrence.THURSDAY = 0}, TypeError)
    assert.throws(() => {Recurrence.FRIDAY = 0}, TypeError)
    assert.throws(() => {Recurrence.SATURDAY = 0}, TypeError)
  })

})
