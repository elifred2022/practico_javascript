// media
//const lista1 = [
  // 100,
  // 200,
  // 300,
  // 500,];

//let sumalista1 = 0;
//for (let i = 0; i < lista1.length; i++) {
  //  sumalista1 = sumalista1 + lista1[i];}



//function calcularmediaaritmetica (lista) {
  //  let sumalista = 0;
   // for (let i = 0; i < lista.length; i++) {
     //   sumalista = sumalista + lista[i]}

        //const promediolista = sumalista / lista.length;

        //return promediolista;}

        //otra manera de promedio

    
    function calcularmediaaritmetica (lista) {
       const sumalista = lista.reduce(
        function (valoracumuldo = 0, nuevoelemento) {
            return valoracumuldo + nuevoelemento;
        }
    );

    const promediolista = sumalista / lista.length;
    return promediolista;    
}