function isPangram(inputString) {
  // Convert the given string to lower case for easier management
  const lowerInputString = inputString.toLowerCase();

  // Store all the letters in the string in an array
  const alphabet = [];

  for (let i = 0; i < lowerInputString.length; i++) {
    const char = lowerInputString.charAt(i);

    // Check if the character is a Latin alphabet
    if (!(char >= 'a' && char <= 'z')) continue;

    // Insert the letter to the array if it is not already there
    !alphabet.includes(char) && alphabet.push(char);
  }

  // The number of letters in the English alphabet is 26
  // The length of the array should also be 26
  return alphabet.length === 26 ? 'pangram' : 'not a pangram';
}
