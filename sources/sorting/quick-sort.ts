// quick sort with pivot as last element

function qs(arr: number[], start: number, final: number): void {
  if (start >= final) return

  const pivotIdx = partition(arr, start, final)

  qs(arr, start, pivotIdx - 1)
  qs(arr, pivotIdx + 1, final)
}

function partition(arr: number[], start: number, final: number): number {
  const pivot = arr[final]
  let idx = start - 1

  for (let i = start; i < final; i++) {
    if (arr[i] <= pivot) {
      idx += 1
      let tmp = arr[i]
      arr[i] = arr[idx]
      arr[idx] = tmp
    }
  }

  idx += 1
  arr[final] = arr[idx]
  arr[idx] = pivot
  
  return idx
}

export function quick_sort1(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}


function qs2(arr: number[], start: number, final: number) {
  const middle = Math.floor(start + (final - start) / 2)
  const pivot = arr[middle]

  let i = start
  let j = final

  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1 
    }

    while (arr[j] > pivot) {
      j -= 1
    }

    if (i <= j) {
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp

      i += 1
      j -= 1
    }
  }

  if (start < j) {
    qs(arr, start, j)
  }

  if (final > i) {
    qs(arr, i, final)
  }
}


export function quick_sort2(arr: number[]): void {
  qs2(arr, 0, arr.length - 1)
}