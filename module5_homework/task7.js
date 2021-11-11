//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
let arr = [-2,3,undefined,null,0,7.7];
let evenNumberQty = 0;
let oddNumberQty = 0;
let zeroNumberQty = 0;
let restNumberQty = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        if (arr[i] === 0) {
            zeroNumberQty = zeroNumberQty + 1
        } else {
            if (arr[i] % 2 == 0) {
                evenNumberQty = evenNumberQty + 1
            } else {
                oddNumberQty = oddNumberQty + 1
            }
        }
    } else {
        restNumberQty = restNumberQty + 1
    }
}
console.log(`Quantity of even numbers: ${evenNumberQty}`);
console.log(`Quantity of odd numbers: ${oddNumberQty}`);
console.log(`Quantity of 0: ${zeroNumberQty}`);
console.log(`Quantity of the rest elements: ${restNumberQty}`);
