import toLowerCase from "./toLowerCase";

test('toLowerCase should replace characters to lower case ', () => {
    expect(toLowerCase('Text')).toBe('text')
})
