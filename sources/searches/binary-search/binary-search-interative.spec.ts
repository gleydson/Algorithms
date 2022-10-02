import { expect, test } from "vitest";
import { binarySearchInterative } from "./binary-search-interative";

test('can be possible to find an element in ordered array of numbers', () => {
  const arrayOfNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 16, 19, 22]

  expect(arrayOfNumbers[binarySearchInterative(arrayOfNumbers, 5)]).toEqual(5)
  expect(arrayOfNumbers[binarySearchInterative(arrayOfNumbers, 1)]).toEqual(1)
  expect(arrayOfNumbers[binarySearchInterative(arrayOfNumbers, 11)]).toEqual(11)
  expect(arrayOfNumbers[binarySearchInterative(arrayOfNumbers, 15)]).toEqual(15)
  expect(arrayOfNumbers[binarySearchInterative(arrayOfNumbers, 19)]).toEqual(19)
  expect(arrayOfNumbers[binarySearchInterative(arrayOfNumbers, 22)]).toEqual(22)
  expect(binarySearchInterative(arrayOfNumbers, 2)).toEqual(-1)
  expect(binarySearchInterative(arrayOfNumbers, 6)).toEqual(-1)
  expect(binarySearchInterative(arrayOfNumbers, 10)).toEqual(-1)
  expect(binarySearchInterative(arrayOfNumbers, 18)).toEqual(-1)
  expect(binarySearchInterative(arrayOfNumbers, 25)).toEqual(-1)
})