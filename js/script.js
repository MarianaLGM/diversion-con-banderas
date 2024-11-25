


const getCountries= async()=>{
  try{
    const response=await fetch ("https://restcountries.com/v3/all");
  if(!response.ok){
     throw new Error ("ha surgido un error", response.status)
   }
  const data= await response.json();
  // ordenar de mayor a menor
  const ordenarPaises = await ordenarAlf(data);
  return pintarHtml (ordenarPaises);

  /*ordenarAlf(data);
  console.log(data);
  return data.response;//devolver el resultado 
  return data //retorno el resultado de los paises ordenados*/

    }catch (error){
      console.log ("error al obtener los datos", error);
  };       
}

//llamar a la function
getCountries();

/////////ORDENAR ALFABÉTICAMENTE Y PASAR TODO A MINÚSCULAS//////////////
function ordenarAlf(data) {
  return data.sort((a, b) => {
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

///////////////////BUCLES PARA LOCALIZAR INFO//////////////////////////
const pintarHtml=(countries)=> {
  countries.forEach((elements)=>{ 
    let countriesList= document.getElementById("countries-list"); //contenedor grande
    let paisesMundo= document.createElement("div"); //contenedor foto y nombre
    //let abrir= getElementById ("abrir")
    //let cerrar= getElementById ("cerrar")

    paisesMundo.innerHTML =` 
    <img id="abrirVentana"  alt="bandera" src="${elements.flags[0]}"/>
    <h2>${elements.name.common}</h2>
    `;
  paisesMundo.addEventListener("click", () => { //ABRIR VENTANA
   popUp(elements)

   })
    countriesList.appendChild(paisesMundo);
  })
  
}

function popUp (elements) {
//crear function para meter todo pop up
let countriesInformation= document.getElementById("countries-information");//contenedor resto info
let cerrar= document.createElement("button")
let contenedor= document.createElement("div")
contenedor.classList.add ("popUp")
      contenedor.innerHTML=`
      <img id="abrirVentana"  alt="bandera" src="${elements.flags[0]}"/>
      <h3>Pais: ${elements.name.common}</h3>
      <h3>Capital: ${elements.capital}</h3>
      <h3>Population: ${elements.population} habitantes</h3>
      <h3>Car side: ${elements.car.side}</h3>
      `;
let popUp= document.getElementsByClassName("popUp");//contenedor resto info
      cerrar.addEventListener("click", () => {//CERRAR VENTANA
      
      countriesInformation.innerHTML=`
      `;
      })
      
      cerrar.innerHTML="X"
      contenedor.appendChild(cerrar);
      countriesInformation.appendChild(contenedor);
}

    
