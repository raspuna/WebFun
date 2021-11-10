var weatherTable = {
    'Burbank' : [['cloudy', 21, 11], ['sunny', 25, 14], ['sunny', 31, 16], ['sunny', 32, 16]],
    'Chicago' : [['cloudy', 14, 8], ['cloudy', 14, 12], ['rainy', 13, 4], ['rainy', 6, 1]],
    'Dallas' : [['cloudy', 25, 16], ['rainy', 23, 11], ['sunny', 21, 7], ['sunny', 19, 3]]
}
var weatherImgs = {
    'cloudy' : './assets/some_clouds.png',
    'rainy' : './assets/some_rain.png',
    'sunny' : './assets/some_sun.png'
}
var weatherText = {
    'cloudy' : 'some clouds',
    'rainy' : 'some rain',
    'sunny' :  'some sun'
}
var weatherIdx = ['today', 'tomorrow', 'Fri', 'Sat'];
var currentUnit = 'C';

function acceptCookie(element) {
    console.log(element.parentElement.parentElement);
    element.parentElement.parentElement.remove(); 
    return 0;
}

function drawWeather(cityName) {
    var weatherBox;
    console.log(currentUnit);
    for (var i = 0; i < weatherIdx.length; i++) {
        weatherBox = document.getElementById(weatherIdx[i]);
        weatherArr = weatherTable[cityName][i];
        console.log(weatherArr);
        /* change img src */
        weatherBox.childNodes[7].src = weatherImgs[weatherArr[0]];
        /* change weather explain text */
        weatherBox.childNodes[11].innerText = weatherText[weatherArr[0]];
        /* change temperature highest and lowest 
        highest - node[3]
        lowest - node[7]
        */
        temperature = weatherBox.childNodes[15];
        temperature.childNodes[3].innerText = transformToF(weatherArr[1], currentUnit) + "°";
        temperature.childNodes[7].innerText = transformToF(weatherArr[2], currentUnit) + "°";
    }
    return 0;
}
function changeCity(cityName) {
    alert("Loading weather report..." + cityName);
    chosenCity = document.getElementById("chosen-city");
    chosenCity.innerText = cityName;
    drawWeather(cityName);
    return 0;
}
function transformToF(num, indicator){
    if (indicator == 'F') {
        res = num * 1.8 + 32;
    } else {
        res = num;
    }
    return res.toFixed(0);
}
function transformBoth(num, indicator) {
    console.log(num);
    if (indicator == 'F') {
        res = num * 1.8 + 32;
    } else {
        res = (num - 32) / 1.8;
    }
    return res.toFixed(0);
}

function transform(element) {
    console.log(element.value);
    unitName = element.value;
    if (currentUnit != unitName) {
        currentUnit = unitName;
        for (var i = 0; i < weatherIdx.length; i++) {
            weatherBox = document.getElementById(weatherIdx[i]);
            temperature = weatherBox.childNodes[15];
            console.log(temperature.childNodes);
            /* trim ° */
            highest = temperature.childNodes[3].innerText.slice(0, -1); 
            lowest = temperature.childNodes[7].innerText.slice(0, -1);
            /* transform temperature by selector */
            temperature.childNodes[3].innerText = transformBoth(highest, unitName) + "°";
            temperature.childNodes[7].innerText = transformBoth(lowest, unitName) + "°";
        }
    }
    return 0;
}