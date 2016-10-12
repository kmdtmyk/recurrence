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

      it('5th monday with basis sunday', () => {
        const options = {
          startDate: '2016/05/30',
          every: 'month',
          basisDayOfWeek: Recurrence.SUNDAY,
          dayOfWeeks: [
            Recurrence.MONDAY,
            Recurrence.WEDNESDAY,
            Recurrence.FRIDAY,
          ],
        }
        assert(Recurrence.includes(options, '2017/01/30') === true)
        assert(Recurrence.includes(options, '2017/03/06') === false)
        assert(Recurrence.includes(options, '2017/04/03') === false)
        assert(Recurrence.includes(options, '2017/05/01') === true)
        assert(Recurrence.includes(options, '2017/06/05') === false)
        assert(Recurrence.includes(options, '2017/07/03') === false)
        assert(Recurrence.includes(options, '2017/07/31') === true)
        assert(Recurrence.includes(options, '2017/09/04') === false)
        assert(Recurrence.includes(options, '2017/10/02') === false)
        assert(Recurrence.includes(options, '2017/10/30') === true)
        assert(Recurrence.includes(options, '2017/12/04') === false)
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
        assert(Recurrence.includes(options, '2016/06/07') === false)
        assert(Recurrence.includes(options, '2016/06/08') === true)
        assert(Recurrence.includes(options, '2016/06/09') === false)
        assert(Recurrence.includes(options, '2016/06/10') === true)
        assert(Recurrence.includes(options, '2016/06/11') === false)
        assert(Recurrence.includes(options, '2016/06/12') === false)
        assert(Recurrence.includes(options, '2016/06/13') === true)
        assert(Recurrence.includes(options, '2016/06/14') === false)
        assert(Recurrence.includes(options, '2016/06/15') === false)
        assert(Recurrence.includes(options, '2016/06/16') === false)
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

  describe('next', () => {

    it('a day', () => {
      const options = {
        startDate: '2015/06/10',
        endDate: '2015/06/10',
      }
      assert(Recurrence.next(options, '2015/06/01', 1) === '2015/06/10')
      assert(Recurrence.next(options, '2015/06/01', 2) === '')
      assert(Recurrence.next(options, '2015/06/01', -1) === '')
      assert(Recurrence.next(options, '2015/07/01', 1) === '')
      assert(Recurrence.next(options, '2015/07/01', -1) === '2015/06/10')
    })

    it('daily', () => {
      const options = {
        startDate: '2015/06/11',
        endDate: '2015/06/15',
      }
      assert(Recurrence.next(options, '2015/06/01', 1) === '2015/06/11')
      assert(Recurrence.next(options, '2015/06/01', 3) === '2015/06/13')
      assert(Recurrence.next(options, '2015/06/01', 5) === '2015/06/15')
      assert(Recurrence.next(options, '2015/06/01', 6) === '')

      assert(Recurrence.next(options, '2015/06/30', -1) === '2015/06/15')
      assert(Recurrence.next(options, '2015/06/30', -3) === '2015/06/13')
      assert(Recurrence.next(options, '2015/06/30', -5) === '2015/06/11')
      assert(Recurrence.next(options, '2015/06/30', -6) === '')

      assert(Recurrence.next(options, '2015/06/13', 1) === '2015/06/14')
      assert(Recurrence.next(options, '2015/06/13', 2) === '2015/06/15')
      assert(Recurrence.next(options, '2015/06/13', 3) === '')

      assert(Recurrence.next(options, '2015/06/13', -1) === '2015/06/12')
      assert(Recurrence.next(options, '2015/06/13', -2) === '2015/06/11')
      assert(Recurrence.next(options, '2015/06/13', -3) === '')
    })

    it('alternate days', () => {
      const options = {
        startDate: '2015/06/11',
        endDate: '2015/06/15',
        every: 'day',
        interval: 2,
      }
      assert(Recurrence.next(options, '2015/06/01', 1) === '2015/06/11')
      assert(Recurrence.next(options, '2015/06/01', 2) === '2015/06/13')
      assert(Recurrence.next(options, '2015/06/01', 3) === '2015/06/15')
      assert(Recurrence.next(options, '2015/06/01', 4) === '')

      assert(Recurrence.next(options, '2015/06/30', -1) === '2015/06/15')
      assert(Recurrence.next(options, '2015/06/30', -2) === '2015/06/13')
      assert(Recurrence.next(options, '2015/06/30', -3) === '2015/06/11')
      assert(Recurrence.next(options, '2015/06/30', -4) === '')
    })

    it('monday, wednesday and friday', () => {
      const options = {
        startDate: '2015/12/01',
        endDate: '2015/12/31',
        every: 'week',
        dayOfWeeks: [
          Recurrence.MONDAY,
          Recurrence.WEDNESDAY,
          Recurrence.FRIDAY,
        ],
      }
      assert(Recurrence.next(options, '2015/12/06', 1) === '2015/12/07')
      assert(Recurrence.next(options, '2015/12/06', 2) === '2015/12/09')
      assert(Recurrence.next(options, '2015/12/06', 3) === '2015/12/11')
      assert(Recurrence.next(options, '2015/12/06', 4) === '2015/12/14')
      assert(Recurrence.next(options, '2015/12/06', 100) === '')

      assert(Recurrence.next(options, '2015/12/19', -1) === '2015/12/18')
      assert(Recurrence.next(options, '2015/12/19', -2) === '2015/12/16')
      assert(Recurrence.next(options, '2015/12/19', -3) === '2015/12/14')
      assert(Recurrence.next(options, '2015/12/19', -4) === '2015/12/11')
      assert(Recurrence.next(options, '2015/12/19', -100) === '')
    })

    it('monday, wednesday and friday every two weeks', () => {
      const options = {
        startDate: '2015/11/01',
        endDate: '2015/11/30',
        every: 'week',
        interval: 2,
        dayOfWeeks: [
          Recurrence.MONDAY,
          Recurrence.WEDNESDAY,
          Recurrence.FRIDAY,
        ],
      }
      assert(Recurrence.next(options, '2015/11/15', 1) === '2015/11/16')
      assert(Recurrence.next(options, '2015/11/15', 2) === '2015/11/18')
      assert(Recurrence.next(options, '2015/11/15', 3) === '2015/11/20')
      assert(Recurrence.next(options, '2015/11/15', 4) === '2015/11/30')
      assert(Recurrence.next(options, '2015/11/15', 100) === '')

      assert(Recurrence.next(options, '2015/11/22', -1) === '2015/11/20')
      assert(Recurrence.next(options, '2015/11/22', -2) === '2015/11/18')
      assert(Recurrence.next(options, '2015/11/22', -3) === '2015/11/16')
      assert(Recurrence.next(options, '2015/11/22', -4) === '2015/11/06')
      assert(Recurrence.next(options, '2015/11/22', -100) === '')
    })

    it('10th day of every months', () => {
      const options = {
        startDate: '2000/01/10',
        every: 'month',
      }
      assert(Recurrence.next(options, '2015/12/01', 1) === '2015/12/10')
      assert(Recurrence.next(options, '2015/12/01', 2) === '2016/01/10')
      assert(Recurrence.next(options, '2015/12/01', 3) === '2016/02/10')
      assert(Recurrence.next(options, '2015/12/01', -1) === '2015/11/10')
      assert(Recurrence.next(options, '2015/12/01', -2) === '2015/10/10')
      assert(Recurrence.next(options, '2015/12/01', -3) === '2015/09/10')
    })

    it('15th day of every two months', () => {
      const options = {
        startDate: '2015/01/15',
        every: 'month',
        interval: 2,
      }
      assert(Recurrence.next(options, '2015/12/01', 1) === '2016/01/15')
      assert(Recurrence.next(options, '2015/12/01', 2) === '2016/03/15')
      assert(Recurrence.next(options, '2015/12/01', 3) === '2016/05/15')
      assert(Recurrence.next(options, '2015/12/01', -1) === '2015/11/15')
      assert(Recurrence.next(options, '2015/12/01', -2) === '2015/09/15')
      assert(Recurrence.next(options, '2015/12/01', -3) === '2015/07/15')
    })

    it('1/10 of every years', () => {
      const options = {
        startDate: '2000/01/10',
        every: 'year',
      }
      assert(Recurrence.next(options, '2015/01/01', 1) === '2015/01/10')
      assert(Recurrence.next(options, '2015/01/01', 2) === '2016/01/10')
      assert(Recurrence.next(options, '2015/01/01', 3) === '2017/01/10')
      assert(Recurrence.next(options, '2015/01/01', -1) === '2014/01/10')
      assert(Recurrence.next(options, '2015/01/01', -2) === '2013/01/10')
      assert(Recurrence.next(options, '2015/01/01', -3) === '2012/01/10')
    })

    it('5/25 of every two years', () => {
      const options = {
        startDate: '2001/05/25',
        every: 'year',
        interval: 2,
      }
      assert(Recurrence.next(options, '2015/01/01', 1) === '2015/05/25')
      assert(Recurrence.next(options, '2015/01/01', 2) === '2017/05/25')
      assert(Recurrence.next(options, '2015/01/01', 3) === '2019/05/25')
      assert(Recurrence.next(options, '2015/01/01', -1) === '2013/05/25')
      assert(Recurrence.next(options, '2015/01/01', -2) === '2011/05/25')
      assert(Recurrence.next(options, '2015/01/01', -3) === '2009/05/25')
    })

    it('invalid argument', () => {
      assert(Recurrence.next() === '')
      assert(Recurrence.next({startDate: 'invalid'}, '2015/06/01', 1) === '')
      assert(Recurrence.next({startDate: '2015/06/01', endDate: 'invalid'}, '2015/06/01', 1) === '')
      assert(Recurrence.next({startDate: '2015/06/01', endDate: '2015/06/10'}, 'invalid', 1) === '')
      assert(Recurrence.next({startDate: '2015/06/01', endDate: '2015/06/10'}) === '')
      assert(Recurrence.next({startDate: '2015/06/01', endDate: '2015/06/10'}, '2015/06/01') === '')
      assert(Recurrence.next({startDate: '2015/06/01', endDate: '2015/06/10'}, '2015/06/01', null) === '')
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
