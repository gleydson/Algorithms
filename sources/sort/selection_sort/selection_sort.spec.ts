import { test, expect  } from 'vitest'
import { selectionSort } from './selection_sort'

test('selection sort', () => {
  const randomizedArrayOfNumber = [5, 3, 1, 2, 7, 9, 8, 0, 4, 6]
  expect(selectionSort(randomizedArrayOfNumber)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})