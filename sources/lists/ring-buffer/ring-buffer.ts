interface RingBufferType<T> {
  get length(): number;
  get is_full(): boolean;
  enqueue(item: T): void;
  dequeue(): T | undefined;
}

export class RingBuffer<T> implements RingBufferType<T> {
  public length: number
  
  private MAX_CAPACITY = 10
  private buffer: T[]
  private head: number
  private tail: number

  constructor() {
    this.length = 0
    this.buffer = new Array<T>(this.MAX_CAPACITY)
    this.head = 0
    this.tail = 0
  }

  enqueue(item: T): void {
    this.length += 1
    const tail = this.tail
    this.buffer[tail] = item
    this.tail = (tail + 1) % this.MAX_CAPACITY
  }

  dequeue(): T | undefined {
    this.length = Math.max(0, this.length - 1)
    const head = this.head
    const item = this.buffer[head]
    delete this.buffer[head]

    this.head = (head + 1) % this.MAX_CAPACITY

    return item
  }

  get is_full(): boolean {
    return this.length === this.MAX_CAPACITY
  }
}