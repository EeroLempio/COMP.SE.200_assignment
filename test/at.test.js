import at from '../src/at'

describe('at', () =>{
  test('create array of the values at paths of objects', () =>{
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
  });
});
