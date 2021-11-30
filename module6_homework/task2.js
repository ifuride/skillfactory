//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
//и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.
//Обратите внимание на числа 0 и 1.
//Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function primeNumber(n) {
    if (n < 2) {
        return 'Число должно быть больше 1';
    }
    if (n > 1000) {
        return 'Данные неверны';
    }
    if (!Number.isInteger(n)) {
        return 'Дробное число';
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return 'Составное число';
        }
    }
    return 'Простое число';
}
console.log(primeNumber(-1));
console.log(primeNumber(1));
console.log(primeNumber(2));
console.log(primeNumber(15));
console.log(primeNumber(5.5));
console.log(primeNumber(23));



