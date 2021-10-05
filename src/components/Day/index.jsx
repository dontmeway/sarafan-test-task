import React from 'react'
import cl from './Day.module.scss'
export const Day = ({day, date, temp, weatherMain, icon, wind, humidity, units}) => {
    const [isHidden, setHidden] = React.useState(false)
    return (
        <div onClick = {() => setHidden(prev => !prev)} className = {cl.day}>
            <div className = {cl.day__main}>
                <div className = {cl.day__left}>
                    <p>{day} {date}</p>
                    <span><b>{Math.round(temp.day)}</b>/ {Math.round(temp.night)}</span>
                    <img width = {80} src = {icon} alt = ""/>
                    <h5>{weatherMain}</h5>
                </div>
                <div className = {cl.day__right}>
                    <div>
                        <i className = "bi bi-wind"></i><span>Wind: {wind} {units === "metric" ? "m/s" : "mph"}</span>
                    </div>
                    <div>
                        <i className="bi bi-droplet"></i><span>Humidity: {humidity} %</span>
                    </div>
                </div>
            </div>
            {isHidden && 
            <div className = {cl.day__submain}>
                <div>
                    <p>Morning</p>
                    <img width = {80} src = {icon} alt = ""/>
                    <span>{Math.round(temp.morn)} C</span>
                </div>
                <div>
                    <p>Day</p>
                    <img width = {80} src = {icon} alt = ""/>
                    <span>{Math.round(temp.day)} C</span>
                </div>
                <div>
                    <p>Evening</p>
                    <img width = {80} src = {icon} alt = ""/>
                    <span>{Math.round(temp.eve)} C</span>
                </div>
                <div>
                    <p>Overnight</p>
                    <img width = {80} src = {icon} alt = ""/>
                    <span>{Math.round(temp.night)} C</span>
                </div>
            </div>}
        </div>
    )
}
