export function bubbleSortOptimized(array: number[]) {
  let swapped = true
  do {
    swapped = false

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp

        swapped = true
      }
    }
  } while(swapped)

  return array
}