function _binary_search(
  haystack: number[],
  needle: number,
  start: number,
  end: number
): boolean {
  if (start >= end) {
    return false
  }

  const middle = Math.floor(start + (end - start) / 2)
  const pivot = haystack[middle]

  if (needle === pivot) {
    return true
  }

  if (pivot > needle) {
    return _binary_search(haystack, needle, start, middle)
  }
  
  return _binary_search(haystack, needle, middle + 1, end)
}

export function binary_search_recursive(haystack: number[], needle: number) {
  return _binary_search(haystack, needle, 0, haystack.length)
}