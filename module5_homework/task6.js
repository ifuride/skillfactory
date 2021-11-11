//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
//Проверить, все ли элементы в массиве одинаковые.
let arr = [1,1,1,1,1];
let isAllEqual = true;
for (let i = 0; i < arr.length; i++) {
    //console.log(i);
    if (arr[0] !== arr[i]) {
        isAllEqual = false;
        break;
    }
}
console.log(isAllEqual);
