function isPalindrome( string ) {
    const length = string.length;

    for(let i = 0; i < length / 2; i++) {
        if(string[i] !== string[length - 1 - i]) {
            return "Is not a palindrome";
        }
    }
    return "It's a palindrome";
}

function checkPalindrome() {
  const word = prompt("Enter a word:");
  
  if (word === null || word.trim() === '') {
    alert("Please enter a valid word.");
    return;
  }

  alert(isPalindrome(word));
}

checkPalindrome();