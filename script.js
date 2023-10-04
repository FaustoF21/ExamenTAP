//Ejercicio 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const numerosMayores = arr.filter(function (num){
return num >=5;
});

numerosMayores.forEach(function(n){
console.log(n);
});

//Ejercicio 2

let frutas = ['naranja', 'platano', 'manzana', 'fresa', 'kiwi'];

const newFrutas = frutas.slice(2, 4)

console.log(newFrutas);

//Ejercicio 3
let arreInicial = [2, 4, 6, 8, 10, 12];

let arrMasDiez = narr.map(function(element, index){
    return (index + '=' + (element + 10));
});

console.log(arrMasDiez);

//Ejercicio 4
let arrUno = ['H', 'I', 'J'];
let arrDos = ['K', 'L', 'M'];

let arrJuntos = arrUno.concat(arrDos);
console.log(arrJuntos);

//Ejercicio 5
let paises = ['Mexico', 'USA', 'Francia'];

const cierto = paises.includes('Francia');

if(cierto == true){
    console.log('Francia está incluido')
}else{
    console.log('Francia NO está incluido')
}