//Напишите программу, которая работала бы следующим образом: в prompt вводится значение.
//С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
//Если это число, то вывести в консоль чётное оно или нечётное.
//Если передано не число, выведите: «Упс, кажется, вы ошиблись».
//*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.
let a = prompt('Please enter any number.');
b = +a;
if (typeof b !== 'number') {
    console.log('Упс, кажется, вы ошиблись. Это не число!')
} else if (isNaN(b)) {
    console.log('Упс, кажется, вы ошиблись!')
} else if (b % 2 == 0) {
    console.log('Even number')
} else {
    console.log('Odd number')
}
