
// lesson 17. Рекурсивный процесс
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

console.log(sequenceSum(-5, 4));
 */

// lesson 18. Итеративный процесс
/*
Реализуйте и экспортируйте по умолчанию функцию smallestDivisor, используя итеративный процесс. Функция должна находить минимальный делитель переданного числа.

Для этого достаточно последовательно проверять делимость, начиная с двойки. Если делитель не найден, значит число простое и делителем является само число.

Доп. условия: число, передаваемое в функцию, больше нуля (т.е. соответсвующую проверку делать не надо); делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).
 */
/*
const smallestDivisor = (n) => {
  if (n === 1) {
    return 1;
  }

  const iter = (counter, acc) => {
    if (counter % acc === 0) {
      return acc;
    }

    return iter(counter, acc + 1);
  };

  return iter(n, 2);
};

// console.log(smallestDivisor(15));
 */

// teacher's solution
/*
const smallestDivisor1 = (num) => {
  const iter = (acc) => {
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

console.log(smallestDivisor1(15));
 */
// lesson 19 my solution the same as teacher's :)
/*
const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return 1;
  }

  let divisor = 2;
  while (num % divisor !== 0) {
    divisor += 1;
  }

  return divisor;
};

console.log(smallestDivisor(15));
 */

// lesson 20
/*
Наибольшим общим делителем (НОД) для двух целых чисел m и n называется наибольший из их общих делителей. Пример: для чисел 70 и 105 наибольший общий делитель равен 35. Наибольший общий делитель существует и однозначно определён, если хотя бы одно из чисел m или n не равно нулю.
 */
const getBiggestDivisor = (n1, n2) => {
  let biggestNum;
  let smallestNum;
  let i;

  if (n2 === 0) return n1;
  if (n1 === 0) return n2;

  if (n1 < n2) {
    i = n1;
    biggestNum = n2;
    smallestNum = n1;
  } else {
    i = n2;
    biggestNum = n1;
    smallestNum = n2;
  }

  while (i >= 1) {
    if (biggestNum % i === 0) {
      if (smallestNum % i === 0) {
        return i;
      }
    }

    i -= 1;
  }
};

// console.log(getBiggestDivisor(18, 15));

// teacher's solution
/*
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

console.log(gcd(6, 3));
 */

// lesson 21
/*
Простое число — натуральное (целое положительное) число (больше единицы), имеющее ровно два различных натуральных делителя — единицу и самого себя.

Реализуйте и экспортируйте по умолчанию функцию isPrime определяющую, является ли число простым.
 */
/*
const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  let i = 2;
  while (i <= n / 2) {
    if (n % i === 0) {
      return false;
    }

    i += 1;
  }

  return true;
}

console.log(isPrime(7));
 */

// lesson 22.
/*
Реализуйте и экспортируйте функцию по умолчанию, которая считает сумму всех натуральных чисел, меньших чем n (первый аргумент), которые делятся на числа a или b (второй и третий аргументы) без остатка. n - может быть только натуральным числом.

// 1 % 2 || 1 % 4
// 2 % 2 || 2 % 4
// ...
// 9 % 2 || 9 % 4
sum(10, 2, 4); // 20
 */
/*
const sum = (n, a, b) => {
  let res = 0;

  for (let i = 1; i < n; i += 1) {
    if (i % a === 0 || i % b === 0) {
      res += i;
    }
  }

  return res;
};

console.log(sum(10, 2, 4));
 */

// lesson 23
// Реализуйте и экспортируйте по умолчанию функцию reverse, которая переворачивает строку.
/*
const reverse = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    res = str[i] + res;
  }

  return res;
};
console.log(reverse('1hello!'));
 */

// lesson 25
/*
Функция calc представляет из себя простейший калькулятор, которому передается бинарная операция, а также два числа, а на выходе получается результат применения операции к этим числам.

Реализуйте и экспортируйте по умолчанию функцию calc, аргументами которой являются:

Операция в виде строки. Поддерживаются +, -, /,*.
Первый операнд.
Второй операнд.
Если передается операция, которая не поддерживается, то функция должна вернуть NaN.

Примеры:

calc('+', 3, 10); // 13
calc('-', -8, 6); // -14
calc('$', 0, 9); // NaN
 */
/*
const calc = (action, a, b) => {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;

    default:
      return NaN;
  }
};

console.log(calc('+', 10, 5));
 */


// lesson 26

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
  let res = 0;

  for (let i = 0; i < length(str); i += 1) {
    if (str[i] === toUpperCase(str[i])) {
      res += 1;
    }
  }

  return res;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  if (firstCount > secondCount) return 1;
  if (firstCount < secondCount) return -1;
  if (firstCount === secondCount) return 0;
};

const greaterThan = (first, second) => (
  compare(first, second) === 1);

const lessThan = (first, second) => (
  compare(first, second) === -1);

const isEqual = (first, second) => (
  compare(first, second) === 0);
 */


// lesson 27

/*
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!
 */
/*
const getUpperLetters = (str) => {
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

console.log(getUpperLetters('  hello,   world!'));
 */

// lesson 28
/*
Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2

Пример:

addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8
 */

/*
const addDigits = (num) => {

  const str = String(num);
  let res = 0;

  for (let i = 0; i < str.length; i += 1) {
    res += Number(str[i]);
  }

  if (res >= 10) {
    return addDigits(res);
  }

  return res;
}

 */

// teacher's solution

/*
Размышления:
Разберем ситуацию когда вызываем функцию addDigits(38) с аргументом 38.

Первая итерация цикла while - 38 >= 10 - да, делаем
result = sumDigits(result);
То есть result = 11; А дальше цикл продолжается (перемещается в условие цикла опять), 11 >= 10 да -
result = 2; А дальше цикл опять продолжается(перемещается в условие). 2 >= 10 - нет. Только счас цикл закончился.
То есть если исполнилось условие цикла, то как минимум еще одна проверка(итерация) должна быть - этого я недопонял сначала.
 */
/*
const sumOfDigits = (num) => {
  const str = String(num);
  let res = 0;

  for (let i = 0; i < str.length; i += 1) {
    res += Number(str[i]);
  }

  return res;
}

const addDigits = (num) => {
  let result = num;

  while (result >= 10) {
    result = sumOfDigits(result);
  }

  return result;
}

console.log(addDigits(38));
 */


