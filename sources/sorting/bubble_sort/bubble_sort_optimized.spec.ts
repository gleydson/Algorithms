import { test, expect } from 'vitest'
import { bubbleSortOptimized } from './bubble_sort_optimized'

test('bubble sort', () => {
  const randomizedArrayOfNumber = [5, 3, 1, 2, 7, 9, 8, 0, 4, 6]
  expect(bubbleSortOptimized(randomizedArrayOfNumber)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})