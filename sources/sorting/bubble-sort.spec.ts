import { test, expect } from 'vitest'
import { bubble_sort } from './bubble-sort'

test('bubble sort', () => {
  const arr = [5, 3, 1, 2, 7, 9, 8, 0, 4, 6]
  expect(bubble_sort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})