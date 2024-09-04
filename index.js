// Условное ветвление
// Задача: Проверка возраста
let age = 20;
if (age >= 18) {
  console.log('Вы совершеннолетний');
} else {
  console.log('Вы несовершеннолетний');
}

// Задача: Проверка числа на четность
let number = 4;
if (number % 2 === 0) {
  console.log('Число четное');
} else {
  console.log('Число нечетное');
}

// Задача: Оценка по числовой шкале
let score = 25;
if (score <= 19) {
  console.log('неудовлетворительно');
} else if (score >= 20 && score <= 39) {
  console.log('удовлетворительно');
} else if (score >= 40 && score <= 59) {
  console.log('хорошо');
} else {
  console.log('отлично');
}

// Конструкция switch
// Задача: День недели
let day = 3;
switch (day) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда, мои чуваки!');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресеньеота');
    break;
  default:
    console.log('не существует');
}

// Задача: Оценка по числовой шкале
let grade = 5;
switch (grade) {
  case 1:
    console.log('Плохо');
    break;
  case 2:
    console.log('Удовлетворительно');
    break;
  case 3:
    console.log('Хорошо');
    break;
  case 4:
    console.log('Очень хорошо');
    break;
  case 5:
    console.log('Отлично');
    break;
  default:
    console.log('Не существует');
}

// Задача: Приветствие по времени суток
let hour = 3;
switch (true) {
  case hour >= 6 && hour <= 11:
    console.log('Доброе утро!');
    break;
  case hour >= 12 && hour <= 17:
    console.log('Добрый день!');
    break;
  case hour >= 18 && hour <= 23:
    console.log('Добрый вечер!');
    break;
  case hour >= 0 && hour <= 5:
    console.log('Доброй ночи!');
    break;
  default:
    console.log('не существует');
}

// Циклы for
// Задача: Вывод чисел от 1 до 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Задача: Сумма чисел от 1 до 100
let sum = 0;
for (let i = 1; i < 100; i++) {
  sum += i;
}
console.log(sum);

// Задача: Вывод четных чисел от 2 до 20
for (let I = 2; I <= 20; I += 2) {
  console.log(I);
}

// Циклы while
// Задача: Вывод чисел от 1 до 10
let v = 0;
while (v <= 10) {
  console.log(v++);
}

// Задача: Сумма чисел от 1 до 50
let Sum = 0;
let q = 1;
while (q <= 50) {
  Sum += q;
  q++;
}
console.log(Sum);

// Задача: Вывод четных чисел от 2 до 20
let x = 2;
while (x <= 20) {
  console.log(x);
  x += 2;
}
