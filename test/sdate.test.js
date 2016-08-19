import assert from 'assert'
import Sdate from '../src/sdate.js'


describe('Sdate', () => {

  it('addDay', () => {
    assert.equal(Sdate.addDay('2016/06/15', -1), '2016/06/14')
    assert.equal(Sdate.addDay('2016/06/15', 0), '2016/06/15')
    assert.equal(Sdate.addDay('2016/06/15', 1), '2016/06/16')

    assert.equal(Sdate.addDay('2016/06/01', -1), '2016/05/31')
    assert.equal(Sdate.addDay('2016/06/30', 1), '2016/07/01')
  })

  it('addMonth', () => {
    assert.equal(Sdate.addMonth('2016/08/01', 1), '2016/09/01')
    assert.equal(Sdate.addMonth('2016/08/01', 4), '2016/12/01')
    assert.equal(Sdate.addMonth('2016/08/01', 5), '2017/01/01')

    assert.equal(Sdate.addMonth('2016/08/15', -1), '2016/07/15')
    assert.equal(Sdate.addMonth('2016/08/15', 0), '2016/08/15')
    assert.equal(Sdate.addMonth('2016/08/15', 1), '2016/09/15')

    assert.equal(Sdate.addMonth('2016/08/31', 1), '2016/09/30')
    assert.equal(Sdate.addMonth('2016/08/31', 6), '2017/02/28')
    assert.equal(Sdate.addMonth('2016/08/31', -2), '2016/06/30')
  })

  it('addYear', () => {
    assert.equal(Sdate.addYear('2016/05/15', -1), '2015/05/15')
    assert.equal(Sdate.addYear('2016/05/15', 0), '2016/05/15')
    assert.equal(Sdate.addYear('2016/05/15', 1), '2017/05/15')

    assert.equal(Sdate.addYear('2016/02/29', 1), '2017/02/28')
    assert.equal(Sdate.addYear('2016/02/29', -1), '2015/02/28')
    assert.equal(Sdate.addYear('2016/02/29', 4), '2020/02/29')
  })

  it('create', () => {
    assert.equal(Sdate.create(2016, 8, 18), '2016/08/18')
    assert.equal(Sdate.create(2016, 8, 0), '2016/07/31')
    assert.equal(Sdate.create(2016, 8, 32), '2016/09/01')
    assert.equal(Sdate.create(2016, 13, 1), '2017/01/01')
    assert.equal(Sdate.create(2016, 0, 1), '2015/12/01')
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

  it('equal', () => {
    assert.ok(Sdate.equal('2016/08/05', '2016/8/5'))
    assert.ok(Sdate.equal('2016/08/05', '2016-08-05'))
    assert.ok(Sdate.equal('2016/08/05', '2016-8-5'))
    assert.ok(Sdate.equal('2016/08/05', '2016.08.05'))
    assert.ok(Sdate.equal('2016/08/05', '2016.8.5'))
    assert.ok(!Sdate.equal('2016/08/05', '2016/08/06'))
  })

  it('greaterThan', () => {
    assert.equal(Sdate.greaterThan('2016/08/18', '2016/08/17'), true)
    assert.equal(Sdate.greaterThan('2016/08/18', '2016/08/18'), false)
    assert.equal(Sdate.greaterThan('2016/08/18', '2016/08/19'), false)
  })

  it('lessThan', () => {
    assert.equal(Sdate.lessThan('2016/08/18', '2016/08/17'), false)
    assert.equal(Sdate.lessThan('2016/08/18', '2016/08/18'), false)
    assert.equal(Sdate.lessThan('2016/08/18', '2016/08/19'), true)
  })

  it('min', () => {
    assert.equal(Sdate.min('2016/08/15'), '2016/08/15')
    assert.equal(Sdate.min('2016/08/10', '2016/08/15'), '2016/08/10')
    assert.equal(Sdate.min('2016/08/10', '2016/08/15', '2016/08/05'), '2016/08/05')

    assert.equal(Sdate.min(['2016/08/15']), '2016/08/15')
    assert.equal(Sdate.min(['2016/08/10', '2016/08/15']), '2016/08/10')
    assert.equal(Sdate.min(['2016/08/10', '2016/08/15', '2016/08/05']), '2016/08/05')
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
