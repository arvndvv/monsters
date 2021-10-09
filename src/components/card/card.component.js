import React from 'react'
import './card.styles.scss'
export const Card=({user})=>(
<div className="card">
<img src={`https://robohash.org/${user.id}?set=set1&size=160x160`} alt="" className="card__image"/>
    <h1 className="card__title">{user.name}</h1>
    <p className="card__contact">{user.email}</p>
    </div>
) 
