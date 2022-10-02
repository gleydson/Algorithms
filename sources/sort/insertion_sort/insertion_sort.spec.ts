import { test, expect } from 'vitest'
import { insertionSort } from './insertion_sort'

test('insertion sort', () => {
  const randomizedArrayOfNumber = [5, 3, 1, 2, 7, 9, 8, 0, 4, 6]
  expect(insertionSort(randomizedArrayOfNumber)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})