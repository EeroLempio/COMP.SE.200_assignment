import words from '../src/words'

describe('words', () =>{
  test('split string to array of words', () =>{
    expect(words('fred, barney, & pebbles')).toStrictEqual(['fred', 'barney', 'pebbles']);
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual(['fred', 'barney', '&', 'pebbles']);
  });
});
