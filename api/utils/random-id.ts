export function getRandomId (): string {
  const length = 8
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString()
}
