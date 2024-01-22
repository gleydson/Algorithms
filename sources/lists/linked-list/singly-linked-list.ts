import { LinkedList, Node } from './type'

export class SinglyLinkedList<T> implements LinkedList<T>  {
  private head?: Node<T>
  private tail?: Node<T>
  private _size: number

  constructor () {
    this.head = undefined
    this.tail = undefined
    this._size = 0
  }
  
  get length(): number {
    return this._size
  }
  
  insertAt(item: T, index: number): void {
    throw new Error('Method not implemented.')
  }
  
  remove(item: T): T | undefined {
    throw new Error('Method not implemented.')
  }
  
  removeAt(item: T): T | undefined {
    throw new Error('Method not implemented.')
  }
  
  append(item: T): void {
    throw new Error('Method not implemented.')
  }
  
  prepend(item: T): void {
    throw new Error('Method not implemented.')
  }
  
  get(index: number): T | undefined {
    throw new Error('Method not implemented.')
  }

  private *[Symbol.iterator]() {
    let node = this.head

    while (node != null) {
      yield node.data
      node = node.next
    }
  }
}