a = prompt('Please enter any number.')
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
