function calculateTotal(number) {
  // Пиши код ниже этой строки
  let sum = number;
  for (let i = 1; i < number; i += 1) {
    sum += i;
  }
  return sum;
  // Пиши код выше этой строки
}

calculateTotal(1); // возвращает 1.
calculateTotal(3); // возвращает 6.
calculateTotal(7); // возвращает 28.
calculateTotal(18); // возвращает 171.
calculateTotal(24); // возвращает 300.

// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
