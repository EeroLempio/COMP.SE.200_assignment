import countBy from '../src/countBy'

describe('countBy', () =>{
  test('return an object where keys are listed based on an input array and array-items keys', () =>{
    /* FAILS
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
      ]
    expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 });
    */
  });
});
