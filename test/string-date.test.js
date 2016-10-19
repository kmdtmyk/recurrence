import assert from 'power-assert'
import StringDate from '../src/string-date.js'


describe('StringDate', () => {

  it('addDay', () => {
    assert(StringDate.addDay('2016/06/15', -1) === '2016/06/14')
    assert(StringDate.addDay('2016/06/15', -1) === '2016/06/14')
    assert(StringDate.addDay('2016/06/15', 0) === '2016/06/15')
    assert(StringDate.addDay('2016/06/15', 1) === '2016/06/16')

    assert(StringDate.addDay('2016/06/01', -1) === '2016/05/31')
    assert(StringDate.addDay('2016/06/30', 1) === '2016/07/01')
  })

  it('addMonth', () => {
    assert(StringDate.addMonth('2016/08/01', 1) === '2016/09/01')
    assert(StringDate.addMonth('2016/08/01', 4) === '2016/12/01')
    assert(StringDate.addMonth('2016/08/01', 5) === '2017/01/01')

    assert(StringDate.addMonth('2016/08/15', -1) === '2016/07/15')
    assert(StringDate.addMonth('2016/08/15', 0) === '2016/08/15')
    assert(StringDate.addMonth('2016/08/15', 1) === '2016/09/15')

    assert(StringDate.addMonth('2016/08/31', 1) === '2016/09/30')
    assert(StringDate.addMonth('2016/08/31', 6) === '2017/02/28')
    assert(StringDate.addMonth('2016/08/31', -2) === '2016/06/30')
  })

  it('addYear', () => {
    assert(StringDate.addYear('2016/05/15', -1) === '2015/05/15')
    assert(StringDate.addYear('2016/05/15', 0) === '2016/05/15')
    assert(StringDate.addYear('2016/05/15', 1) === '2017/05/15')

    assert(StringDate.addYear('2016/02/29', 1) === '2017/02/28')
    assert(StringDate.addYear('2016/02/29', -1) === '2015/02/28')
    assert(StringDate.addYear('2016/02/29', 4) === '2020/02/29')
  })

  it('create', () => {
    assert(StringDate.create(2016, 8, 18) === '2016/08/18')
    assert(StringDate.create(2016, 8, 0) === '2016/07/31')
    assert(StringDate.create(2016, 8, 32) === '2016/09/01')
    assert(StringDate.create(2016, 13, 1) === '2017/01/01')
    assert(StringDate.create(2016, 0, 1) === '2015/12/01')
  })

  it('day', () => {
    assert(StringDate.day('2016/05/01') === 1)
    assert(StringDate.day('2016-05-02') === 2)
    assert(StringDate.day('2016.05.03') === 3)
    assert(StringDate.day('2016/5/4') === 4)
    assert(StringDate.day('2016-5-5') === 5)
    assert(StringDate.day('2016.5.6') === 6)
  })

  it('dayOfWeek', () => {
    assert(StringDate.dayOfWeek('2016/10/16') === 0)
    assert(StringDate.dayOfWeek('2016/10/17') === 1)
    assert(StringDate.dayOfWeek('2016/10/18') === 2)
    assert(StringDate.dayOfWeek('2016/10/19') === 3)
    assert(StringDate.dayOfWeek('2016/10/20') === 4)
    assert(StringDate.dayOfWeek('2016/10/21') === 5)
    assert(StringDate.dayOfWeek('2016/10/22') === 6)
  })

  it('diffInDay', () => {
    assert(StringDate.diffInDay('2016/06/21', '2016/06/20') === -1)
    assert(StringDate.diffInDay('2016/06/21', '2016/06/21') === 0)
    assert(StringDate.diffInDay('2016/06/21', '2016/06/22') === 1)
  })

  it('diffInMonth', () => {
    assert(StringDate.diffInMonth('2015/10/15', '2015/10/15') === 0)
    assert(StringDate.diffInMonth('2015/10/15', '2015/10/31') === 0)
    assert(StringDate.diffInMonth('2015/10/15', '2015/11/01') === 1)
    assert(StringDate.diffInMonth('2015/10/15', '2016/10/15') === 12)

    assert(StringDate.diffInMonth('2015/10/15', '2015/10/01') === 0)
    assert(StringDate.diffInMonth('2015/10/15', '2015/09/30') === -1)
    assert(StringDate.diffInMonth('2015/10/15', '2014/10/15') === -12)
  })

  it('diffInYear', () => {
    assert(StringDate.diffInYear('2016/01/01', '2016/01/01') === 0)
    assert(StringDate.diffInYear('2016/01/01', '2015/12/31') === -1)
    assert(StringDate.diffInYear('2016/01/01', '2015/05/25') === -1)
    assert(StringDate.diffInYear('2016/01/01', '2016/12/31') === 0)
    assert(StringDate.diffInYear('2016/01/01', '2017/01/01') === 1)
    assert(StringDate.diffInYear('2016/01/01', '2017/05/25') === 1)
  })

  it('dateToString', () => {
    assert(StringDate.dateToString(new Date('2016/01/01')) === '2016/01/01')
    assert(StringDate.dateToString(new Date('2016/12/10')) === '2016/12/10')
  })

  it('endOfMonth', () => {
    assert(StringDate.endOfMonth('2016/08/01') === '2016/08/31')
    assert(StringDate.endOfMonth('2016/08/18') === '2016/08/31')
    assert(StringDate.endOfMonth('2016/08/31') === '2016/08/31')
    assert(StringDate.endOfMonth('2016/02/15') === '2016/02/29')
    assert(StringDate.endOfMonth('2017/02/15') === '2017/02/28')
  })

  it('equal', () => {
    assert(StringDate.equal('2016/08/05', '2016/8/5') === true)
    assert(StringDate.equal('2016/08/05', '2016-08-05') === true)
    assert(StringDate.equal('2016/08/05', '2016-8-5') === true)
    assert(StringDate.equal('2016/08/05', '2016.08.05') === true)
    assert(StringDate.equal('2016/08/05', '2016.8.5') === true)
    assert(StringDate.equal('2016/08/05', '2016/08/06') === false)

    assert(StringDate.equal('2016/08/05', 'invalid') === false)
    assert(StringDate.equal('invalid', '2016/08/05') === false)
    assert(StringDate.equal('invalid', 'invalid') === false)
  })

  it('isValid', () => {
    assert(StringDate.isValid('2016/01/05') === true)
    assert(StringDate.isValid('2016/1/5') === true)
    assert(StringDate.isValid('2016-01-05') === true)
    assert(StringDate.isValid('2016-1-5') === true)
    assert(StringDate.isValid('2016.01.05') === true)
    assert(StringDate.isValid('2016.1.5') === true)

    assert(StringDate.isValid('invalid') === false)
    assert(StringDate.isValid('2016/99/05') === false)
    assert(StringDate.isValid('2016/01/99') === false)
  })

  it('greaterThan', () => {
    assert(StringDate.greaterThan('2016/08/18', '2016/08/17') === true)
    assert(StringDate.greaterThan('2016/08/18', '2016/08/18') === false)
    assert(StringDate.greaterThan('2016/08/18', '2016/08/19') === false)

    assert(StringDate.greaterThan('invalid', '2016/08/18') === false)
    assert(StringDate.greaterThan('2016/08/18', 'invalid') === false)
  })

  it('greaterThanOrEqual', () => {
    assert(StringDate.greaterThanOrEqual('2016/08/18', '2016/08/17') === true)
    assert(StringDate.greaterThanOrEqual('2016/08/18', '2016/08/18') === true)
    assert(StringDate.greaterThanOrEqual('2016/08/18', '2016/08/19') === false)

    assert(StringDate.greaterThanOrEqual('invalid', '2016/08/18') === false)
    assert(StringDate.greaterThanOrEqual('2016/08/18', 'invalid') === false)
  })

  it('lessThan', () => {
    assert(StringDate.lessThan('2016/08/18', '2016/08/17') === false)
    assert(StringDate.lessThan('2016/08/18', '2016/08/18') === false)
    assert(StringDate.lessThan('2016/08/18', '2016/08/19') === true)

    assert(StringDate.lessThan('invalid', '2016/08/18') === false)
    assert(StringDate.lessThan('2016/08/18', 'invalid') === false)
  })

  it('lessThanOrEqual', () => {
    assert(StringDate.lessThanOrEqual('2016/08/18', '2016/08/17') === false)
    assert(StringDate.lessThanOrEqual('2016/08/18', '2016/08/18') === true)
    assert(StringDate.lessThanOrEqual('2016/08/18', '2016/08/19') === true)

    assert(StringDate.lessThanOrEqual('invalid', '2016/08/18') === false)
    assert(StringDate.lessThanOrEqual('2016/08/18', 'invalid') === false)
  })

  it('max', () => {
    assert(StringDate.max('2016/08/15') === '2016/08/15')
    assert(StringDate.max('2016/08/10', '2016/08/15') === '2016/08/15')
    assert(StringDate.max('2016/08/10', '2016/08/15', '2016/08/05') === '2016/08/15')

    assert(StringDate.max(['2016/08/15']) === '2016/08/15')
    assert(StringDate.max(['2016/08/10', '2016/08/15']) === '2016/08/15')
    assert(StringDate.max(['2016/08/10', '2016/08/15', '2016/08/05']) === '2016/08/15')

    assert(StringDate.max(['2016/08/10', '2016/08/15'], ['2016/08/05', '2016/07/25']) === '2016/08/15')

    assert(StringDate.max('2016/08/15', '', 'invalid', null, undefined) === '2016/08/15')
  })

  it('min', () => {
    assert(StringDate.min('2016/08/15') === '2016/08/15')
    assert(StringDate.min('2016/08/10', '2016/08/15') === '2016/08/10')
    assert(StringDate.min('2016/08/10', '2016/08/15', '2016/08/05') === '2016/08/05')

    assert(StringDate.min(['2016/08/15']) === '2016/08/15')
    assert(StringDate.min(['2016/08/10', '2016/08/15']) === '2016/08/10')
    assert(StringDate.min(['2016/08/10', '2016/08/15', '2016/08/05']) === '2016/08/05')

    assert(StringDate.min(['2016/08/10', '2016/08/15'], ['2016/08/05', '2016/07/25']) === '2016/07/25')

    assert(StringDate.min('2016/08/15', '', 'invalid', null, undefined) === '2016/08/15')
  })

  it('month', () => {
    assert(StringDate.month('2016/01/01') === 1)
    assert(StringDate.month('2016-02-02') === 2)
    assert(StringDate.month('2016.03.03') === 3)
    assert(StringDate.month('2016/4/4') === 4)
    assert(StringDate.month('2016-5-5') === 5)
    assert(StringDate.month('2016.6.6') === 6)
  })

  it('now', () => {
    assert(StringDate.now() === StringDate.dateToString(new Date()))
  })

  it('startOfMonth', () => {
    assert(StringDate.startOfMonth('2016/08/01') === '2016/08/01')
    assert(StringDate.startOfMonth('2016/08/18') === '2016/08/01')
    assert(StringDate.startOfMonth('2016/08/31') === '2016/08/01')
  })

  it('toObject', () => {
    assert.deepEqual(StringDate.toObject('2016/08/18'), {year: 2016, month: 8, day: 18, dayOfWeek: 4})
  })

  it('year', () => {
    assert(StringDate.year('2001/01/01') === 2001)
    assert(StringDate.year('2002-01-01') === 2002)
    assert(StringDate.year('2003.01.01') === 2003)
    assert(StringDate.year('2004/1/1') === 2004)
    assert(StringDate.year('2005-1-1') === 2005)
    assert(StringDate.year('2006.1.1') === 2006)
  })

})
