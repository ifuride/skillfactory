//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let stringToReverse = 'Hello!';
let reversedString = stringToReverse.split('').reverse().join('');
console.log(reversedString);
