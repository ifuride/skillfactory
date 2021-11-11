//Дан произвольный массив.
//Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
let arr=[1,5,10];
console.log(arr.length);
arr.forEach(function(item, index, array) {
    console.log(item);
});
