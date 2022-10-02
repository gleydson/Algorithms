import { expect, test } from 'vitest'
import { HashTable } from './hash-table'

test('can be possible to insert and get values in table', () => {
  const hashTable = new HashTable<string>(5)
  
  hashTable.set('firstName', 'John')
  hashTable.set('lastName', 'Doe')

  expect(hashTable.get('firstName')).toEqual('John')
  expect(hashTable.get('lastName')).toEqual('Doe')
})

test('can be possible to check if key exists in hash table', () => {
  const hashTable = new HashTable<string>(5)

  hashTable.set('firstName', 'John')
  
  expect(hashTable.has('firstName')).toBeTruthy()
  expect(hashTable.has('lastName')).toBeFalsy()
})

test('can be possible to duplicate size of array when is full', () => {
  const hashTable = new HashTable<string>(2)

  expect(hashTable.size()).toEqual(2)

  hashTable.set('firstName', 'John')
  hashTable.set('lastName', 'Doe')
  
  expect(hashTable.size()).toEqual(4)
  expect(hashTable.has('firstName')).toBeTruthy()
  expect(hashTable.has('lastName')).toBeTruthy()
})