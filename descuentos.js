// formula: P * (100 - D) / 100
//const precio = 120;
//const descuento = 18;




//console.log({
   // precioOriginal,
   // descuento,
  // porcentajePrecioConDescuento,
   // precioConDescuento,});



function calcularPrecioConDescuento(Pricevalue, Discountvalue) {
    //const porcentajePrecioConDescuento = 100 - Discountvalue;
    const precioConDescuento = Pricevalue * (100 - Discountvalue) / 100;

   return precioConDescuento;}


function onClickbutton() {
    const inputPrice = document.getElementById("inputPrice");
    const Pricevalue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const Discountvalue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(Pricevalue, Discountvalue);

    const ResultP = document.getElementById ("ResultP");
    ResultP.innerText = "El precio con descuento es: $" + precioConDescuento; 
    }

    // seguir intentando mas enredao video 12