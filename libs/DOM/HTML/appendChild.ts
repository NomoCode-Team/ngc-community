/**
 * @brief Appends child HTML element to parent
 * @param parent parent HTML element
 * @param child child HTML element
 * @speak append HTML Element {child} to {parent}
 */

export default function setElementPropToValue(parent: HTMLElement, child: HTMLElement) {
  parent.appendChild(child)
}