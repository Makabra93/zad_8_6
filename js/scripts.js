// scripts.js

var a = prompt('podaj wartość "a": '),
    b = prompt('podaj wartość "b": '),
    value = (a * b) - (2 * a * b) + (b * b);
alert('Wynik działania: ' + value);
console.log('Wynik działania: ' + value);

if (value > 0) {
    alert('Wynik jest dodatni!');
    console.log('Wynik jest dodatni!')
} else if (value < 0) {
    alert('Wynik jest ujemny!');
    console.log('Wynik jest ujemny')    
}

switch (value) {
    case 0:
        alert('Wynik jest równy 0');
        console.log('Wynik jest równy 0')
        break;

    default:
        console.log('Wynik jest różny od zera')
        break;
}
