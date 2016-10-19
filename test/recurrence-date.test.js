import assert from 'power-assert'
import RecurrenceDate from '../src/recurrence-date'


describe('RecurrenceDate', () => {

  describe('includes', () => {

    describe('daily', () => {

      it('startDate only', () => {
        const options = {
          startDate: '2016/06/22',
        }
        assert(RecurrenceDate.includes(options, '2016/06/21') === false)
        assert(RecurrenceDate.includes(options, '2016/06/22') === true)
        assert(RecurrenceDate.includes(options, '2016/06/23') === true)
      })

      it('startDate and endDate', () => {
        const options = {
          startDate: '2016/06/22',
          endDate: '2016/06/24',
        }
        assert(RecurrenceDate.includes(options, '2016/06/21') === false)
        assert(RecurrenceDate.includes(options, '2016/06/22') === true)
        assert(RecurrenceDate.includes(options, '2016/06/23') === true)
        assert(RecurrenceDate.includes(options, '2016/06/24') === true)
        assert(RecurrenceDate.includes(options, '2016/06/25') === false)
      })

      it('interval', () => {
        const options = {
          startDate: '2016/06/22',
          interval: 2,
        }
        assert(RecurrenceDate.includes(options, '2016/06/22') === true)
        assert(RecurrenceDate.includes(options, '2016/06/23') === false)
        assert(RecurrenceDate.includes(options, '2016/06/24') === true)
      })

      it('different date format ', () => {
        const options = {
          startDate: '2016/06/01',
        }
        assert(RecurrenceDate.includes(options, '2016/06/05') === true)
        assert(RecurrenceDate.includes(options, '2016-06-05') === true)
        assert(RecurrenceDate.includes(options, '2016.06.05') === true)
        assert(RecurrenceDate.includes(options, '2016/6/5') === true)
        assert(RecurrenceDate.includes(options, '2016-6-5') === true)
        assert(RecurrenceDate.includes(options, '2016.6.5') === true)
      })

    })

    describe('weekly', () => {

      it('every monday', () => {
        const options = {
          startDate: '2016/10/01',
          every: 'week',
          dayOfWeeks: [RecurrenceDate.MONDAY],
        }
        assert(RecurrenceDate.includes(options, '2016/10/01') === false)
        assert(RecurrenceDate.includes(options, '2016/10/02') === false)
        assert(RecurrenceDate.includes(options, '2016/10/03') === true)
        assert(RecurrenceDate.includes(options, '2016/10/04') === false)
        assert(RecurrenceDate.includes(options, '2016/10/05') === false)
        assert(RecurrenceDate.includes(options, '2016/10/06') === false)
        assert(RecurrenceDate.includes(options, '2016/10/07') === false)
        assert(RecurrenceDate.includes(options, '2016/10/08') === false)
        assert(RecurrenceDate.includes(options, '2016/10/09') === false)
        assert(RecurrenceDate.includes(options, '2016/10/10') === true)
        assert(RecurrenceDate.includes(options, '2016/10/11') === false)
      })

      it('every monday, wednesday and friday', () => {
        const options = {
          startDate: '2016/10/01',
          every: 'week',
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2016/10/01') === false)
        assert(RecurrenceDate.includes(options, '2016/10/02') === false)
        assert(RecurrenceDate.includes(options, '2016/10/03') === true)
        assert(RecurrenceDate.includes(options, '2016/10/04') === false)
        assert(RecurrenceDate.includes(options, '2016/10/05') === true)
        assert(RecurrenceDate.includes(options, '2016/10/06') === false)
        assert(RecurrenceDate.includes(options, '2016/10/07') === true)
        assert(RecurrenceDate.includes(options, '2016/10/08') === false)
        assert(RecurrenceDate.includes(options, '2016/10/09') === false)
        assert(RecurrenceDate.includes(options, '2016/10/10') === true)
        assert(RecurrenceDate.includes(options, '2016/10/11') === false)
      })

      it('alternate week monday, wednesday and friday without basis day of week', () => {
        const options = {
          startDate: '2015/12/16',
          every: 'week',
          interval: 2,
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2015/12/14') === false)
        assert(RecurrenceDate.includes(options, '2015/12/16') === true)
        assert(RecurrenceDate.includes(options, '2015/12/18') === true)
        assert(RecurrenceDate.includes(options, '2015/12/21') === true)
        assert(RecurrenceDate.includes(options, '2015/12/23') === false)
        assert(RecurrenceDate.includes(options, '2015/12/25') === false)
        assert(RecurrenceDate.includes(options, '2015/12/28') === false)
        assert(RecurrenceDate.includes(options, '2015/12/30') === true)
        assert(RecurrenceDate.includes(options, '2016/01/01') === true)
        assert(RecurrenceDate.includes(options, '2016/01/04') === true)
      })

      it('alternate week monday, wednesday and friday with basis sunday', () => {
        const options = {
          startDate: '2015/12/16',
          every: 'week',
          interval: 2,
          basisDayOfWeek: RecurrenceDate.SUNDAY,
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2015/12/14') === false)
        assert(RecurrenceDate.includes(options, '2015/12/16') === true)
        assert(RecurrenceDate.includes(options, '2015/12/18') === true)
        assert(RecurrenceDate.includes(options, '2015/12/21') === false)
        assert(RecurrenceDate.includes(options, '2015/12/23') === false)
        assert(RecurrenceDate.includes(options, '2015/12/25') === false)
        assert(RecurrenceDate.includes(options, '2015/12/28') === true)
        assert(RecurrenceDate.includes(options, '2015/12/30') === true)
        assert(RecurrenceDate.includes(options, '2016/01/01') === true)
      })

    })

    describe('monthly', () => {

      it('10th day of every months', () => {
        const options = {
          startDate: '2016/10/10',
          every: 'month',
        }
        assert(RecurrenceDate.includes(options, '2016/09/10') === false)
        assert(RecurrenceDate.includes(options, '2016/10/10') === true)
        assert(RecurrenceDate.includes(options, '2016/10/25') === false)
        assert(RecurrenceDate.includes(options, '2016/11/10') === true)
      })

      it('15th day of every two months', () => {
        const options = {
          startDate: '2016/10/15',
          every: 'month',
          interval: 2,
        }
        assert(RecurrenceDate.includes(options, '2016/09/15') === false)
        assert(RecurrenceDate.includes(options, '2016/10/15') === true)
        assert(RecurrenceDate.includes(options, '2016/11/15') === false)
        assert(RecurrenceDate.includes(options, '2016/12/15') === true)
      })

      it('2nd monday, wednesday and friday every months', () => {
        const options = {
          startDate: '2016/10/10',
          every: 'month',
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2016/10/10') === true)
        assert(RecurrenceDate.includes(options, '2016/10/11') === false)
        assert(RecurrenceDate.includes(options, '2016/10/12') === true)
        assert(RecurrenceDate.includes(options, '2016/10/13') === false)
        assert(RecurrenceDate.includes(options, '2016/10/14') === true)

        assert(RecurrenceDate.includes(options, '2016/11/07') === false)
        assert(RecurrenceDate.includes(options, '2016/11/09') === true)
        assert(RecurrenceDate.includes(options, '2016/11/11') === true)
        assert(RecurrenceDate.includes(options, '2016/11/14') === true)

        assert(RecurrenceDate.includes(options, '2016/12/09') === true)
        assert(RecurrenceDate.includes(options, '2016/12/12') === true)
        assert(RecurrenceDate.includes(options, '2016/12/14') === true)
        assert(RecurrenceDate.includes(options, '2016/12/16') === false)
      })

      it('2nd monday, wednesday and friday every two months', () => {
        const options = {
          startDate: '2016/10/10',
          every: 'month',
          interval: 2,
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2016/10/10') === true)
        assert(RecurrenceDate.includes(options, '2016/10/11') === false)
        assert(RecurrenceDate.includes(options, '2016/10/12') === true)
        assert(RecurrenceDate.includes(options, '2016/10/13') === false)
        assert(RecurrenceDate.includes(options, '2016/10/14') === true)

        assert(RecurrenceDate.includes(options, '2016/11/07') === false)
        assert(RecurrenceDate.includes(options, '2016/11/09') === false)
        assert(RecurrenceDate.includes(options, '2016/11/11') === false)
        assert(RecurrenceDate.includes(options, '2016/11/14') === false)

        assert(RecurrenceDate.includes(options, '2016/12/09') === true)
        assert(RecurrenceDate.includes(options, '2016/12/12') === true)
        assert(RecurrenceDate.includes(options, '2016/12/14') === true)
        assert(RecurrenceDate.includes(options, '2016/12/16') === false)
      })

      it('2nd monday, wednesday and friday every months with basis sunday', () => {
        const options = {
          startDate: '2016/11/09',
          every: 'month',
          basisDayOfWeek: RecurrenceDate.SUNDAY,
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2016/11/07') === false)
        assert(RecurrenceDate.includes(options, '2016/11/09') === true)
        assert(RecurrenceDate.includes(options, '2016/11/11') === true)
        assert(RecurrenceDate.includes(options, '2016/11/14') === false)

        assert(RecurrenceDate.includes(options, '2016/12/05') === true)
        assert(RecurrenceDate.includes(options, '2016/12/07') === true)
        assert(RecurrenceDate.includes(options, '2016/12/09') === true)
        assert(RecurrenceDate.includes(options, '2016/12/12') === false)
      })

      it('5th monday with basis sunday', () => {
        const options = {
          startDate: '2016/05/30',
          every: 'month',
          basisDayOfWeek: RecurrenceDate.SUNDAY,
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2017/01/30') === true)
        assert(RecurrenceDate.includes(options, '2017/03/06') === false)
        assert(RecurrenceDate.includes(options, '2017/04/03') === false)
        assert(RecurrenceDate.includes(options, '2017/05/01') === true)
        assert(RecurrenceDate.includes(options, '2017/06/05') === false)
        assert(RecurrenceDate.includes(options, '2017/07/03') === false)
        assert(RecurrenceDate.includes(options, '2017/07/31') === true)
        assert(RecurrenceDate.includes(options, '2017/09/04') === false)
        assert(RecurrenceDate.includes(options, '2017/10/02') === false)
        assert(RecurrenceDate.includes(options, '2017/10/30') === true)
        assert(RecurrenceDate.includes(options, '2017/12/04') === false)
      })

    })

    describe('yearly', () => {

      it('10/25 of every years', () => {
        const options = {
          startDate: '2016/10/25',
          every: 'year',
        }
        assert(RecurrenceDate.includes(options, '2015/10/25') === false)
        assert(RecurrenceDate.includes(options, '2016/10/25') === true)
        assert(RecurrenceDate.includes(options, '2016/10/30') === false)
        assert(RecurrenceDate.includes(options, '2016/11/25') === false)
        assert(RecurrenceDate.includes(options, '2017/10/25') === true)
        assert(RecurrenceDate.includes(options, '2018/10/25') === true)
      })

      it('10/25 of every two years', () => {
        const options = {
          startDate: '2016/10/25',
          every: 'year',
          interval: 2,
        }
        assert(RecurrenceDate.includes(options, '2015/10/25') === false)
        assert(RecurrenceDate.includes(options, '2016/10/25') === true)
        assert(RecurrenceDate.includes(options, '2017/10/25') === false)
        assert(RecurrenceDate.includes(options, '2018/10/25') === true)
        assert(RecurrenceDate.includes(options, '2019/10/25') === false)
      })

      it('2nd monday, wednesday and friday of every July', () => {
        const options = {
          startDate: '2016/06/08',
          every: 'year',
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2016/06/06') === false)
        assert(RecurrenceDate.includes(options, '2016/06/07') === false)
        assert(RecurrenceDate.includes(options, '2016/06/08') === true)
        assert(RecurrenceDate.includes(options, '2016/06/09') === false)
        assert(RecurrenceDate.includes(options, '2016/06/10') === true)
        assert(RecurrenceDate.includes(options, '2016/06/11') === false)
        assert(RecurrenceDate.includes(options, '2016/06/12') === false)
        assert(RecurrenceDate.includes(options, '2016/06/13') === true)
        assert(RecurrenceDate.includes(options, '2016/06/14') === false)
        assert(RecurrenceDate.includes(options, '2016/06/15') === false)
        assert(RecurrenceDate.includes(options, '2016/06/16') === false)
        assert(RecurrenceDate.includes(options, '2016/06/17') === false)

        assert(RecurrenceDate.includes(options, '2017/06/05') === false)
        assert(RecurrenceDate.includes(options, '2017/06/07') === false)
        assert(RecurrenceDate.includes(options, '2017/06/09') === true)
        assert(RecurrenceDate.includes(options, '2017/06/12') === true)
        assert(RecurrenceDate.includes(options, '2017/06/14') === true)
        assert(RecurrenceDate.includes(options, '2017/06/16') === false)
      })

      it('2nd monday, wednesday and friday of every July with basis sunday', () => {
        const options = {
          startDate: '2016/06/15',
          every: 'year',
          basisDayOfWeek: RecurrenceDate.SUNDAY,
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2016/06/13') === false)
        assert(RecurrenceDate.includes(options, '2016/06/15') === true)
        assert(RecurrenceDate.includes(options, '2016/06/17') === true)
        assert(RecurrenceDate.includes(options, '2016/06/20') === false)

        assert(RecurrenceDate.includes(options, '2017/06/09') === false)
        assert(RecurrenceDate.includes(options, '2017/06/12') === true)
        assert(RecurrenceDate.includes(options, '2017/06/14') === true)
        assert(RecurrenceDate.includes(options, '2017/06/16') === true)
        assert(RecurrenceDate.includes(options, '2017/06/19') === false)
      })

      it('2nd monday, wednesday and friday of every two July with basis sunday', () => {
        const options = {
          startDate: '2016/06/15',
          every: 'year',
          basisDayOfWeek: RecurrenceDate.SUNDAY,
          interval: 2,
          dayOfWeeks: [
            RecurrenceDate.MONDAY,
            RecurrenceDate.WEDNESDAY,
            RecurrenceDate.FRIDAY,
          ],
        }
        assert(RecurrenceDate.includes(options, '2016/06/13') === false)
        assert(RecurrenceDate.includes(options, '2016/06/15') === true)
        assert(RecurrenceDate.includes(options, '2016/06/17') === true)
        assert(RecurrenceDate.includes(options, '2016/06/20') === false)

        assert(RecurrenceDate.includes(options, '2017/06/12') === false)
        assert(RecurrenceDate.includes(options, '2017/06/14') === false)
        assert(RecurrenceDate.includes(options, '2017/06/16') === false)

        assert(RecurrenceDate.includes(options, '2018/06/08') === false)
        assert(RecurrenceDate.includes(options, '2018/06/11') === true)
        assert(RecurrenceDate.includes(options, '2018/06/13') === true)
        assert(RecurrenceDate.includes(options, '2018/06/15') === true)
        assert(RecurrenceDate.includes(options, '2018/06/18') === false)
      })

    })

  })

  describe('next', () => {

    it('a day', () => {
      const options = {
        startDate: '2015/06/10',
        endDate: '2015/06/10',
      }
      assert(RecurrenceDate.next(options, '2015/06/01', 1) === '2015/06/10')
      assert(RecurrenceDate.next(options, '2015/06/01', 2) === '')
      assert(RecurrenceDate.next(options, '2015/06/01', -1) === '')
      assert(RecurrenceDate.next(options, '2015/07/01', 1) === '')
      assert(RecurrenceDate.next(options, '2015/07/01', -1) === '2015/06/10')
    })

    it('daily', () => {
      const options = {
        startDate: '2015/06/11',
        endDate: '2015/06/15',
      }
      assert(RecurrenceDate.next(options, '2015/06/01', 1) === '2015/06/11')
      assert(RecurrenceDate.next(options, '2015/06/01', 3) === '2015/06/13')
      assert(RecurrenceDate.next(options, '2015/06/01', 5) === '2015/06/15')
      assert(RecurrenceDate.next(options, '2015/06/01', 6) === '')

      assert(RecurrenceDate.next(options, '2015/06/30', -1) === '2015/06/15')
      assert(RecurrenceDate.next(options, '2015/06/30', -3) === '2015/06/13')
      assert(RecurrenceDate.next(options, '2015/06/30', -5) === '2015/06/11')
      assert(RecurrenceDate.next(options, '2015/06/30', -6) === '')

      assert(RecurrenceDate.next(options, '2015/06/13', 1) === '2015/06/14')
      assert(RecurrenceDate.next(options, '2015/06/13', 2) === '2015/06/15')
      assert(RecurrenceDate.next(options, '2015/06/13', 3) === '')

      assert(RecurrenceDate.next(options, '2015/06/13', -1) === '2015/06/12')
      assert(RecurrenceDate.next(options, '2015/06/13', -2) === '2015/06/11')
      assert(RecurrenceDate.next(options, '2015/06/13', -3) === '')
    })

    it('alternate days', () => {
      const options = {
        startDate: '2015/06/11',
        endDate: '2015/06/15',
        every: 'day',
        interval: 2,
      }
      assert(RecurrenceDate.next(options, '2015/06/01', 1) === '2015/06/11')
      assert(RecurrenceDate.next(options, '2015/06/01', 2) === '2015/06/13')
      assert(RecurrenceDate.next(options, '2015/06/01', 3) === '2015/06/15')
      assert(RecurrenceDate.next(options, '2015/06/01', 4) === '')

      assert(RecurrenceDate.next(options, '2015/06/30', -1) === '2015/06/15')
      assert(RecurrenceDate.next(options, '2015/06/30', -2) === '2015/06/13')
      assert(RecurrenceDate.next(options, '2015/06/30', -3) === '2015/06/11')
      assert(RecurrenceDate.next(options, '2015/06/30', -4) === '')
    })

    it('monday, wednesday and friday', () => {
      const options = {
        startDate: '2015/12/01',
        endDate: '2015/12/31',
        every: 'week',
        dayOfWeeks: [
          RecurrenceDate.MONDAY,
          RecurrenceDate.WEDNESDAY,
          RecurrenceDate.FRIDAY,
        ],
      }
      assert(RecurrenceDate.next(options, '2015/12/06', 1) === '2015/12/07')
      assert(RecurrenceDate.next(options, '2015/12/06', 2) === '2015/12/09')
      assert(RecurrenceDate.next(options, '2015/12/06', 3) === '2015/12/11')
      assert(RecurrenceDate.next(options, '2015/12/06', 4) === '2015/12/14')
      assert(RecurrenceDate.next(options, '2015/12/06', 100) === '')

      assert(RecurrenceDate.next(options, '2015/12/19', -1) === '2015/12/18')
      assert(RecurrenceDate.next(options, '2015/12/19', -2) === '2015/12/16')
      assert(RecurrenceDate.next(options, '2015/12/19', -3) === '2015/12/14')
      assert(RecurrenceDate.next(options, '2015/12/19', -4) === '2015/12/11')
      assert(RecurrenceDate.next(options, '2015/12/19', -100) === '')
    })

    it('monday, wednesday and friday every two weeks', () => {
      const options = {
        startDate: '2015/11/01',
        endDate: '2015/11/30',
        every: 'week',
        interval: 2,
        dayOfWeeks: [
          RecurrenceDate.MONDAY,
          RecurrenceDate.WEDNESDAY,
          RecurrenceDate.FRIDAY,
        ],
      }
      assert(RecurrenceDate.next(options, '2015/11/15', 1) === '2015/11/16')
      assert(RecurrenceDate.next(options, '2015/11/15', 2) === '2015/11/18')
      assert(RecurrenceDate.next(options, '2015/11/15', 3) === '2015/11/20')
      assert(RecurrenceDate.next(options, '2015/11/15', 4) === '2015/11/30')
      assert(RecurrenceDate.next(options, '2015/11/15', 100) === '')

      assert(RecurrenceDate.next(options, '2015/11/22', -1) === '2015/11/20')
      assert(RecurrenceDate.next(options, '2015/11/22', -2) === '2015/11/18')
      assert(RecurrenceDate.next(options, '2015/11/22', -3) === '2015/11/16')
      assert(RecurrenceDate.next(options, '2015/11/22', -4) === '2015/11/06')
      assert(RecurrenceDate.next(options, '2015/11/22', -100) === '')
    })

    it('10th day of every months', () => {
      const options = {
        startDate: '2000/01/10',
        every: 'month',
      }
      assert(RecurrenceDate.next(options, '2015/12/01', 1) === '2015/12/10')
      assert(RecurrenceDate.next(options, '2015/12/01', 2) === '2016/01/10')
      assert(RecurrenceDate.next(options, '2015/12/01', 3) === '2016/02/10')
      assert(RecurrenceDate.next(options, '2015/12/01', -1) === '2015/11/10')
      assert(RecurrenceDate.next(options, '2015/12/01', -2) === '2015/10/10')
      assert(RecurrenceDate.next(options, '2015/12/01', -3) === '2015/09/10')
    })

    it('15th day of every two months', () => {
      const options = {
        startDate: '2015/01/15',
        every: 'month',
        interval: 2,
      }
      assert(RecurrenceDate.next(options, '2015/12/01', 1) === '2016/01/15')
      assert(RecurrenceDate.next(options, '2015/12/01', 2) === '2016/03/15')
      assert(RecurrenceDate.next(options, '2015/12/01', 3) === '2016/05/15')
      assert(RecurrenceDate.next(options, '2015/12/01', -1) === '2015/11/15')
      assert(RecurrenceDate.next(options, '2015/12/01', -2) === '2015/09/15')
      assert(RecurrenceDate.next(options, '2015/12/01', -3) === '2015/07/15')
    })

    it('1/10 of every years', () => {
      const options = {
        startDate: '2000/01/10',
        every: 'year',
      }
      assert(RecurrenceDate.next(options, '2015/01/01', 1) === '2015/01/10')
      assert(RecurrenceDate.next(options, '2015/01/01', 2) === '2016/01/10')
      assert(RecurrenceDate.next(options, '2015/01/01', 3) === '2017/01/10')
      assert(RecurrenceDate.next(options, '2015/01/01', -1) === '2014/01/10')
      assert(RecurrenceDate.next(options, '2015/01/01', -2) === '2013/01/10')
      assert(RecurrenceDate.next(options, '2015/01/01', -3) === '2012/01/10')
    })

    it('5/25 of every two years', () => {
      const options = {
        startDate: '2001/05/25',
        every: 'year',
        interval: 2,
      }
      assert(RecurrenceDate.next(options, '2015/01/01', 1) === '2015/05/25')
      assert(RecurrenceDate.next(options, '2015/01/01', 2) === '2017/05/25')
      assert(RecurrenceDate.next(options, '2015/01/01', 3) === '2019/05/25')
      assert(RecurrenceDate.next(options, '2015/01/01', -1) === '2013/05/25')
      assert(RecurrenceDate.next(options, '2015/01/01', -2) === '2011/05/25')
      assert(RecurrenceDate.next(options, '2015/01/01', -3) === '2009/05/25')
    })

    it('invalid argument', () => {
      assert(RecurrenceDate.next() === '')
      assert(RecurrenceDate.next({startDate: 'invalid'}, '2015/06/01', 1) === '')
      assert(RecurrenceDate.next({startDate: '2015/06/01', endDate: 'invalid'}, '2015/06/01', 1) === '')
      assert(RecurrenceDate.next({startDate: '2015/06/01', endDate: '2015/06/10'}, 'invalid', 1) === '')
      assert(RecurrenceDate.next({startDate: '2015/06/01', endDate: '2015/06/10'}) === '')
      assert(RecurrenceDate.next({startDate: '2015/06/01', endDate: '2015/06/10'}, '2015/06/01') === '')
      assert(RecurrenceDate.next({startDate: '2015/06/01', endDate: '2015/06/10'}, '2015/06/01', null) === '')
    })

  })

  describe('extract', () => {

    it('daily', () => {
      const options = {
        startDate: '2016/05/11',
        endDate: '2016/05/15',
      }
      assert.deepEqual(RecurrenceDate.extract(options, '2016/05/05', '2016/05/13'), [
        '2016/05/11',
        '2016/05/12',
        '2016/05/13',
      ])
      assert.deepEqual(RecurrenceDate.extract(options, '2016/05/13', '2016/05/20'), [
        '2016/05/13',
        '2016/05/14',
        '2016/05/15',
      ])
      assert.deepEqual(RecurrenceDate.extract(options, '2016/05/05', '2016/05/20'), [
        '2016/05/11',
        '2016/05/12',
        '2016/05/13',
        '2016/05/14',
        '2016/05/15',
      ])
      assert.deepEqual(RecurrenceDate.extract(options, '2016/05/20', '2016/05/30'), [])
    })

    it('every three days', () => {
      const options = {
        startDate: '2016/10/11',
        endDate: '2016/10/20',
        interval: 3,
      }
      assert.deepEqual(RecurrenceDate.extract(options, '2016/10/01', '2016/10/31'), [
        '2016/10/11',
        '2016/10/14',
        '2016/10/17',
        '2016/10/20',
      ])
    })

    it('tuesday, thursday and saturday', () => {
      const options = {
        startDate: '2016/10/11',
        endDate: '2016/10/23',
        every: 'week',
        dayOfWeeks: [
          RecurrenceDate.TUESDAY,
          RecurrenceDate.THURSDAY,
          RecurrenceDate.SATURDAY,
        ],
      }
      assert.deepEqual(RecurrenceDate.extract(options, '2016/10/01', '2016/10/31'), [
        '2016/10/11',
        '2016/10/13',
        '2016/10/15',
        '2016/10/18',
        '2016/10/20',
        '2016/10/22',
      ])
    })

    it('tuesday, thursday and saturday of two weeks', () => {
      const options = {
        startDate: '2016/10/11',
        endDate: '2016/10/30',
        every: 'week',
        interval: 2,
        dayOfWeeks: [
          RecurrenceDate.TUESDAY,
          RecurrenceDate.THURSDAY,
          RecurrenceDate.SATURDAY,
        ],
      }
      assert.deepEqual(RecurrenceDate.extract(options, '2016/10/01', '2016/10/31'), [
        '2016/10/11',
        '2016/10/13',
        '2016/10/15',
        '2016/10/25',
        '2016/10/27',
        '2016/10/29',
      ])
    })

    xit('', () => {
      const options = {
        startDate: '2016/10/11',
        endDate: '2016/10/30',
        every: 'week',
        interval: 2,
        dayOfWeeks: [
          RecurrenceDate.TUESDAY,
          RecurrenceDate.THURSDAY,
          RecurrenceDate.SATURDAY,
        ],
      }
      assert.deepEqual(RecurrenceDate.extract(options, '2016/10/01', '2016/10/31'), [
        '2016/10/11',
        '2016/10/13',
        '2016/10/15',
        '2016/10/25',
        '2016/10/27',
        '2016/10/29',
      ])
    })

  })

  it('inheritance properties from DayOfWeek', () => {
    assert(RecurrenceDate.SUNDAY === RecurrenceDate.SUNDAY)
    assert(RecurrenceDate.MONDAY === RecurrenceDate.MONDAY)
    assert(RecurrenceDate.TUESDAY === RecurrenceDate.TUESDAY)
    assert(RecurrenceDate.WEDNESDAY === RecurrenceDate.WEDNESDAY)
    assert(RecurrenceDate.THURSDAY === RecurrenceDate.THURSDAY)
    assert(RecurrenceDate.FRIDAY === RecurrenceDate.FRIDAY)
    assert(RecurrenceDate.SATURDAY === RecurrenceDate.SATURDAY)
  })

  it('static const properties can not be assigned', () => {
    assert.throws(() => {RecurrenceDate.SUNDAY = 0}, TypeError)
    assert.throws(() => {RecurrenceDate.MONDAY = 0}, TypeError)
    assert.throws(() => {RecurrenceDate.TUESDAY = 0}, TypeError)
    assert.throws(() => {RecurrenceDate.WEDNESDAY = 0}, TypeError)
    assert.throws(() => {RecurrenceDate.THURSDAY = 0}, TypeError)
    assert.throws(() => {RecurrenceDate.FRIDAY = 0}, TypeError)
    assert.throws(() => {RecurrenceDate.SATURDAY = 0}, TypeError)
  })

})
