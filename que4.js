const text = "My name is Tanya. My hobby is dancing.";

// Split, normalize to lowercase, and remove punctuation
const words = text.toLowerCase().split(/\W+/);

// Calculate word frequency using reduce
const wordFrequency = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordFrequency);
