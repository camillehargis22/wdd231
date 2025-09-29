// 41.16158623048141, -112.02608525378915
// 2271fdbf1614b6a0fb9a8c80fb241cba

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.16&lon=-112.03&units=imperial&appid=2271fdbf1614b6a0fb9a8c80fb241cba';
const forecastInfo = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.16&lon=-112.03&units=imperial&appid=2271fdbf1614b6a0fb9a8c80fb241cba';
const forecastSection = document.querySelector('#forecastSection');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.floor(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastInfo);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data.list);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

const displayForecast = (lists) => {
    // grabbing the temps at 12 to display
    const list = [lists[2], lists[10], lists[18]];
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
        let card = document.createElement('div');
        let date = document.createElement('p');
        let temp = document.createElement('p');
        let figure = document.createElement('figure');
        let icon = document.createElement('img')
        let desc = document.createElement('figcaption');

        console.log(list[i].dt);
        let day = new Date(list[i].dt_txt);
        console.log(day);

        let dayOfWeek = '';
        switch(day.getDay()) {
            case 0: dayOfWeek = 'Sunday'; break;
            case 1: dayOfWeek = 'Monday'; break;
            case 2: dayOfWeek = 'Tuesday'; break;
            case 3: dayOfWeek = 'Wednesday'; break;
            case 4: dayOfWeek = 'Thursday'; break;
            case 5: dayOfWeek = 'Friday'; break;
            case 6: dayOfWeek = 'Saturday'; break;
        }

        date.textContent = `${dayOfWeek}`;
        temp.innerHTML = `${Math.floor(list[i].main.temp)}&deg;F`;

        const iconsrc = `https://openweathermap.org/img/wn/${list[i].weather[0].icon}.png`;
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', `${list[i].weather[0].description}`);
        desc.textContent = `${list[i].weather[0].description}`;

        figure.appendChild(icon);
        figure.appendChild(desc);

        card.appendChild(date);
        card.appendChild(temp);
        card.appendChild(figure);

        forecastSection.appendChild(card);
    }
}

apiFetch();
forecastApiFetch();