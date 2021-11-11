//Создайте произвольный массив Map.
//Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.
let cities = new Map([
    ['New York', 'USA'],
    ['Paris', 'France'],
    ['Stockholm', 'Sweden'],
    ['Phoenix', 'USA']
    ]
);
for (let [key, value] of cities) {
    console.log(`Ключ - ${key}, значение ${value}`);}
