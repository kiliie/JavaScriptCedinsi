const contenedor = document.getElementById("datos");
const cont2 = document.querySelector("#datos");
console.log(cont2);
const fragment = new DocumentFragment();

//Función
async function obtenerLista() {
  const resp = await axios
    .get("https://api.medichouseapp.com.co/api/usuario", {
      headers: { "X-API-Key": "f25cb56b9b7468430396bfd85bbe9906" },
    })
    .then((response) => {
      const resultados = response.data;
      let poke = [];
      for (const i in resultados) {
        poke.push(resultados[i]);
      }
      return poke;
    })
    .catch((error) => {
      console.log(error);
      return 0;
    });
  return resp;
}

const resp = await obtenerLista();
resp.forEach((element) => {
  console.log(element.PERS_NOMBRES + " " + element.PERS_APELLIDOS);
  const parrafo = document.createElement("p");
  parrafo.innerHTML =
    "<span style='background-color: rgb(128, 10, 10);'>" +
    element.PERS_NOMBRES +
    "</span>";
  fragment.appendChild(parrafo);
});
contenedor.appendChild(fragment);
