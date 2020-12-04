function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return (number = i);
    }
  }
  // Пиши код выше этой строки
}

// Старый вариант решения, до правки бага в боте
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let result;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       result = i;
//       break;
//     }
//   }
//   return result;
//   // Пиши код выше этой строки
// }
