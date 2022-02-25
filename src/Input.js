import React, {useState} from 'react'

export default function Input(props) {
    return (
        <>
        <form onSubmit={(e) =>props.onFormSubmit(e)} >
        <label htmlFor="list-item">Add Item to list</label>
        <input type="text" id='list-item' onChange={(e) => props.onInputChange(e)} value={props.currentValue}/>
        <input type="submit" />
        </form>
        </>
    )
}