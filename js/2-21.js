function findLongestWord(string) {
  // Пиши код ниже этой строки
  let longestWord = '';
  const arr = string.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
  // Пиши код выше этой строки
}

findLongestWord('The quick brown fox  jumped over the lazy dog'); // возвращает jumped.
findLongestWord('Google do a roll'); // возвращает Google.
findLongestWord('May the force be with you'); // возвращает force.

// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
