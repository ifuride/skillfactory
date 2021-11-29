//В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

function numberCounter(arr) {
    let numberOfZeros = 0;
    let numberOfEvenNums = 0;
    let numberOfOddNums = 0;
    let numberOfOtherValues = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            if (arr[i] === 0) {
                numberOfZeros = numberOfZeros + 1;
            } else {
                if (arr[i] % 2 === 0) {
                    numberOfEvenNums = numberOfEvenNums + 1;
                } else {
                    numberOfOddNums = numberOfOddNums + 1
                }
            }
        } else {
            numberOfOtherValues = numberOfOtherValues + 1;
        }
    }
    return [numberOfZeros, numberOfEvenNums, numberOfOddNums, numberOfOtherValues];
}
let result = numberCounter([-2 ,4 ,undefined ,null ,0 ,7 , 0]);
console.log(`Количество нулей ${result[0]}`);
console.log(`Количество четных чисел ${result[1]}`);
console.log(`Количество нечетных чисел ${result[2]}`);
console.log(`Количество остальных значений ${result[3]}`);
