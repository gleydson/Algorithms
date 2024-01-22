import { LinkedList, Node } from "./type";

export class DoublyLinkedList<T> implements LinkedList<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  insertAt(item: T, index: number): void {
    throw new Error("Method not implemented.");
  }
  remove(item: T): T | undefined {
    throw new Error("Method not implemented.");
  }
  removeAt(item: T): T | undefined {
    throw new Error("Method not implemented.");
  }
  append(item: T): void {
    throw new Error("Method not implemented.");
  }
  prepend(item: T): void {
    throw new Error("Method not implemented.");
  }
  
  get(index: number): T | undefined {
    let curr: Node<T> | undefined = this.head
    let i = 0

    while (i < index && curr != null) {
      curr = curr.next
    }

    return curr?.data
  }
}