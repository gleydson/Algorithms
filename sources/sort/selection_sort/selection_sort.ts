export function selectionSort(array: number[]) {
  let currentMinimunIndex = 0
  let lastUnsortedIndex = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = lastUnsortedIndex; j < array.length; j++) {
      if (array[j] < array[currentMinimunIndex]) {
        currentMinimunIndex = j
      }
    }

    let temp = array[lastUnsortedIndex]
    array[lastUnsortedIndex] = array[currentMinimunIndex]
    array[currentMinimunIndex] = temp
    lastUnsortedIndex += 1
    currentMinimunIndex = lastUnsortedIndex
  }

  return array
}