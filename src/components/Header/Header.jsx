import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changeUnit } from '../../store/slices/weatherSlice'
import cl from './Header.module.scss'
export const Header = () => {
    const { units } = useSelector(state => state.weather)
    const dispatch = useDispatch()
    const history = useHistory()
    const [active, setActive] = React.useState("/today")
    const handleChange = (e) => {
        dispatch(changeUnit(e.target.value))
    }

    const handlePush = (e) => {
        history.push(e.target.value)
        setActive(history.location.pathname);
    }
    return (
        <header>
            <nav>
                <div className = {cl.navbar}>
                    <div>
                            <button
                                onClick = {handlePush}
                                value = "/today" 
                                className = {active === "/today" ? "active" : ""}>
                                Today
                            </button>

                            <button
                                onClick = {handlePush} 
                                value = "/8day" 
                                className = {active === "/8day" ? "active" : ""}>
                                8 Day
                            </button>
                            <button 
                                onClick = {handlePush} 
                                value = "/hourly"
                                className = {active === "/hourly" ? "active" : ""}>
                                Hourly
                            </button>
                    </div>
                    <select value = {units} onChange = {handleChange}>
                        <option value = "metric">Celcius</option>
                        <option value = "imperial">Fahrenheit</option>
                    </select>
                </div>
            </nav>
        </header>
    )
}
