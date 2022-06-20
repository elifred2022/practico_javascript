// FUNCIONES "HELPERS O UTILS"
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularmediaaritmetica (lista) {
    const sumalista = lista.reduce(
     function (valoracumuldo = 0, nuevoelemento) {
         return valoracumuldo + nuevoelemento;
     }
 );

 const promediolista = sumalista / lista.length;
 return promediolista;    
}

// CALCULADORA DE MEDIANA

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularmediaaritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// MEDIANA DEL TOP 10 %
const splicestart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - splicestart;

const salariosColTop10 = salariosColSorted.splice(
    splicestart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);