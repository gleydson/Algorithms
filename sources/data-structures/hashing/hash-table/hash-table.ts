type Item<T> = {
  key: string
  value: T
}

export class HashTable<T> {
  private table: Array<Item<T>>
  private qtyItems: number

  constructor (initialSize = 100) {
    this.table = new Array<Item<T>>(initialSize)
    this.qtyItems = 0
  }

  set (key: string, value: T) {
    let index = this.findIndex(key)

    if (!this.table[index]?.key) {
      this.table[index] = { key, value }

      this.qtyItems += 1

      if (this.qtyItems > this.table.length) {
        this.rebuild()
      }
    }
  }

  get (key: string) {
    const index = this.findIndex(key)
    return this.table[index]?.value
  }

  private findIndex (key: string) {
    const tableLength = this.table.length
    let index = key.charCodeAt(4) % tableLength

    while (this.table[index]?.key !== key && this.table[index]?.key != null) {
      index = (index + 1) % tableLength
    }

    return index
  }

  has (key: string) {
    const index = this.findIndex(key)
    return Boolean(this.table[index]?.value)
  }

  toString() {
    let result = '[\n'

    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]?.key == null) {
        result += `  [${index}: undefined]\n`        
      } else {
        result += `  [${index}: ${this.table[index].key}->${this.table[index].value}]\n`
      }
    }
    result += ']'

    return result
  }

  private rebuild () {
    const oldMaxSize = this.table.length
    const newMaxSize = oldMaxSize * 2
    const aux = this.table
    
    this.table = new Array(newMaxSize)
    this.qtyItems = 0

    for (let index = 0; index < oldMaxSize; index++) {
      if (aux[index]?.key != null) {
        this.set(aux[index].key, aux[index].value)
      }
    }
  }
}