import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrent } from '../store/slices/weatherSlice'

export const Card = (props) => {
    const dispatch = useDispatch()
    const handleChangeDay = () => {
        dispatch(changeCurrent(props))
    }

    return (
        <div 
            onClick = {handleChangeDay}
            className = "card">
            <p>{props.temp} <span>C</span></p>
            <img width = {100} src = {props.icon} alt = "icon"/>
            <b>{props.day}</b>
        </div>
    )
}
