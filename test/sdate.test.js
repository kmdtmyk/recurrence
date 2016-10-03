import assert from 'power-assert'
import Sdate from '../src/sdate.js'


describe('Sdate', () => {

  it('addDay', () => {
    assert(Sdate.addDay('2016/06/15', -1) === '2016/06/14')
    assert(Sdate.addDay('2016/06/15', 0) === '2016/06/15')
    assert(Sdate.addDay('2016/06/15', 1) === '2016/06/16')

    assert(Sdate.addDay('2016/06/01', -1) === '2016/05/31')
    assert(Sdate.addDay('2016/06/30', 1) === '2016/07/01')
  })

  it('addMonth', () => {
    assert(Sdate.addMonth('2016/08/01', 1) === '2016/09/01')
    assert(Sdate.addMonth('2016/08/01', 4) === '2016/12/01')
    assert(Sdate.addMonth('2016/08/01', 5) === '2017/01/01')

    assert(Sdate.addMonth('2016/08/15', -1) === '2016/07/15')
    assert(Sdate.addMonth('2016/08/15', 0) === '2016/08/15')
    assert(Sdate.addMonth('2016/08/15', 1) === '2016/09/15')

    assert(Sdate.addMonth('2016/08/31', 1) === '2016/09/30')
    assert(Sdate.addMonth('2016/08/31', 6) === '2017/02/28')
    assert(Sdate.addMonth('2016/08/31', -2) === '2016/06/30')
  })

  it('addYear', () => {
    assert(Sdate.addYear('2016/05/15', -1) === '2015/05/15')
    assert(Sdate.addYear('2016/05/15', 0) === '2016/05/15')
    assert(Sdate.addYear('2016/05/15', 1) === '2017/05/15')

    assert(Sdate.addYear('2016/02/29', 1) === '2017/02/28')
    assert(Sdate.addYear('2016/02/29', -1) === '2015/02/28')
    assert(Sdate.addYear('2016/02/29', 4) === '2020/02/29')
  })

  it('create', () => {
    assert(Sdate.create(2016, 8, 18) === '2016/08/18')
    assert(Sdate.create(2016, 8, 0) === '2016/07/31')
    assert(Sdate.create(2016, 8, 32) === '2016/09/01')
    assert(Sdate.create(2016, 13, 1) === '2017/01/01')
    assert(Sdate.create(2016, 0, 1) === '2015/12/01')
  })

  it('diffInDay', () => {
    assert(Sdate.diffInDay('2016/06/21', '2016/06/20') === -1)
    assert(Sdate.diffInDay('2016/06/21', '2016/06/21') === 0)
    assert(Sdate.diffInDay('2016/06/21', '2016/06/22') === 1)
  })

  it('dateToString', () => {
    assert(Sdate.dateToString(new Date('2016/01/01')) === '2016/01/01')
    assert(Sdate.dateToString(new Date('2016/12/10')) === '2016/12/10')
  })

  it('endOfMonth', () => {
    assert(Sdate.endOfMonth('2016/08/01') === '2016/08/31')
    assert(Sdate.endOfMonth('2016/08/18') === '2016/08/31')
    assert(Sdate.endOfMonth('2016/08/31') === '2016/08/31')
    assert(Sdate.endOfMonth('2016/02/15') === '2016/02/29')
    assert(Sdate.endOfMonth('2017/02/15') === '2017/02/28')
  })

  it('equal', () => {
    assert(Sdate.equal('2016/08/05', '2016/8/5') === true)
    assert(Sdate.equal('2016/08/05', '2016-08-05') === true)
    assert(Sdate.equal('2016/08/05', '2016-8-5') === true)
    assert(Sdate.equal('2016/08/05', '2016.08.05') === true)
    assert(Sdate.equal('2016/08/05', '2016.8.5') === true)
    assert(Sdate.equal('2016/08/05', '2016/08/06') === false)

    assert(Sdate.equal('2016/08/05', 'invalid') === false)
    assert(Sdate.equal('invalid', '2016/08/05') === false)
    assert(Sdate.equal('invalid', 'invalid') === true)
  })

  it('isValid', () => {
    assert(Sdate.isValid('2016/01/05') === true)
    assert(Sdate.isValid('2016/1/5') === true)
    assert(Sdate.isValid('2016-01-05') === true)
    assert(Sdate.isValid('2016-1-5') === true)
    assert(Sdate.isValid('2016.01.05') === true)
    assert(Sdate.isValid('2016.1.5') === true)

    assert(Sdate.isValid('invalid') === false)
    assert(Sdate.isValid('2016/99/05') === false)
    assert(Sdate.isValid('2016/01/99') === false)
  })

  it('greaterThan', () => {
    assert(Sdate.greaterThan('2016/08/18', '2016/08/17') === true)
    assert(Sdate.greaterThan('2016/08/18', '2016/08/18') === false)
    assert(Sdate.greaterThan('2016/08/18', '2016/08/19') === false)

    assert(Sdate.greaterThan('invalid', '2016/08/18') === false)
    assert(Sdate.greaterThan('2016/08/18', 'invalid') === false)
  })

  it('lessThan', () => {
    assert(Sdate.lessThan('2016/08/18', '2016/08/17') === false)
    assert(Sdate.lessThan('2016/08/18', '2016/08/18') === false)
    assert(Sdate.lessThan('2016/08/18', '2016/08/19') === true)

    assert(Sdate.lessThan('invalid', '2016/08/18') === false)
    assert(Sdate.lessThan('2016/08/18', 'invalid') === false)
  })

  it('max', () => {
    assert(Sdate.max('2016/08/15') === '2016/08/15')
    assert(Sdate.max('2016/08/10', '2016/08/15') === '2016/08/15')
    assert(Sdate.max('2016/08/10', '2016/08/15', '2016/08/05') === '2016/08/15')

    assert(Sdate.max(['2016/08/15']) === '2016/08/15')
    assert(Sdate.max(['2016/08/10', '2016/08/15']) === '2016/08/15')
    assert(Sdate.max(['2016/08/10', '2016/08/15', '2016/08/05']) === '2016/08/15')

    assert(Sdate.max(['2016/08/10', '2016/08/15'], ['2016/08/05', '2016/07/25']) === '2016/08/15')
  })

  it('min', () => {
    assert(Sdate.min('2016/08/15') === '2016/08/15')
    assert(Sdate.min('2016/08/10', '2016/08/15') === '2016/08/10')
    assert(Sdate.min('2016/08/10', '2016/08/15', '2016/08/05') === '2016/08/05')

    assert(Sdate.min(['2016/08/15']) === '2016/08/15')
    assert(Sdate.min(['2016/08/10', '2016/08/15']) === '2016/08/10')
    assert(Sdate.min(['2016/08/10', '2016/08/15', '2016/08/05']) === '2016/08/05')

    assert(Sdate.min(['2016/08/10', '2016/08/15'], ['2016/08/05', '2016/07/25']) === '2016/07/25')
  })

  it('startOfMonth', () => {
    assert(Sdate.startOfMonth('2016/08/01') === '2016/08/01')
    assert(Sdate.startOfMonth('2016/08/18') === '2016/08/01')
    assert(Sdate.startOfMonth('2016/08/31') === '2016/08/01')
  })

  it('toObject', () => {
    assert.deepEqual(Sdate.toObject('2016/08/18'), {year: 2016, month: 8, day: 18})
  })

})
