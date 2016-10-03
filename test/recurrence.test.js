import Recurrence from '../src/index.js'


describe('Recurrence', () => {

  describe('include', () => {

    it('daily', () => {
      let r = new Recurrence({
        startDate: '2016/06/22',
      })

      assert.equal(r.include('2016/06/21'), false)
      assert.equal(r.include('2016/06/22'), true)
      assert.equal(r.include('2016/06/23'), true)
    })

    it('daily interval', () => {
      let r = new Recurrence({
        startDate: '2016/06/22',
        interval: 2,
      })

      assert.equal(r.include('2016/06/22'), true)
      assert.equal(r.include('2016/06/23'), false)
      assert.equal(r.include('2016/06/24'), true)
    })

  })

  xdescribe('next', () => {

    it('daily', () => {
      let r = new Recurrence({
        startDate: '2016/07/13',
      })

      assert.equal(r.next('2016/07/11'), '2016/07/13')
      assert.equal(r.next('2016/07/12'), '2016/07/13')
      assert.equal(r.next('2016/07/13'), '2016/07/14')
      assert.equal(r.next('2016/07/14'), '2016/07/15')
    })

    it('daily interval', () => {
      let r = new Recurrence({
        startDate: '2016/07/13',
        interval: 2,
      })

      assert.equal(r.next('2016/07/11'), '2016/07/13')
      assert.equal(r.next('2016/07/12'), '2016/07/13')
      assert.equal(r.next('2016/07/13'), '2016/07/15')
      assert.equal(r.next('2016/07/14'), '2016/07/15')
      assert.equal(r.next('2016/07/15'), '2016/07/17')
    })

  })

})
