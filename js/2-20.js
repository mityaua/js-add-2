function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let i = total; i < order.length; i += 1) {
    total = total + order[i];
  }
  return total;
  // Пиши код выше этой строки
}

calculateTotalPrice([12, 85, 37, 4]); // возвращает 138.
calculateTotalPrice([164, 48, 291]); // возвращает 503.
calculateTotalPrice([412, 371, 94, 63, 176]); // возвращает 1116.

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
