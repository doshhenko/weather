const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "74f8a3e0a8dec340c40f4df2f8cb75ab"
}

const input = document.querySelector('#input');
input.addEventListener('keydown', enter);

function enter(e){
    if (e.keyCode === 13){
        getInfo(input.value)
    }
}

async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector('#city');
    city.style.display = "block";
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();
    
    let temp = document.querySelector('#temperature');
    temperature.style.display = "block";
    temp.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelslike = document.querySelector('#feelslike');
    feelslike.style.display = "block";
    feelslike.innerHTML = "Feels like: "+`${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.style.display = "block";
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector('#variation');
    variation.style.display = "block";
    variation.innerHTML = "Min: "+`${Math.round(result.main.temp_min)}<span>°</span>` +" Max: "+ `${Math.round(result.main.temp_max)}<span>°</span>`;
}

function getOurDate(){
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];
    let tag = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    date.style.display = "block";
    document.querySelector("#date").innerHTML = `${day}` + " " + `${tag}` +" "+ `${month}` +" "+ `${year}`;
}
