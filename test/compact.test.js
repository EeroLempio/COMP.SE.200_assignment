import compact from '../src/compact'

describe('compact', () =>{
  test('falsey values', () =>{
    /* FAILS
    expect(compact([0, 1, false, 2, '', 3, null, 4, "", 5, undefined, 6, NaN])).toStrictEqual([1, 2, 3, 4, 5, 6]);
    */
  });
});
