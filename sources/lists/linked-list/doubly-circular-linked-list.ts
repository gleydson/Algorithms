import { LinkedList, Node } from "./type";

export class DoublyCircularLinkedList<T> implements LinkedList<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  insertAt(item: T, index: number): void {
    if (index > this.length) {
      throw Error("index out of bounds")
    }

    
    if (index === this.length) {
      this.append(item)
      return
    }
    
    if (index === 0) {
      this.prepend(item)
      return
    }
    
    this.length += 1
    const curr = this.getAt(index)
    const node = new Node(item, curr, curr?.prev)
    curr!.prev = node

    if (node.prev != null) {
      node.prev.next = curr
    }
  }

  remove(item: T): T | undefined {
    let curr = this.head
    let idx = 0

    while (
      curr != null &&
      curr.data !== item &&
      idx < this.length
    ) {
      curr = curr.next
      idx += 1
    }

    if (curr == null) {
      return
    }

    return this.removeNode(curr)
  }

  removeAt(index: number): T | undefined {
    const node = this.getAt(index)

    if (node == null) {
      return
    }

    return this.removeNode(node)
  }

  append(item: T): void {
    this.length += 1
    const node = new Node(item)

    if (this.tail == null) {
      this.head = this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }
  
  prepend(item: T): void {
    this.length += 1;
    const node = new Node(item);
    
    if (this.head == null) {
      this.head = this.tail = node;
      return; 
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node 
  }
  
  get(index: number): T | undefined {
    const node = this.getAt(index)
    return node?.data
  }

  private getAt(index: number): Node<T> | undefined {
    let curr = this.head
    let idx = 0

    while (curr != null && idx < index) {
      curr = curr.next
      idx += 1
    }

    return curr
  }

  private removeNode(node: Node<T>): T | undefined {
    this.length -= 1

    if (this.length === 0) {
      const out = this.head?.data
      this.head = this.tail = undefined
      return out
    }

    if (node.prev != null) {
      node.prev.next = node.next
    }

    if (node.next != null) {
      node.next.prev = node.prev 
    }

    if (node == this.head) {
      this.head = node.next
    }

    if (node == this.tail) {
      this.tail = node.prev
    }

    node.prev = node.next = undefined
    return node.data
  }
}
