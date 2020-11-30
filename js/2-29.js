function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  const arr = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return console.log(arr);
  // Пиши код выше этой строки
}

getEvenNumbers(2, 5); // возвращает [2, 4].
getEvenNumbers(3, 11); // возвращает [4, 6, 8, 10].
getEvenNumbers(6, 12); // возвращает [6, 8, 10, 12].
getEvenNumbers(8, 8); // возвращает [8].
getEvenNumbers(7, 7); // возвращает [].

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка.
