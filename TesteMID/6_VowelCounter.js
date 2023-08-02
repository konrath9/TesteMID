function vowels(words) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let c of words) {
    if (vowels.includes(c)) {
      count++;
    }
  }

  return count;
}

function program() {
  const sentence = prompt("Enter a sentence:");
  
  if (sentence === null || sentence.trim() === '') {
    alert("Please enter a valid sentence.");
    return;
  }

  const count = vowels(sentence);
  alert(`Has ${count} vowel(s).`);
}

program();
