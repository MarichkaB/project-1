"use strict";

// if (4) {
//   console.log("Ok!");
// } else {
//   console.log("Error!");
// }

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Много");
// } else {
//   console.log("Ok!");
// }

// num === 50 ? console.log("Ok!") : console.log("Error");

// const num = 50;

// switch (num) {
//   case 49:
//     break;

//   case 100:
//     break;

//   case 50:
//     break;

//   default: //когда ни одно из условий не подтвердилось.
//     break;
// }

// Операторы и или и не

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log("Я сыт");
// }

// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries) {
//   console.log("Все сыты");
// } else {
//   console.log("Мы уходим!");
// }

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);

// console.log(25 || (null && !3));

// Задачи:

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).
// Когда цикл дойдет до числа 13 - остановить весь цикл

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
// Заполните массив цифрами от 5 до 10 включительно.
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// Место для первой задачи
// function firstTask() {
//   // Пишем решение вот тут
//   for (let i = 5; i < 11; i++) {
//     console.log(i);
//   }
// }

// Место для второй задачи
// function secondTask() {
//   // Пишем решение вот тут
//   for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//       break;
//     }
//     console.log(i);
//   }
// }

// Место для третьей задачи
// function thirdTask() {
//   // Пишем решение вот тут
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// // Место для четвертой задачи

// function fourthTask() {
//   // Пишем решение вот тут
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }

// Место для пятой задачи

// function fifthTask() {
//   const arrayOfNumbers = [];

//   // Пишем решение вот тут

//   for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }

//   console.log(arrayOfNumbers);

//   // Не трогаем
//   return arrayOfNumbers;
// }

// Задачи:

// Заполните новый массив (result) числами из старого (arr).
// Количество элементов в массиве можно получить как arr.length,
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// Измените данный массив так, чтобы все числа были увеличены в 2 раза,
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// Место для первой задачи
// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

// Пишем решение вот тут
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }
//   console.log(result);

//   return result;
// }

// Место для второй задачи
// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];

// Пишем решение вот тут
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === "string") {
//       data[i] = `${data[i]} - done`;
//     }
//   }

//   return data;
// }

// Место для третьей задачи
// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }
//   console.log(result);
//   return result;
// }

// Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n,
// который тоже учитывается в тестах.В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

// const lines = 5;
// let result = "";
// Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Ошибка");
}
