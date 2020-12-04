import every from '../src/every'

describe('every', () =>{
  test('predicate', () =>{
    expect(every([true, 1, null, 'yes'], Boolean)).toStrictEqual(false);
    expect(every(['y', 'ye', 'ys', 'yes'], String)).toStrictEqual(true);
  });
});
