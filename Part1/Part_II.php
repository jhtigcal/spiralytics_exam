<?php
  function camelCase($input_string) {
    // Convert a copy of the input string to lower case
    $lower_input_string = strtolower($input_string);

    // Where we store the number of words
    // There is at least 1 word for every variable
    $num = 1;

    for ($i = 0; $i < strlen($input_string); $i++) {
      // In the camel case, every word starts with a capital letter
      // Since we converted the input string to lower case
      // there are characters that would not match in case
      // For each that don't, each character is the start of a new word

      if($lower_input_string[$i] != $input_string[$i]) {
        // Increment num if the cases of the two characters do not match
        $num++;
      }
    }

    return $num;
  }
?>