// run nodemon main.js in the terminal

// курс введение в программирование https://ru.hexlet.io/courses/introduction_to_programming
// lesson 9 recursion
/*
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.
 */
/*
const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  }

  if (begin === end) {
    return begin;
  }

  return begin + sequenceSum(begin + 1, end);
};

const sum = sequenceSum(1, 3);
 */

// lesson 10 итеративный процесс
/*
Реализуйте тело функции smallestDivisor, используя итеративный процесс. Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.

Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.

Идея алгоритма:

Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
 */
/*
const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }

  const iter = (counter, acc) => {
    if (counter % acc === 0) {
      return acc;
    }

    return iter(counter, acc + 1);
  };

  return iter(num, 2);
};

const divisor = smallestDivisor(15);
// console.log(divisor);
 */

/*
// teacher's variant
const smallestDivisor1 = (num) => {
  const iter = (acc) => {
    // We use 'num / 2' in the condition below, and not 'num'.
    // This is a simple optimization: a number cannot be divided
    // by a number larger than its half.
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }

    return iter(acc + 1);
  };

  return iter(2);
};

const divisor1 = smallestDivisor1(15);
 */

// lesson 11 Переменные, декларативное и императивное программирование
/*
Напишите функцию smallestDivisor. Она должна находить наименьший целый делитель числа. Поведение у функции такое же, как в предыдущем уроке, но реализация (код функции) должна быть другой. На этот раз реализуйте императивный итеративный процесс, что означает:

не используйте рекурсию
используйте переменные
используйте цикл while
Например, наименьший делитель числа 15 это 3.

Замечание: Если переданное в smallestDivisor число меньше единицы, возвращайте NaN.

Идея алгоритма:

Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
Подсказка
Вспомните про оператор % (modulus or остаток от деления) из урока 4. Он вычисляет остаток от деления одного операнда на другой. Например, 11 % 5 это 1, а 10 % 2 это 0.

Так что если x % y это 0, то y делит x без остатка.


Сделал один в один как у тичера :)
 */
/*
const smallestDivisor = (n) => {
  if (n < 1) {
    return NaN;
  }

  if (n === 1) {
    return n;
  }

  let i = 2;

  while (n % i !== 0) {
    i += 1;
  }

  return i;
};

console.log(smallestDivisor(1));
 */

// get summ from beginning to the end - recursion my exercise
/*
const getSumm = (beginning, end) => {
    if (beginning === end) {
        return beginning;
    }

    return beginning + getSumm(beginning + 1, end);
}

console.log(getSumm(1, 5));
 */

// lesson 12 reverse string

/*
const reverse = (str) => {
  let i = 0;
  let res = '';

  while (i < str.length) {
    res = str[i] + res;
    i += 1;
  }

  return res;
};
 */
// console.log(reverse('Hello!'));

// lesson 13

/*
Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.

Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
 */
/*
const isPrime = (n) => {
  if (n === 1 || n === 0 || n < 0) {
    return false;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(7));

 */

// Teacher's solution
/*
const isPrime1 = (number) => {
    if (number < 2) {
        return false;
    }
   //Мы используем «number/ 2» в условии ниже, а не «number».
   //Это простая оптимизация: число не может быть разделено без остатка на число больше его половины.
    for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime1(6));
 */

// lesson 14
/*
Проверьте с помощью утверждений (asserts) правильность работы функции factorial, которая вычисляет факториал переданного числа. Факториал числа x — это произведение всех чисел от 1 до x. Например, факториал числа 4 это 1 * 2 * 3 * 4 = 24.

Подробнее о факториале можно почитать в википедии.

Саму функцию в этой практике реализовывать не надо, она уже готова. Вам же сейчас надо дописать тесты для проверки её работы.
 */

// lesson 16
/*
const square = (num) => num * num;

const sumOfSquares = (num1, num2) => square(num1) + square(num2);

const squareSumOfSquares = (num1, num2) => square(sumOfSquares(num1, num2));
 */

// lesson 17 Замыкания
/*
Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.

Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.
Примеры:

greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
isEqual('liSp', 'lisP'); // true

Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

Если в первой строке больше заглавных символов, то возвращается 1.
Если во второй строке больше заглавных символов, то возвращается -1.
Иначе возвращается 0.
 */

/*
const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();

const bigLettersCount = (str) => {
  let i = 0;
  let bigLettersCounter = 0;

  while (i < length(str)) {
    if (str[i] === toUpperCase(str[i])) {
      bigLettersCounter++;
    }
    i++;
  }

  return bigLettersCounter;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  if (firstCount > secondCount) return 1;
  if (firstCount < secondCount) return -1;

  return 0;
};

export const greaterThan = (first, second) => (
    compare(first, second) === 1);

export const lessThan = (first, second) => (
    compare(first, second) === -1);

export const isEqual = (first, second) => (
    compare(first, second) === 0);
 */

// lesson 18 Типизация
/*
Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2
 */
/*
const addDigits = (str) => {
  if (str < 10) {
    return str;
  }

  let res = 0;
  str = String(str);

  for (let i = 0; i < str.length; i += 1) {
    res += Number(str[i]);
  }

  res = String(res);

  if (res.length > 1) {
    return addDigits(res);
  }

  return Number(res);
};

console.log(addDigits(38));
 */

// Teacher's solution
/*
const sum = (num) => {
    let result = 0;
    const str = String(num);
    for (let i = 0; i < str.length; i += 1) {
        result = result + Number(str[i]);
    }

    return result;
}

const addDigits = (num) => {
    let res = num;
    while (res >= 10) {
        res = sum(res);
    }

    return res;
}

console.log(addDigits(38));
 */

// lesson 19
/*
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
 */
/*
const firstLetterToUpperCase = (str) => {
  str = String(str);
  let res = '';

  for (let i = 0; i < str.length; i += 1) {
    if (i === 0 || str[i - 1] === ' ') {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
  }

  return res;
};

console.log(firstLetterToUpperCase('many different words inside sentence'));
 */

// console.log(0.3 - 0.2);
