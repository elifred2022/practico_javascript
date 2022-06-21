// este es el codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden" + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("el area del cuadrado es: " + areaCuadrado + "cm2");

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// este es el codigo del triangulo
console.group("triangulos");
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;
//console.log("los lados del triangulo miden: " 
//+ ladotriangulo1 
//+ "cm " 
//+ ladotriangulo2 
//+ "cm " 
//+ basetriangulo 
//+ "cm ");

//function perimetroTriangulo(lado1, lado2, base) {
//    return lado1 + lado2 + base;}

//function areaTriangulo(altura, base) {
  //  return (base * altura)/2;}

//const alturaTriangulo = 5.5;
//console.log("La altua del tiangulo es de: " + alturaTriangulo);

//const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
//console.log("El perimetro del triangulo es: " + perimetroTriangulo);

//const areaTriangulo = (basetriangulo * alturaTriangulo)/2;
//console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();

// este es el codigo del circulo
console.group("circulo");

//function diametroCirulo(radio){
  //  return radio * 2;}

//circunferencia
//function perimetroCirculo(radio){
  //  const diametro = diametroCirulo(radio);
    //return diametro * PI;}

//area circulo
//function areaCirculo(radio){
    //return (radio * radio) * PI;}

//const radio = 4;
//const diametro = radio * 2;
const PI = Math.PI; // para colocar PI se puede hacer de 2 maneras manual (3.14) o con math.PI
//const perimetroCirculo = diametro * PI;
//const areaCirculo = (radio * radio);

//console.log("El radio del circulo es: " + radio + "cm");
//console.log("El diametro del circulo es: " + diametro+ "cm");
//console.log("Pi es: " + PI);
//console.log("El perimetro del Circulo es: " + perimetroCirculo+ "cm");
//console.log("El area del circulo es: " + areaCirculo+ "cm");

console.groupEnd();

// funciones para no usar variables determinadas

//progamando los botones interactuar con el html
// cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro + "Cm"); }

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area + "Cm");}

//triangulo

function perimetroTriangulo(value1, value2, value3) {
    return value1 + value2 + value3;
}

function areaTriangulo(value4, value3) {
    return (value4 * value3)/2;}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = parseInt(input3.value);
   
    const perimetroTriangulo2 = perimetroTriangulo(value1, value2, value3);
    
    alert(perimetroTriangulo2); }


function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = parseInt(input3.value);
    const input4 = document.getElementById("InputTrianguloAltura");
    const value4 = parseInt(input4.value);
    
    const areaTriangulo2 = areaTriangulo(value4, value3);
        
    alert(areaTriangulo2); }

// circulo
// diametro
function diametroCirulo(value5){
    return value5 * 2;}
    // D = r * 2

    
function CalcularDiametroCirculo() {
    const input5 = document.getElementById("Radio");
    const value5 = parseInt(input5.value);
        
    const DiametroCirculo2 = diametroCirulo(value5);
        
    alert(DiametroCirculo2); }

//perimetro
function perimetroCirculo(value5){
    return value5 * 2 * PI;}
            // P = r * 2 * pi


function CalcularPerimetroCirculo() {
    const input5 = document.getElementById("Radio");
    const value5 = parseInt(input5.value);


    const perimetroCirculo2 = perimetroCirculo(value5);
                
    alert(perimetroCirculo2); }

// Area del circulo
function areaCirculo(value5){
    return (value5 * value5) * PI;}
            // A = (r * r) * PI

function CalcularAreaCirculo() {
    const input5 = document.getElementById("Radio");
    const value5 = parseInt(input5.value);


    const areaCirculo2 = areaCirculo(value5);
                
    alert(areaCirculo2); }

//Reto triangulo isoseles


//      ojo lo deje hasta aca por que n puede hacer el reto seguir investigando


function calcularAlturaTriangulo() {

    const inputlado1 = document.getElementById("inputlado1");
    
    const valuelado1 = Number(inputlado1.value);
    
    const inputlado2 = document.getElementById("inputlado2");
    
    const valuelado2 = Number(inputlado2.value);
    
    const inputbase = document.getElementById("inputbase");
    
    const valuebase = Number(inputbase.value);
        
        if (valuelado1 === valuelado2 && valuelado1 != valuebase) {
            alert("El triangulo es isósceles tiene un perímetro de ")} //+ perimetro + " una altura de " + altura + " y un area de " + area);}
          
            else{  alert("El triangulo no es isscele")} }
    
    //const altura = alturaTrianguloIsosceles(valuelado1, valuelado2, valuebase);
    
    //const perimetro = perimetroTriangulo(valuelado1, valuelado2, valuebase);
    
    //const area = areaTriangulo(altura, valuebase);
    
    //alert("El triangulo es isósceles tiene un perímetro de ")} //+ perimetro + " una altura de " + altura + " y un area de " + area);}
          
        //  else{
    
    //perimetro = perimetroTriangulo(valuelado1, valuelado2, valuebase);
    
    //const area = areaTriangulo(altura, valuebase);
    
   // alert("El triangulo no es isscele")} //tiene un perímetro de " + perimetro + " y un area de " + area);} }


