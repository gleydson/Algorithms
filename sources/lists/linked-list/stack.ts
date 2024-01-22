import { Node, Stack as StackType } from './type'

export class Stack<T> implements StackType<T> {
  private head?: Node<T> = undefined
  public length: number

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    this.length =+ 1
    const node = new Node(item)

    if (this.head == null) {
      this.head = node
      return
    }

    node.next = this.head
    this.head = node
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1)

    if (this.length === 0) {
      const head = this.head
      this.head = undefined
      return head?.data
    }

    const head = this.head
    this.head = this.head?.next

    return head?.data
  }

  peek(): T | undefined {
    return this.head?.data
  }
}