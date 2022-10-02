export function binarySearchInterative(orderedArrayOfNumbers: number[], itemToFind: number) {
  let start = 0
  let end = orderedArrayOfNumbers.length - 1

  while (end >= start) {
    const middle = Math.floor(start + (end - start) / 2)
    const pointer = orderedArrayOfNumbers[middle]

    if (pointer === itemToFind) {
      return middle
    }

    if (itemToFind < pointer) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return -1
}