import toUpperCase from "./toUpperCase";

test('toUpperCase should replace characters to upper case', () => {
    expect(toUpperCase('TeXt')).toBe('TEXT')
})