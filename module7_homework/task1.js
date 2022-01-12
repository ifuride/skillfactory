//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
//и значения только собственных свойств. Данная функция не должна возвращать значение.
function logOfAllKeysAndProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

const student = {
    gender: 'male',
    name: 'Bob',
    surname: 'Test',
    age: 18
};

logOfAllKeysAndProperties(student);
console.log("");
