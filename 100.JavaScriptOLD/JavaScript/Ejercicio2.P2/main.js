'use strict'
//Función clásica y evento html
function compra(){
   cuerpoCompra();
}

//Método .addEventListerner
const calculoCompra = document.getElementById('btnCalculo');
calculoCompra.addEventListener('click', function (){
    cuerpoCompra();
});

//Mediante propiedad

const calculoPropiedad = document.getElementById('btnCalculoPropiedad');
calculoPropiedad.onclick = function () {
    cuerpoCompra();
}

const cuerpoCompra = () =>{
     /**
     * DE: precios, iva, sumaPrecios, cantProductos
     * DS: compra total de los productos + iva
     */
      const CPRODUCTOS = 3;
      let sumaPrecios = 0;
      const IVA = 19;
      let precio = 0;    
  
      for (let i=1; i<=CPRODUCTOS; i++){
          precio = prompt('Introduzca el precio #'+i);
          sumaPrecios = parseFloat(precio) + sumaPrecios;
          //sumaPrecios += parseFloat(precio);
      }
      const precioPagar = sumaPrecios + ((sumaPrecios * IVA)/100);
      alert("El iva"+(sumaPrecios*IVA)/100);
      alert("El total a Pagar es:"+precioPagar);
}