import React from 'react'
import { useSelector } from 'react-redux'

export const MainBar = () => {
    const { currentDate } = useSelector(state => state.weather)
    return (
        <div className = "currentDate">
            <div className = "currentDate__temp">
                <img width = {200} src = {currentDate.icon} alt = "icon"/>
                <div>
                    <p>{currentDate.temp} </p>
                    <span>C</span>
                </div>
            </div>
           <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div>
                     <div className = "weather">
                         <p>{currentDate.weather}</p>
                         <span>{currentDate.weatherDesc}</span>
                     </div>
                     <div>{currentDate.date}</div>
                     <div className = "currentDay">
                         {currentDate.day}
                         <span></span>
                         {currentDate.time}
                     </div>
                </div>
                <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className = "dayTimes">
                        <div>
                            <i className = "bi bi-sunrise"></i><span>{currentDate.sunrise}</span>
                        </div>
                        <div>
                            <i className = "bi bi-sunset"></i><span>{currentDate.sunset}</span>
                        </div>
                    </div>
                    <div style = {{display: "flex"}}>
                        <div className = "wind">
                            <i className = "bi bi-wind"></i><span>Wind {currentDate.wind} metre/sec</span>
                        </div>
                        <div className = "humidity">
                            <i className="bi bi-droplet"></i><span>Humidity {currentDate.humidity} %</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
