class BynaryTreeNode<T> {
  value: T
  left: BynaryTreeNode<T> | null = null
  right: BynaryTreeNode<T> | null = null

  public constructor(value: T) {
    this.value = value;
  }
}

class BinaryThree<T> {
  root: BynaryTreeNode<T> | null = null

  public add(value: T): void {
    const newNode = new BynaryTreeNode(value)

    if (this.root == null) {
      this.root = newNode
      return
    }

    let currentNode = this.root

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  public has(value: T): boolean {
    if (this.root == null) {
      return false
    }

    let currentNode: BynaryTreeNode<T> | null = this.root

    while (currentNode != null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        return true
      }
    }

    return true
  }
}