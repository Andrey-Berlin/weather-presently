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
                `                
                    <h2>${results.name}</h2>
                    
                   <ul>
                     <li>Погода: ${results.weather[0].main}</li>
                     <li><img src="https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png" alt=""></li>
                     <li>Погода: ${results.weather[0].description}</li>
                    <li>Облака: ${results.clouds.all}% (Норма: 0%)</li>
                     <li>Температура: ${results.main.temp}C° (Норма для чел.: +20C°)</li>
                    <li>Ощущается: ${results.main.feels_like}C° (Норма для чел.: +20C°)</li>
                    <li>Влажность: ${results.main.humidity}% (Норма: 50%)</li>
                    <li>Давление: ${results.main.pressure}hPa  (Норма: 1013 hPa)</li>
                   <li>Ветер: ${results.wind.speed}m/s (Норма: до 1 м/с)</li>
                    </ul>
                  `
        }
    };
    xhr.onerror = function() {
        alert(`Network Error`);
    };
};
