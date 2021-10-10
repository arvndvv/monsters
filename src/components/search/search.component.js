import React from 'react'
import './search.styles.scss'
export const Search=({placeholder,handleChange})=> {
    return (
        <input type="search" placeholder={placeholder} onChange={handleChange} className="search"/>

    )
}
