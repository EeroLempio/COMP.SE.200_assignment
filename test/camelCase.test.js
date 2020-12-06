import camelCase from "../src/camelCase"

describe('camelCase', () =>{
  test('separator symbols', () =>{
    expect(camelCase("Foo bar")).toBe(" fooBar");
    expect(camelCase("FoO bAr. Bar Foo")).toBe(" foOBArBarFoo");
    expect(camelCase("Foo.Bar,GoO/bar(Doo)Bar@Soo-bar'moo*bar^too~bar&joo|baR&")).toBe(" fooBarGoOBarDooBarSooBarmooBarTooBarJooBaR");
  });
  test('incorrect input', () =>{
    expect(camelCase(2)).toBe(" 2");
    /* FAILS
    expect(camelCase({foo: "bar"})).toBe({"foo": "bar"});
    */
  });
});
