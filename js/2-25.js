// Финальный вариант решения

function getCommonElements(array1, array2) {
  let arr = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      arr.push(array1[i]);
    }
  }
  return arr;
}

// Исходный вариант решения

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const sum = array1.concat(array2);
//   let arr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array1.includes(sum[i]) && array2.includes(sum[i])) {
//       arr.push(sum[i]);
//     }
//   }
//   return console.log(arr);
//   // Пиши код выше этой строки
// }

getCommonElements([1, 2, 3], [2, 4]); // возвращает [2].
getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2].
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3].
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40].
getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает [].

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
