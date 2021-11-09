 class Carro {
     constructor (origen, dueño, color, marca, modelo) {
        this.origen = origen;
        this.dueño = dueño;
        this.color =  color;
        this.marca = marca;
        this.modelo = modelo;
        this.datos = `el origen es ${origen} el dueño es ${dueño} el color es ${color} la marca es ${marca} el modelo del carro es ${modelo}`
     }
     encendido() {
         
     }
 }


const boton1 = document.getElementById("encendido");
boton1.addEventListener('click', function (e) {
    e.preventDefault();
        //console.log('em ña función');
    const origen = document.form1.origen.value; 
        console.log("El origen:"+origen);       
    const dueno = document.form1.dueno.value;
    console.log(dueno);
       
       /* const color = document.getElementById("color").value; 
        console.log(color)

        const marca = document.getElementById("marca").value; 
        console.log(marca);

        const modelo = documet.getElementById("modelo").value; 
        console.log(modelo);
*/
        const carro = new Carro(origen, dueno, 'red', 'volvo', 'jsahdjkfh');
    alert("el carro se ha encendido");
    alert(carro.datos);

    
    });
    