import { expect, test } from 'vitest'
import { quick_sort1, quick_sort2 } from './quick-sort'

test('quick sort (as last element being pivot)', () => {
  const arr1 = [7, 100, 29, 1, 513, 20, 78, 0, 720]
  const arr2 = [7, 8, 4, 3, 5]

  quick_sort1(arr1)
  quick_sort1(arr2)

  expect(arr1).toEqual([0, 1, 7, 20, 29, 78, 100, 513, 720])
  expect(arr2).toEqual([3, 4, 5, 7, 8])
})

test('quick sort (as middle element being pivot)', () => {
  const arr1 = [7, 100, 29, 1, 513, 20, 78, 0, 720]
  const arr2 = [7, 8, 4, 3, 5]

  quick_sort2(arr1)
  quick_sort2(arr2)

  expect(arr1).toEqual([0, 1, 7, 20, 29, 78, 100, 513, 720])
  expect(arr2).toEqual([3, 4, 5, 7, 8])
})