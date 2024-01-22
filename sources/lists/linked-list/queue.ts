import { Node, Queue as QueueType } from './type'

export class Queue<T> implements QueueType<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    this.length += 1
    
    if (this.tail == null) {
      this.tail = this.head = new Node(item)
    }
  }

  dequeue(): T | undefined {
    if (this.head?.data == null) return undefined

    this.length -= 1

    const head = this.head
    this.head = this.head.next

    head.next = undefined

    return head.data
  }

  peek(): T | undefined {
    return this.head?.data
  }
}