function staircase(n) {
  let outputString = '';
  for (let i = 0; i < n; i++) {
    let outputRow = '';

    for (let j = 0; j <= i; j++) {
      outputRow += '#';
    }
    outputString += outputRow + '\n';
  }

  return outputString;
}
