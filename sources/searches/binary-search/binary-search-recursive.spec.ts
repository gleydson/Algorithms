import { expect, test } from "vitest";
import { binarySearchRecursive } from "./binary-search-recursive";

test('can be possible to find an element in ordered array of numbers', () => {
  const arrayOfNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 16, 19, 22]

  expect(arrayOfNumbers[binarySearchRecursive(arrayOfNumbers, 5)]).toEqual(5)
  expect(arrayOfNumbers[binarySearchRecursive(arrayOfNumbers, 1)]).toEqual(1)
  expect(arrayOfNumbers[binarySearchRecursive(arrayOfNumbers, 11)]).toEqual(11)
  expect(arrayOfNumbers[binarySearchRecursive(arrayOfNumbers, 15)]).toEqual(15)
  expect(arrayOfNumbers[binarySearchRecursive(arrayOfNumbers, 19)]).toEqual(19)
  expect(arrayOfNumbers[binarySearchRecursive(arrayOfNumbers, 22)]).toEqual(22)
  expect(binarySearchRecursive(arrayOfNumbers, 2)).toEqual(-1)
  expect(binarySearchRecursive(arrayOfNumbers, 6)).toEqual(-1)
  expect(binarySearchRecursive(arrayOfNumbers, 10)).toEqual(-1)
  expect(binarySearchRecursive(arrayOfNumbers, 18)).toEqual(-1)
  expect(binarySearchRecursive(arrayOfNumbers, 25)).toEqual(-1)
})