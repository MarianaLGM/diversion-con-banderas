let paisesMundo= document.getElementById("paises-mundo");
let countriesList= document.getElementById("countries-list");
let countriesInformation= document.getElementById("countries-information");
let cerrarVentana= document.getElementById("cerrar-ventana");
let abrir= getElementById ("abrir")
let cerrar= getElementById ("cerrar")

const getCountries= async(countries)=>{
  try{
    const response=await fetch ("https://restcountries.com/v3/all");
  if(!response.ok){
     throw new Error ("ha surgido un error", response.status)
   }
  const data= await response.json();
  // ordenar de mayor a menor
  ordenarAlf(data);
  console.log(data);

  //devolver el resultado
  return data.response;
  //llama aquí a la función de ordenar (si no te lo devuleve ordenado prueba a ponerle un await para que espere a tener la respuesta)

  return data //retorno el resultado de los paises ordenados
    }catch (error){
      console.log ("error al obtener los datos", error);
  };

  getCountries(countries).then((data)=>

    countries.forEach((elements)=>{ //bucle que recorre cada país con contenedor para mostrar imagen y pais
      countriesList.innerHTML =` 
      <img id="abrirVentana" ${elements.flags}>
      <h2>${elements.name.common}</h2>
      `;
      abrir.addEventListener("click", () => { //ABRIR VENTANA
        countriesInformation.classList.add("show");
      })
      paisesMundo.appendChild (countriesList);
  }) 
)


  //otro bucle para pintar el resto de información  
  //pte añadir un evento para que cuando hagas clic sobre el contenedor de la bandera abra una ventana con toda la información detallada. 
  //Botón para cerrar esa ventana.
   countries.forEach((elements)=>{
      countriesInformation.innerHTML=`
      <h3>${elements.capital}</h3>
      <h3>${elements.population}</h3>
      <h3>${elements.car.side}</h3>
      `;
      cerrar.addEventListener("click", () => {//CERRAR VENTANA
        countriesInformation.classList.remove("show");
      }) 
      paisesMundo.appendChild(countriesInformation);
    })
         
}

//llamar a la function
getCountries();

//función ordenar y letra minúsculas
function ordenarAlf(data) {
  data.sort((a, b) => {
    const country1 = a.name.common.toLowerCase();
    const country2 = b.name.common.toLowerCase();

    if (country1 < country2) {
      return -1;
    }
    if (country1 > country2) {
      return 1;
    }
    return 0;
  });
}


