function _binarySearch(
  orderedArrayOfNumbers: number[],
  itemToFind: number,
  start: number,
  end: number
): number {
  if (start > end) {
    return -1
  }

  const middle = Math.floor((start + end) / 2)
  const pointer = orderedArrayOfNumbers[middle]

  if (itemToFind === pointer) {
    return middle
  }

  if (itemToFind < pointer) {
    return _binarySearch(orderedArrayOfNumbers, itemToFind, start, middle - 1)
  }
  
  return _binarySearch(orderedArrayOfNumbers, itemToFind, middle + 1, end)
}

export function binarySearchRecursive(orderedArrayOfNumbers: number[], itemToFind: number) {
  return _binarySearch(orderedArrayOfNumbers, itemToFind, 0, orderedArrayOfNumbers.length - 1)
}