const countryInput=document.getElementById("input");
const searchbutton=document.getElementById("searchb");
const countryimg=document.getElementById("c-img");
const countryname=document.getElementById("c-name");  
const capital=document.getElementById("capital");
const Population=document.getElementById("Population");
const Borders=document.getElementById("Borders");
const TimeZone=document.getElementById("TimeZone");
const Languages=document.getElementById("Languages");
const Currency=document.getElementById("Currency");
const result=document.getElementById("result")


function fetchdata(){
  let country=countryInput.value
  if(country==""){
    alert("enter valid input")
  }
  else{
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(res=>res.json())
    .then((data)=>{
     console.log(data[0]);
      let offcialName = data[0].name.official
      console.log(`offcialName: ${offcialName}`);
      // capital
      let Capital = data[0].capital
      console.log(`Capital:${Capital}`);  
      // data
      let Area = data[0].area
      console.log(`Area:${Area}`);
      // borders
      const Boders = data[0].borders
      console.log(`Border ${Boders}`);
      // map
      let Map = data[0].maps.googleMaps
      console.log(`Google Maps ${Map}`);
      // population
      let population = data[0].population
      console.log(`population: ${population}`);
      // timezone
      let timeZone = data[0].timezones
      console.log(`timezones: ${timeZone}`);
      // continents
      let continents = data[0].continents
      console.log(`continents ${continents}`);
      // flag
      let flag = data[0].flags.png
      console.log(`Flags: ${flag}`);
   
  
   

      // Currenxcy

      for(let currency in data[0].currencies){
        var currencyName = data[0].currencies[currency].name
        var currencySymbol = data[0].currencies[currency].symbol
      }
      console.log(currencyName);
      console.log(currencySymbol);

      result.innerHTML=` <img id="c-img" style="width: 40%;" src=${flag} alt="">
            <h4 id="c-name" style="text-align: center;">${offcialName}</h4>
            <p >Capital:${Capital} </p>
             <p >continents:${continents} </p>
            <p>Population: <span id="Population">${population}</span></p>
            <p>Borders: <span id="Borders">${Boders}</span></p>
            <p>TimeZone: <span id="TimeZone">${timeZone}</span></p>
         
            <p>Currency: <span id="Currency">${currencyName}</span></p>
          `

    })
  }
}

