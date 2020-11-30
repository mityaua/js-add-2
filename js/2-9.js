function getExtremeElements(array) {
  // Пиши код ниже этой строки
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  return [firstElement, lastElement];

  // Пиши код выше этой строки
}

getExtremeElements([1, 2, 3, 4, 5]); // возвращает [1, 5].
getExtremeElements(['Земля', 'Марс', 'Венера']); // возвращает ['Земля', 'Венера'].
getExtremeElements(['яблоко', 'персик', 'груша', 'банан']); // возвращает ['яблоко', 'банан'].

// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
