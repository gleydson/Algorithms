export function binary_search_interative(haystack: number[], needle: number): boolean {
  let start = 0
  let end = haystack.length

  do {
    const middle = Math.floor(start + (end - start) / 2)
    const pivot = haystack[middle]
    
    if (pivot === needle) {
      return true
    } else if (pivot > needle) {
      end = middle
    } else {
      start = middle + 1
    }
  } while (start < end)

  return false
}