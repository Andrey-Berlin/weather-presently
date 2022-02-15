let button = document.getElementById("btn");
button.onclick = function(){
  
  let input = document.getElementById('input').value;
    
    
   let city = input;
    console.log(city);

    let xhr = new XMLHttpRequest();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=452c27213f9904c2140f7b65897bfbef&lang=ru&units=metric`;
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.responseText;
            // console.log(response);
            let results = JSON.parse(response);
            console.log(results);
            result.innerHTML =
                `   <hr />            
                    <h2>${results.name}</h2>
                    <hr />
                   <ul>
                    <hr />
                     <li>Погода: 
                    
                     ${results.weather[0].main}</li>
                     <hr />
                     <li><img src="https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png" alt=""></li>
                     <hr />
                     <li>Погода: ${results.weather[0].description}</li>
                    <hr />
                    <li>Облака:
                    ${results.clouds.all}% 
                     <hr />
                    (Норма: 0%)</li>
                     <hr />
                     <li>Температура:
                     
                     ${results.main.temp}C° 
                      <hr />
                     (Норма для чел.: +20C°)</li>
                    <hr />
                    <li>Ощущается: ${results.main.feels_like}C°
                    <hr />
                    (Норма для чел.: +20C°)</li>
                    <hr />
                    <li>Влажность: ${results.main.humidity}% 
                    <hr />
                    (Норма: 50%)</li>
                    <hr />
                    <li>Давление: ${results.main.pressure}hPa 
                    <hr />
                    (Норма: 1013 hPa)</li>
                   <hr />
                   <li>Ветер: ${results.wind.speed}m/s
                     <hr />
                    (Норма: до 1 м/с)</li>
                    </ul>
                    <hr />
                  `
        }
    };
    xhr.onerror = function() {
        alert(`Network Error`);
    };
};
