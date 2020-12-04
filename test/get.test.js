import get from '../src/get'

describe('get', () =>{
  test('placeholder', () =>{
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, 'a[0].b.c')).toStrictEqual(3);
    expect(get(object, ['a', '0', 'b', 'c'])).toStrictEqual(3);
    expect(get(object, 'a.b.c', 'default')).toStrictEqual('default');
  });
});
