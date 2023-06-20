function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is a palindrome
  let start = 0;
  let end = cleanedString.length - 1;

  while (start < end) {
    if (cleanedString[start] !== cleanedString[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

module.exports = palindrome;
