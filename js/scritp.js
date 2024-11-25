

  countries((country) => {
    const contenedorCountry =document.createElement("li")
   
    contenedorCountry.classList.add ("contenedorCountry")
    
    contenedorCountry.innerHTML =
    `
    <li>${country.name.common}</li>
    <li>${country.flags}</li>
     `;

    lista.appendChild (contenedorCountry);
    countries().then((data)=>contenedorCountry("country".data));

    const contenedorInfoCountry =document.createElement("li")
    contenedorInfoCountry.classList.add ("contenedorInfoCountry")
    contenedorInfoCountry.innerHTML =
    `
    <li>${country.capital}</li>
    <li>${country.population}</li>
    <li>${country.car.side}</li>
     `;
     contenedorCountry.appendChild(contenedorInfoCountry);
     countries().then((data)=>contenedorInfoCountry("country".data));
   }) 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

   const getUsers= async(userId)=>{
    try{
      const response=await fetch ("https://jsonplaceholder.typicode.com/todos/");
     if(!response.ok){
       throw new Error ("ha surgido un error", response.status)
     }
     const data= await response.json();
     const dataFilterId= data.filter((data)=>data.userId==userId);
     return dataFilterId
    }catch (error){
      console.log ("error al obtener los datos", error);
    }
  };
  const templete=(userId, users)=>{
    container= document.getElementById(userId)
    users.forEach(user=>{
      let templeteUser= `<li>${user.title}</li>`
      container.innerHTML+=templeteUser
    })
   }
   getUsers(1).then((data)=>templete("userId1", data));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   let countriesList= document.getElementById("countries-list"); //CONTENEDOR FOTO+NOMBRE PAIS
   let countriesInformation= document.getElementById("countries-information")//RESTO INFO PAIS

   const getCountries= async(countries)=>{
    try{
      const response=await fetch ("https://restcountries.com/v3/all");
    if(!response.ok){
       throw new Error ("ha surgido un error", response.status)
     }
    const data= await response.json();
  return data 
    }catch (error){
      console.log ("error al obtener los datos", error);
    };


    const templete=(countriesList, countries)=>{
      container= document.getElementById(countriesList)
      countries.forEach(country=>{
        let templeteCountry= `
        <h2>${country.name.common}</h2>
        <img ${country.flags}>
        `;
        container.innerHTML+=templeteCountry
      })

   }
   getUsers().then((data)=>templete (data))
  }