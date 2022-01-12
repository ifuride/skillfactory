//Написать функцию, которая принимает в качестве аргументов строку и объект,
//а затем проверяет есть ли у переданного объекта свойство с данным именем.
//Функция должна возвращать true или false.
function checkPropertyInObject(str, obj) {
    for (let key in obj) {
        if (key === str) {
            return true;
        }
    }
    return false;
}

let property_name = 'name';

let person = {
    name: 'Jack',
    surname: 'White'
};

let result1 = checkPropertyInObject(property_name, person);
console.log(result1);

let worker = Object.create(person);
worker.profession = 'plitochnik';

let result2 = checkPropertyInObject(property_name, worker);
console.log(result2);

let result3 = checkPropertyInObject('profession', worker);
console.log(result3);
