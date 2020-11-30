function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}

filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5].
filterArray([1, 2, 3, 4, 5], 4); // возвращает [5].
filterArray([1, 2, 3, 4, 5], 5); // возвращает [].
filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76].
filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76].

// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
