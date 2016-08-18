import assert from 'assert'
import Sdate from '../src/sdate.js'


describe('Sdate', () => {

  it('addDays', () => {
    assert.equal(Sdate.addDays('2016/06/15', -1), '2016/06/14')
    assert.equal(Sdate.addDays('2016/06/15', 0), '2016/06/15')
    assert.equal(Sdate.addDays('2016/06/15', 1), '2016/06/16')

    assert.equal(Sdate.addDays('2016/06/01', -1), '2016/05/31')
    assert.equal(Sdate.addDays('2016/06/30', 1), '2016/07/01')
  })

  it('diffInDay', () => {
    assert.equal(Sdate.diffInDay('2016/06/21', '2016/06/20'), -1)
    assert.equal(Sdate.diffInDay('2016/06/21', '2016/06/21'), 0)
    assert.equal(Sdate.diffInDay('2016/06/21', '2016/06/22'), 1)
  })

  it('dateToString', () => {
    assert.equal(Sdate.dateToString(new Date('2016/01/01')), '2016/01/01')
    assert.equal(Sdate.dateToString(new Date('2016/12/10')), '2016/12/10')
  })

  it('endOfMonth', () => {
    assert.equal(Sdate.endOfMonth('2016/08/01'), '2016/08/31')
    assert.equal(Sdate.endOfMonth('2016/08/18'), '2016/08/31')
    assert.equal(Sdate.endOfMonth('2016/08/31'), '2016/08/31')
    assert.equal(Sdate.endOfMonth('2016/02/15'), '2016/02/29')
    assert.equal(Sdate.endOfMonth('2017/02/15'), '2017/02/28')
  })

  it('startOfMonth', () => {
    assert.equal(Sdate.startOfMonth('2016/08/01'), '2016/08/01')
    assert.equal(Sdate.startOfMonth('2016/08/18'), '2016/08/01')
    assert.equal(Sdate.startOfMonth('2016/08/31'), '2016/08/01')
  })

  it('toObject', () => {
    assert.deepEqual(Sdate.toObject('2016/08/18'), {year: 2016, month: 8, day: 18})
  })

})
