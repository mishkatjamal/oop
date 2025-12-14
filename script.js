let temperature = document.querySelector(".temperature");
let mausam = document.querySelector(".mausam");
let countryWala = document.querySelector(".country-wala");
let sathumi = document.querySelector(".sat-humi");
let setFeelslike = document.querySelector(".sat-val-feels");
let setspeed = document.querySelector(".sat-wind-speed");
let satvisi = document.querySelector(".sat-val-hu");
let satmainwind = document.querySelector(".satmain-wind");

async function dashboard(city) {
  let apikey = "b92e57938eaebc6ded1fcf3a2f5b4bc3";
  let raw = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  );
  let realdata = await raw.json();
  console.log(realdata);
  
  temperature.textContent = realdata.main.temp +"°";
  mausam.textContent = realdata.weather[0].main;
  countryWala.textContent = "📍"+realdata.name + "," + realdata.sys.country;
  sathumi.textContent = realdata.main.humidity;
  setFeelslike.textContent = realdata.main.feels_like;
  setspeed.textContent = realdata.wind.speed +"km/h";
  satmainwind.textContent = realdata.wind.speed +"km/h";
  satvisi.textContent = realdata.visibility;
}
dashboard("nagpur")