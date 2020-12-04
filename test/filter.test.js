import filter from '../src/filter'

describe('filter', () =>{
  test('filtering', () =>{
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'sally', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    expect(filter(users, ({ active }) => active)).toMatchObject([{ 'user': 'barney', 'active': true }, { 'user': 'sally', 'active': true }])
  });
});
