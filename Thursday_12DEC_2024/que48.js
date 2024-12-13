// Create a function to return the longest word in a string
function findlengthlongestWord(str) {

    const words = str.split(' ');
    let longest = '';
  
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
  
    return longest;
  }
  
  console.log(findlengthlongestWord("I love programming with JavaScript")); 
  