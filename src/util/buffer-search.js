/**
 * search :: (List Byte -> List Byte) -> List Byte
 */
export default (needle, haystack) => {
  const results = [];
  const table = [-1, 0];
  const needleLength = needle.length;
  const haystackLength = haystack.length;
  const needleEnd = needleLength - 1;
  let haystackIndex = 0;
  let index = 0;
  let position = 2;
  let needleIndex = 0;

  // Build a table for the search algorithm.
  // This takes O(needleLength) steps.
  while (position < needleLength) {
    if (needle[position - 1] === needle[needleIndex]) {
      needleIndex = needleIndex + 1;
      table[position] = needleIndex;
      position = position + 1;
    } else if (needleIndex > 0) {
      needleIndex = table[needleIndex];
    } else {
      table[position] = 0;
      position = position + 1;
    }
  }

  // Scan the haystack.
  // This takes O(haystackLength) steps.
  while (haystackIndex + index < haystackLength) {
    if (needle[index] === haystack[haystackIndex + index]) {
      if (index === needleEnd) {
        results.push(haystackIndex);
      }

      index++;
    } else {
      if (table[index] > -1) {
        haystackIndex = haystackIndex + index - table[index];
        index = table[index];
      } else {
        index = 0;
        haystackIndex++;
      }
    }
  }

  return results;
};
