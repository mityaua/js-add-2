function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  // Пиши код выше этой строки
  return numbers;
}

createArrayOfNumbers(1, 3); // возвращает [1, 2, 3].
createArrayOfNumbers(14, 17); // возвращает [14, 15, 16, 17].
createArrayOfNumbers(29, 34); // возвращает [29, 30, 31, 32, 33, 34].

// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.
