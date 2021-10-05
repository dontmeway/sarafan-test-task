import React from 'react'
import { useSelector } from 'react-redux'
import { Day } from '../Day'
import cl from './Days.module.scss'
export const Days = () => {
    const {days, units} = useSelector(state => state.weather)
    return (
        <div className = {cl.days}>
            {Object.keys(days).map(el => <Day units = {units} key = {el} {...days[el]}/>)}
        </div>
    )
}
