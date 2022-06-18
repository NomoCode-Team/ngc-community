/**
 * @jest-environment jsdom
 */

import appendChild from "./appendChild";

test('appendChild should add child to the HTMLElement', () => {
  
  const my_div = document.createElement("div");
  appendChild(document.body, my_div)

  expect(document.body.childNodes.length).toBe(1)
})