function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}

checkFruit('слива'); // возвращает true.
checkFruit('мандарин'); // возвращает false.
checkFruit('груша'); // возвращает true.
checkFruit('Груша'); // возвращает false.
checkFruit('яблоко'); // возвращает true.

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
