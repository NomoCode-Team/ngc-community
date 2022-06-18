
/**
 * @brief Generates repetitive event at the specified period
 * @param callback callback function to call when event is triggered
 * @param interval  period in milliseconds
 */
 export default function interval(callback: Function, interval: number) {
  return setInterval(callback, interval)
}