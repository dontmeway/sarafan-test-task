import React from 'react'
import { useSelector } from 'react-redux'
import cl from './Today.module.scss'
export const Today = () => {
    const { currentDate, units } = useSelector(state => state.weather)
    return (
        <div className = {cl.today}>
            <h1>Tashkent, Uzbekistan Weather</h1>
            <p>{currentDate.time} | {currentDate.date}</p>  
            <div className = {cl.today__body}>
                <div className = {cl.body__left}>
                    <p>
                        {currentDate.tempMain}<span></span>
                    </p>
                    <b>{currentDate.weatherMain}</b>
                    <div className = {cl.wind}>
                        <i className = "bi bi-wind"></i><span>Wind {currentDate.wind} {units === "metric" ? "m/s" : "mph"}</span>
                    </div>
                    <div className = {cl.humidity}>
                        <i className="bi bi-droplet"></i><span>Humidity {currentDate.humidity} %</span>
                    </div>
                </div>
                <div className = {cl.body__right}>
                    <img width = {150} src = {currentDate.icon} alt = "icon"/>
                    <p>{currentDate.weatherDesc}</p>
                </div>
            </div>          
        </div>
    )
}
