// Create a function that returns an array with words inside a text.
function extractWords(text) {
    const words = text.split(/\W+/).filter(word => word.length > 0); 
    return words;
  }
  
  const text = "Hello, how are you doing today?";
  const wordsArray = extractWords(text);
  console.log(wordsArray);  
  