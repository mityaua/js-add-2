function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const arr = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      arr.push(numbers[i]);
    }
  }
  return arr;
  // Пиши код выше этой строки
}

filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5].
filterArray([1, 2, 3, 4, 5], 4); // возвращает [5].
filterArray([1, 2, 3, 4, 5], 5); // возвращает [].
filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76].
filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76].

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
