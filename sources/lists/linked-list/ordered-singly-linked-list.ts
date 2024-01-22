import { Node } from "./type"

export class OrderedSinglyLinkedList<T> {
  private head?: Node<T>
  private _size: number
  private compareFn?(x: T, y: T): number

  /**
   * @param compareFn
   * Function used to determine the order of the elements. It is expected to
   * return a negative value if the first argument is less than the second
   * argument, zero if they're equal, and a positive value otherwise.
   */
  constructor (compareFn?: (x: T, y: T) => number) {
    this.head = undefined
    this._size = 0
    this.compareFn = compareFn
  }

  push (value: T) {
    let previous: Node<T> | undefined
    let node: Node<T> | undefined = this.head

    while (node != null) {
      if ((this.compareFn?.(node.data, value) ?? 0) > 0 || node.data > value) {
        break
      }
      
      previous = node
      node = node.next
    }

    if (previous == null) {
      this.head = new Node(value, node)
    } else {
      const next = node
      previous.next = new Node(value, next)
    }

    this._size++
  }

  has (value: T) {
    let node = this.head

    while (node != null) {
      if ((this.compareFn?.(node.data, value) ?? 0) > 0 || node.data > value) {
        return false
      }

      if ((this.compareFn?.(node.data, value) ?? -1) === 0 || node.data === value) {
        return true
      }

      node = node.next
    }

    return false
  }

  remove (value: T) {
    let previous: Node<T> | undefined
    let node = this.head

    while (node != null) {
      if ((this.compareFn?.(node.data, value) ?? -1) === 0 || node.data === value) {
        break
      }

      previous = node
      node = node.next
    }

    if (previous == null) {
      const next = node?.next
      this.head = next
    } else {
      const next = node?.next
      previous.next = next
    }
  }

  removeAll (value: T) {
    let previous: Node<T> | undefined
    let node = this.head
    // [2, 1, 1]

    while (node != null) {
      if ((this.compareFn?.(node.data, value) ?? -1) === 0 || node.data === value) {
        if (previous == null) {
          const next = node.next
          this.head = next

          node = this.head
        } else {
          const next = node?.next
          previous.next = next
        }
      } else {
        previous = node
        node = node.next
      }

    }
  }

  size () {
    return this._size
  }

  equals (listToCompare: OrderedSinglyLinkedList<T>) {

  }

  toArray () {
    let node = this.head

    let result: T[] = []

    while (node != null) {
      result.push(node.data) 
      node = node.next
    }

    return result
  }
}
