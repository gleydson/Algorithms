import { expect, describe, it } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";

describe ('Singly Linked List', () => {
  it ('should can be possible to add items in front of list', () => {
    const singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.push_front(3)
    singlyLinkedList.push_front(2)
    singlyLinkedList.push_front(1)

    expect(singlyLinkedList.toArray()).toEqual([1, 2, 3])
  })
  
  it ('should can be possible to add items in back of list', () => {
    const singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.push_back(1)
    singlyLinkedList.push_back(2)
    singlyLinkedList.push_back(3)

    expect(singlyLinkedList.toArray()).toEqual([1, 2, 3])
  })
  
  it ('should can be possible to remove items in front of list', () => {
    const singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.push_back(1)
    singlyLinkedList.push_back(2)
    singlyLinkedList.push_back(3)

    singlyLinkedList.pop_front()
    singlyLinkedList.pop_front()

    expect(singlyLinkedList.toArray()).toEqual([3])
  })
  
  it ('should can be possible to remove items in back of list', () => {
    const singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.push_back(1)
    singlyLinkedList.push_back(2)
    singlyLinkedList.push_back(3)

    singlyLinkedList.pop_back()
    singlyLinkedList.pop_back()

    expect(singlyLinkedList.toArray()).toEqual([1])
  })

  it ('should remove items in back of list in empty list', () => {
    const singlyLinkedList = new SinglyLinkedList()
    
    singlyLinkedList.pop_back()

    expect(singlyLinkedList.toArray()).toEqual([])
  })
  
  it ('should can be possible to convert list in string', () => {
    const singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.push_back(1)
    singlyLinkedList.push_back(2)
    singlyLinkedList.push_back(3)

    expect(singlyLinkedList.toString()).toEqual('[1, 2, 3]')
  })
  
  it ('should can be possible to get list size', () => {
    const singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.push_back(1)
    singlyLinkedList.push_back(2)
    singlyLinkedList.push_back(3)
    singlyLinkedList.push_back(4)

    expect(singlyLinkedList.size()).toEqual(4)
  })

  it ('should can be possible to compare equals lists', () => {
    const firstSinglyLinkedList = new SinglyLinkedList()
    const secondSinglyLinkedList = new SinglyLinkedList()

    firstSinglyLinkedList.push_back(1)
    firstSinglyLinkedList.push_back(2)
    firstSinglyLinkedList.push_back(3)

    secondSinglyLinkedList.push_back(1)
    secondSinglyLinkedList.push_back(2)
    secondSinglyLinkedList.push_back(3)

    expect(firstSinglyLinkedList.equals(secondSinglyLinkedList)).toBeTruthy()
  })

  it ('should can be possible to compare different lists with different sizes', () => {
    const firstSinglyLinkedList = new SinglyLinkedList()
    const secondSinglyLinkedList = new SinglyLinkedList()

    firstSinglyLinkedList.push_back(1)
    firstSinglyLinkedList.push_back(2)
    firstSinglyLinkedList.push_back(3)

    secondSinglyLinkedList.push_back(1)
    secondSinglyLinkedList.push_back(2)

    expect(firstSinglyLinkedList.equals(secondSinglyLinkedList)).toBeFalsy()
  })

  it ('should can be possible to compare different lists with equal sizes', () => {
    const firstSinglyLinkedList = new SinglyLinkedList()
    const secondSinglyLinkedList = new SinglyLinkedList()

    firstSinglyLinkedList.push_back(1)
    firstSinglyLinkedList.push_back(2)
    firstSinglyLinkedList.push_back(3)

    secondSinglyLinkedList.push_back(1)
    secondSinglyLinkedList.push_back(3)
    secondSinglyLinkedList.push_back(2)


    expect(firstSinglyLinkedList.equals(secondSinglyLinkedList)).toBeFalsy()
  })
  
  it ('should can be possible to iterate over list', () => {
    const singlyLinkedList = new SinglyLinkedList<number>()

    singlyLinkedList.push_back(3)
    singlyLinkedList.push_back(4)
    singlyLinkedList.push_front(2)
    singlyLinkedList.push_front(1)

    let indexCount = 1
    for (const item of singlyLinkedList) {
      expect(item).toEqual(indexCount)
      indexCount++
    }
  })
})
