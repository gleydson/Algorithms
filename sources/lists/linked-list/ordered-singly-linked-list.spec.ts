import { describe, expect, it } from "vitest";
import { OrderedSinglyLinkedList } from "./ordered-singly-linked-list";

describe ('Ordered Singly Linked List', () => {
  it ('should be possible to add numbers in ordered list', () => {
    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<number>()

    orderedSinglyLinkedList.push(3)
    orderedSinglyLinkedList.push(4)
    orderedSinglyLinkedList.push(1)
    orderedSinglyLinkedList.push(2)
    orderedSinglyLinkedList.push(5)

    expect(orderedSinglyLinkedList.toArray()).toEqual([1, 2, 3, 4, 5])
  })

  it ('should be possible to add custom object in ordered list', () => {
    class CustomObj {
      id: number

      constructor (id: number) {
        this.id = id
      }
    }

    const firstCustomObj = new CustomObj(1)
    const secondCustomObj = new CustomObj(2)
    const thirdCustomObj = new CustomObj(3)

    const list = new OrderedSinglyLinkedList<CustomObj>((x, y) => x.id - y.id)

    list.push(thirdCustomObj)
    list.push(firstCustomObj)
    list.push(secondCustomObj)

    expect(list.toArray().map(x => x.id)).toEqual([1, 2, 3])
  })

  it ('should be possible to get size of list', () => {
    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<number>()

    orderedSinglyLinkedList.push(1)
    orderedSinglyLinkedList.push(2)
    orderedSinglyLinkedList.push(3)
    orderedSinglyLinkedList.push(4)

    expect(orderedSinglyLinkedList.size()).toEqual(4)
  })

  it ('should be possible to verify if element exists in list', () => {
    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<number>()

    orderedSinglyLinkedList.push(1)
    orderedSinglyLinkedList.push(2)
    orderedSinglyLinkedList.push(3)
    orderedSinglyLinkedList.push(4)

    expect(orderedSinglyLinkedList.has(1)).toBeTruthy()
    expect(orderedSinglyLinkedList.has(2)).toBeTruthy()
    expect(orderedSinglyLinkedList.has(3)).toBeTruthy()
    expect(orderedSinglyLinkedList.has(4)).toBeTruthy()
    expect(orderedSinglyLinkedList.has(5)).toBeFalsy()
    expect(orderedSinglyLinkedList.has(0)).toBeFalsy()
  })

  it ('should be possible to verify if custom element exists in list', () => {
    class CustomObj {
      id: number

      constructor (id: number) {
        this.id = id
      }
    }

    const firstCustomObj = new CustomObj(1)
    const secondCustomObj = new CustomObj(2)
    const thirdCustomObj = new CustomObj(3)
    const fourthCustomObj = new CustomObj(4)

    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<CustomObj>((x, y) => x.id - y.id)

    orderedSinglyLinkedList.push(firstCustomObj)
    orderedSinglyLinkedList.push(secondCustomObj)
    orderedSinglyLinkedList.push(thirdCustomObj)

    expect(orderedSinglyLinkedList.has(firstCustomObj)).toBeTruthy()
    expect(orderedSinglyLinkedList.has(secondCustomObj)).toBeTruthy()
    expect(orderedSinglyLinkedList.has(thirdCustomObj)).toBeTruthy()
    expect(orderedSinglyLinkedList.has(fourthCustomObj)).toBeFalsy()
  })

  it ('should be able to remove a number in list', () => {
    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<number>()

    orderedSinglyLinkedList.push(1)
    orderedSinglyLinkedList.push(2)
    orderedSinglyLinkedList.push(3)
    orderedSinglyLinkedList.push(4)
    orderedSinglyLinkedList.push(5)

    orderedSinglyLinkedList.remove(3)
    orderedSinglyLinkedList.remove(1)
    orderedSinglyLinkedList.remove(5)

    expect(orderedSinglyLinkedList.toArray()).toEqual([2, 4])
  })

  it ('should be able to remove a custom element in list', () => {
    class CustomObj {
      id: number

      constructor (id: number) {
        this.id = id
      }
    }

    const firstCustomObj = new CustomObj(1)
    const secondCustomObj = new CustomObj(2)
    const thirdCustomObj = new CustomObj(3)
    const fourthCustomObj = new CustomObj(4)

    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<CustomObj>((x, y) => x.id - y.id)

    orderedSinglyLinkedList.push(firstCustomObj)
    orderedSinglyLinkedList.push(secondCustomObj)
    orderedSinglyLinkedList.push(thirdCustomObj)
    orderedSinglyLinkedList.push(fourthCustomObj)

    orderedSinglyLinkedList.remove(thirdCustomObj)
    orderedSinglyLinkedList.remove(firstCustomObj)
    orderedSinglyLinkedList.remove(fourthCustomObj)
    orderedSinglyLinkedList.remove(secondCustomObj)

    expect(orderedSinglyLinkedList.toArray()).toEqual([])
  })

  it ('should be able to remove all occurrences of a number', () => {
    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<number>()

    orderedSinglyLinkedList.push(2)
    orderedSinglyLinkedList.push(1)
    orderedSinglyLinkedList.push(2)
    orderedSinglyLinkedList.push(2)

    orderedSinglyLinkedList.removeAll(2)

    expect(orderedSinglyLinkedList.toArray()).toEqual([1])
  })

  it ('should be able to remove all occurrences of a custom element', () => {
    class CustomObj {
      id: number

      constructor (id: number) {
        this.id = id
      }
    }

    const orderedSinglyLinkedList = new OrderedSinglyLinkedList<CustomObj>((x, y) => x.id - y.id)

    orderedSinglyLinkedList.push(new CustomObj(1))
    orderedSinglyLinkedList.push(new CustomObj(1))
    orderedSinglyLinkedList.push(new CustomObj(2))
    orderedSinglyLinkedList.push(new CustomObj(1))
    orderedSinglyLinkedList.push(new CustomObj(1))

    orderedSinglyLinkedList.removeAll(new CustomObj(1))

    expect(orderedSinglyLinkedList.toArray().map(x => x.id)).toEqual([2])
  })
})