import assert from 'assert'
import Sdate from '../src/sdate.js'


describe('Sdate', () => {

  it('diffInDay', () => {
    assert.equal(Sdate.diffInDay('2016/06/21', '2016/06/20'), -1)
    assert.equal(Sdate.diffInDay('2016/06/21', '2016/06/21'), 0)
    assert.equal(Sdate.diffInDay('2016/06/21', '2016/06/22'), 1)
  })

})
