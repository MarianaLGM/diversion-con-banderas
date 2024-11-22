//La URL de la API es https://restcountries.com/v3/all

/*
- Los paises se ordenarán en orden alfabético (recuerda el método `sort`). 
Recuerda que para ordenar no es lo mismo mayúsculas que minúsculas. Si comparas que sea lo mismo...
pasa los nombres a mayúsculas si te parece más sencillo para la comparación.

- La información detallada incluye la 
nombre (name.common)
bandera del país (flag)
la capital(capital)
la población(population)
el lado de la carretera donde se circula. (car.side)
Este flotante se quedará fijo y centrado hasta que se cierre.

- La aplicación está diseñada con un enfoque simple y utiliza funciones asíncronas para manejar las solicitudes a la API.
 Recuerda que podrás usar fetch, Async/Await...

- Puedes manipular el `HTML` si lo necesitaras. 

- Si necesitas añadir clases a un elemento mediante JS, lo puedes hacer con `elemento.classList.add('clase que quieres añadir')`
 y para eliminar `elemento.classList.remove('clase que quieres añadir')`

- Al clickar en cada una de las banderas tendrá que mostrar la información detallada en una ventana flotante del país seleccionado. 
La Muestra información detallada sobre el país seleccionado, incluyendo la bandera, la capital, 
la población, el lado de la carretera por el que se circula.

- Tendrá un botón cerrar para hacer desaparecer esa información.
*/

//paises se ordenarán en orden alfabético (recuerda el método `sort`)


const countries= async(country)=>{
    try{
      const response=await fetch ("https://restcountries.com/v3/all");
     if(!response.ok){
       throw new Error ("ha surgido un error", response.status)
     }
   
     const data= await response.json();
     console.log(data)
     const dataCountry= data.filter((data)=>data.country==country);
     return dataCountry
    }catch (error){
      console.log ("error al obtener los datos", error);
    }
  };
  
  let countriesList= document.getElementById("countries-list");

  countries.forEach((country) => {
    const contenedorCountry =document.createElement("li")//creo un li para meter toda la info de los usuarios menos dirección y compañia que van en otro contenedor
    contenedorCountry.classList.add ("contenedorCountry")
    contenedorCountry.innerHTML =`
  
    <li>${country.name.common}</li>
    <li>${country.flag}</li>
    <li>${country.capital}</li>
    <li>${country.population}</li>
    <li>${country.car.side}</li>
     `
     countriesList.innerHTML+=templeteCountry

     listaUsuarios.appendChild (contenedorCountry);

   })

  countries().then((data)=>contenedorCountry("country".data));
   

  