/** Sort array of strings in-place, case-insensitively. Returns array. */

function caseInsensitiveSort(arr: string[]): string[] {
  const sorted = arr.sort((a: string, b: string): number => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });
  console.log("sorted", sorted);
  return sorted;
}

export { caseInsensitiveSort };