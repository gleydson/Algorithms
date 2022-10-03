function _binarySearch(
  orderedArrayOfNumbers: number[],
  itemToFind: number,
  start: number,
  end: number
): number {
  if (start > end) {
    return -1
  }

  const middle = Math.floor(start + (end - start) / 2)
  const pivot = orderedArrayOfNumbers[middle]

  if (itemToFind === pivot) {
    return middle
  }

  if (itemToFind < pivot) {
    return _binarySearch(orderedArrayOfNumbers, itemToFind, start, middle - 1)
  }
  
  return _binarySearch(orderedArrayOfNumbers, itemToFind, middle + 1, end)
}

export function binarySearchRecursive(orderedArrayOfNumbers: number[], itemToFind: number) {
  return _binarySearch(orderedArrayOfNumbers, itemToFind, 0, orderedArrayOfNumbers.length - 1)
}