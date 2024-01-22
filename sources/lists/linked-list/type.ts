export interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(item: T): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

export interface Queue<T> {
  get length(): number;
  enqueue(item: T): void
  dequeue(): T | undefined
  peek(): T | undefined
}

export interface Stack<T> {
  get length(): number;
  push(item: T): void
  pop(): T | undefined
  peek(): T | undefined
}

export class Node<T> {
  data: T
  next?: Node<T>
  prev?: Node<T>

  constructor (data: T, next?: Node<T>, prev?: Node<T>) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}