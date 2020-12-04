import map from '../src/map'

describe('map', () =>{
  test('return array thats been iterated over with an iterator function', () =>{
    function square(n) {
      return n * n
    };
    expect(map([4, 8], square)).toStrictEqual([16, 64]);
  });
});
