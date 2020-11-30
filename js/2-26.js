function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const number of order) {
    total += number;
  }

  // Пиши код выше этой строки
  return total;
}

calculateTotalPrice([12, 85, 37, 4]); // возвращает 138.
calculateTotalPrice([164, 48, 291]); // возвращает 503.
calculateTotalPrice([412, 371, 94, 63, 176]); // возвращает 1116.
calculateTotalPrice([]); // возвращает 0.

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
