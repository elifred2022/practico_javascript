function calcularmediaaritmetica (lista) {
    const sumalista = lista.reduce(
     function (valoracumuldo = 0, nuevoelemento) {
         return valoracumuldo + nuevoelemento;
     }
 );

 const promediolista = sumalista / lista.length;
 return promediolista;    
}

const lista1 = [
    100,
    200,
    500,
    400000000,
];

const mitadLista1 = parseInt(lista1.length / 2); // la funcion parseint convierte decimales en enteros

// con % saca el modulo de division

function esPar(numerito) {
    if (numerito % 2===0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularmediaaritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}