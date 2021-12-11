import React from 'react'

export const Recipe = (props) => {
    return (
        <div className="recipe">
            <h2> <strong>{props.title}</strong> </h2>
            <ul> <strong>Ingredients:- </strong> {props.ingredients.map((item)=>{
                return <li>{item}</li>
            })}</ul>
            <p><strong>Calories: </strong>{props.calories}</p>
            <img src={props.image} alt=""className="center" />
        </div>
    )
}
