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

  it('day', () => {
    assert(Sdate.day('2016/05/01') === 1)
    assert(Sdate.day('2016-05-02') === 2)
    assert(Sdate.day('2016.05.03') === 3)
    assert(Sdate.day('2016/5/4') === 4)
    assert(Sdate.day('2016-5-5') === 5)
    assert(Sdate.day('2016.5.6') === 6)
  })

  it('dayOfWeek', () => {
    assert(Sdate.dayOfWeek('2016/10/16') === 0)
    assert(Sdate.dayOfWeek('2016/10/17') === 1)
    assert(Sdate.dayOfWeek('2016/10/18') === 2)
    assert(Sdate.dayOfWeek('2016/10/19') === 3)
    assert(Sdate.dayOfWeek('2016/10/20') === 4)
    assert(Sdate.dayOfWeek('2016/10/21') === 5)
    assert(Sdate.dayOfWeek('2016/10/22') === 6)
  })

  it('diffInDay', () => {
    assert(Sdate.diffInDay('2016/06/21', '2016/06/20') === -1)
    assert(Sdate.diffInDay('2016/06/21', '2016/06/21') === 0)
    assert(Sdate.diffInDay('2016/06/21', '2016/06/22') === 1)
  })

  it('diffInMonth', () => {
    assert(Sdate.diffInMonth('2015/10/15', '2015/10/15') === 0)
    assert(Sdate.diffInMonth('2015/10/15', '2015/10/31') === 0)
    assert(Sdate.diffInMonth('2015/10/15', '2015/11/01') === 1)
    assert(Sdate.diffInMonth('2015/10/15', '2016/10/15') === 12)

    assert(Sdate.diffInMonth('2015/10/15', '2015/10/01') === 0)
    assert(Sdate.diffInMonth('2015/10/15', '2015/09/30') === -1)
    assert(Sdate.diffInMonth('2015/10/15', '2014/10/15') === -12)
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
    assert(Sdate.equal('invalid', 'invalid') === false)
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

  it('greaterThanOrEqual', () => {
    assert(Sdate.greaterThanOrEqual('2016/08/18', '2016/08/17') === true)
    assert(Sdate.greaterThanOrEqual('2016/08/18', '2016/08/18') === true)
    assert(Sdate.greaterThanOrEqual('2016/08/18', '2016/08/19') === false)

    assert(Sdate.greaterThanOrEqual('invalid', '2016/08/18') === false)
    assert(Sdate.greaterThanOrEqual('2016/08/18', 'invalid') === false)
  })

  it('lessThan', () => {
    assert(Sdate.lessThan('2016/08/18', '2016/08/17') === false)
    assert(Sdate.lessThan('2016/08/18', '2016/08/18') === false)
    assert(Sdate.lessThan('2016/08/18', '2016/08/19') === true)

    assert(Sdate.lessThan('invalid', '2016/08/18') === false)
    assert(Sdate.lessThan('2016/08/18', 'invalid') === false)
  })

  it('lessThanOrEqual', () => {
    assert(Sdate.lessThanOrEqual('2016/08/18', '2016/08/17') === false)
    assert(Sdate.lessThanOrEqual('2016/08/18', '2016/08/18') === true)
    assert(Sdate.lessThanOrEqual('2016/08/18', '2016/08/19') === true)

    assert(Sdate.lessThanOrEqual('invalid', '2016/08/18') === false)
    assert(Sdate.lessThanOrEqual('2016/08/18', 'invalid') === false)
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

  it('month', () => {
    assert(Sdate.month('2016/01/01') === 1)
    assert(Sdate.month('2016-02-02') === 2)
    assert(Sdate.month('2016.03.03') === 3)
    assert(Sdate.month('2016/4/4') === 4)
    assert(Sdate.month('2016-5-5') === 5)
    assert(Sdate.month('2016.6.6') === 6)
  })

  it('startOfMonth', () => {
    assert(Sdate.startOfMonth('2016/08/01') === '2016/08/01')
    assert(Sdate.startOfMonth('2016/08/18') === '2016/08/01')
    assert(Sdate.startOfMonth('2016/08/31') === '2016/08/01')
  })

  it('toObject', () => {
    assert.deepEqual(Sdate.toObject('2016/08/18'), {year: 2016, month: 8, day: 18, dayOfWeek: 4})
  })

  it('year', () => {
    assert(Sdate.year('2001/01/01') === 2001)
    assert(Sdate.year('2002-01-01') === 2002)
    assert(Sdate.year('2003.01.01') === 2003)
    assert(Sdate.year('2004/1/1') === 2004)
    assert(Sdate.year('2005-1-1') === 2005)
    assert(Sdate.year('2006.1.1') === 2006)
  })

})
