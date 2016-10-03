import assert from 'power-assert'
import Recurrence from '../src/index.js'


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

})
