// formula: P * (100 - D) / 100
//const precio = 120;
//const descuento = 18;




//console.log({
   // precioOriginal,
   // descuento,
  // porcentajePrecioConDescuento,
   // precioConDescuento,});

const coupons = [
   "Barby",
   "Naty",
   "Mary",];

  

function calcularPrecioConDescuento(Pricevalue, descuento) {
    //const porcentajePrecioConDescuento = 100 - Discountvalue;
    const precioConDescuento = Pricevalue * (100 - descuento) / 100;

   return precioConDescuento;}



function onClickbutton() {
    const inputPrice = document.getElementById("inputPrice");
    const Pricevalue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponvalue = inputCoupon.value;

    let descuento;

    
    switch(couponvalue) {
      case coupons[0]: //Barby "aca se evidencia cuando declaramos las constantes arriba empiezan desde el 0, 1 y 2, osea Barby es el 0"
      descuento = 15;
      break;
      case coupons[1]: //Naty "Naty es el 1"
      descuento = 30;
      break;
      case coupons[2]: //Mary "Mary es el 2"
      descuento = 25;
      break; }

    
    const precioConDescuento = calcularPrecioConDescuento(Pricevalue, descuento);

    const ResultP = document.getElementById ("ResultP");
    ResultP.innerText = "El precio con descuento es: $" + precioConDescuento; 
    }



//if (couponvalue = 1){
  // descuento = 50;
// } else if (inputCoupon = 2){
  // descuento = 25;
// } else if (inputCoupon = 3){
  // descuento = 15; }
