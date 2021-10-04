import moment from "moment"

export const handleCurrent = (obj) => {

        return {
        date: moment.unix(obj.dt).format("Do MMM YY"),
        day: moment.unix(obj.dt).format("dddd"),
        time: moment.unix(obj.dt).format("HH mm").split(' ').join(':'),
        temp: Math.round(obj.temp) || Math.round(obj.temp.day),
        feelsLike: Math.round(obj.feels_like),
        wind: obj.wind_speed,
        humidity: obj.humidity,
        sunset: moment.unix(obj.sunset).format("HH mm").split(' ').join(':'),
        sunrise: moment.unix(obj.sunrise).format("HH mm").split(' ').join(':'),
        weather: obj.weather[0].main,
        weatherDesc: obj.weather[0].description,
        icon: `http://openweathermap.org/img/w/${ obj.weather[0].icon}.png`
    }
}

export const handleDays = (arr) => {
    return arr.reduce((obj, el) => {
        obj = {
            ...obj,
           [el.dt]: {
                ...el,
               ...handleCurrent(el)
            } 
        }
        return obj
    }, {})
}


export const handleChangeCurrent = (obj) => {
    return {
        temp: obj.temp,
        sunrise: obj.sunrise,
        sunset: obj.sunset,
        wind: obj.wind_speed,
        humidity: obj.humidity,
        time: obj.time,
        day: obj.day,
        date: obj.date,
        weather: obj.weather,
        weatherDesc: obj.weatherDesc,
        icon: obj.icon,
    }
}

export const handleHours = (arr) => {
    
}