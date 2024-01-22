import { expect, test } from "vitest";
import { binary_search_interative } from "./binary-search-interative";

test('can be possible to find an element in ordered array of numbers', () => {
  const arr = [1, 3, 5, 7, 9, 11, 13, 15, 16, 19, 22]

  expect(binary_search_interative(arr, 5)).toEqual(true)
  expect(binary_search_interative(arr, 1)).toEqual(true)
  expect(binary_search_interative(arr, 11)).toEqual(true)
  expect(binary_search_interative(arr, 15)).toEqual(true)
  expect(binary_search_interative(arr, 19)).toEqual(true)
  expect(binary_search_interative(arr, 22)).toEqual(true)
  expect(binary_search_interative(arr, 2)).toEqual(false)
  expect(binary_search_interative(arr, 6)).toEqual(false)
  expect(binary_search_interative(arr, 10)).toEqual(false)
  expect(binary_search_interative(arr, 18)).toEqual(false)
  expect(binary_search_interative(arr, 25)).toEqual(false)
})