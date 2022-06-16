// formula: P * (100 - D) / 100
//const precio = 120;
//const descuento = 18;




//console.log({
   // precioOriginal,
   // descuento,
  // porcentajePrecioConDescuento,
   // precioConDescuento,});



function calcularPrecioConDescuento(Pricevalue, Discountvalue) {
    const porcentajePrecioConDescuento = 100 - Discountvalue;
    const precioConDescuento = (Discountvalue * porcentajePrecioConDescuento) / 100;

   return precioConDescuento;}


function onClickbutton() {
    const inputPrice = document.getElementById("inputPrice");
    const Pricevalue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const Discountvalue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(Pricevalue, Discountvalue);

    }

    // seguir intentando mas enredao video 12