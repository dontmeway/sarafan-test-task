import React from 'react'
import { useSelector } from 'react-redux'
import cl from './Hours.module.scss'
export const Hours = () => {
    const {hours, units} = useSelector(state => state.weather)

    return (
        <div className = {cl.hours}>
            {Object.keys(hours).map(el => 
            <div
                className = {cl.hours__body}
                key = {el}>
                <h2>{el}</h2>
                {Object.keys(hours[el]).map(hour => 
                    <div    
                        className = {cl.hour} 
                        key = {hour}>
                        <div className = {cl.hour__left}>
                            <p>{hours[el][hour].time} {hours[el][hour].day}</p>
                            <span><b>{hours[el][hour].tempMain}</b>/ {hours[el][hour].feelsLike}</span>
                            <img width = {80} src = {hours[el][hour].icon} alt = ""/>
                            <h5>{hours[el][hour].weatherMain}</h5>
                        </div>
                        <div className = {cl.hour__right}>
                            <div>
                                <i className = "bi bi-wind"></i><span>Wind: {hours[el][hour].wind} {units === "metric" ? "m/s" : "mph"}</span>
                            </div>
                            <div>
                                <i className="bi bi-droplet"></i><span>Humidity: {hours[el][hour].humidity} %</span>
                            </div>
                        </div>
                    </div>)}
            </div>)}
        </div>
    )
}
