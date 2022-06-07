// este es el codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();
// este es el codigo del triangulo
console.group("triangulos");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
console.log("los lados del triangulo miden: " 
+ ladotriangulo1 
+ "cm " 
+ ladotriangulo2 
+ "cm " 
+ basetriangulo 
+ "cm ");

const alturaTriangulo = 5.5;
console.log("La altua del tiangulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);

const areaTriangulo = (basetriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();

// este es el codigo del circulo
console.group("circulo");
const radio = 4;
const diametro = radio * 2;
const PI = Math.PI; // para colocar PI se puede hacer de 2 maneras manual (3.14) o con math.PI
const perimetroCirculo = diametro * PI;
const areaCirculo = (radio * radio);

console.log("El radio del circulo es: " + radio + "cm");
console.log("El diametro del circulo es: " + diametro+ "cm");
console.log("Pi es: " + PI);
console.log("El perimetro del Circulo es: " + perimetroCirculo+ "cm");
console.log("El area del circulo es: " + areaCirculo+ "cm");

console.groupEnd();


