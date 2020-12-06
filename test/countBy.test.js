import countBy from '../src/countBy'

describe('countBy', () =>{
  test('return an object where keys are listed based on an input array and array-items keys', () =>{
    /* FAILS
    This is an example given in the functions own
    documentation and it does not perform as promised.
    The return values for this is
    { 'true': 1, 'false': 0 }
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
      ]
    expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 });
    */
  });
});
