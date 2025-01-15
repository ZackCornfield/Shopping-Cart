import React from "react";
import { Link } from "react-router-dom";    

const Card = ( {index, title, price, image } ) => { 
    return (
        <Link to={`/shop/${title}`} className='card' key={index}>
            <img src={image} alt={title} className='image' />
            <div className='about'>
                <div className='title'>{title}</div>
                <div className='price'>${price}</div>
            </div>
        </Link>
    )
}

export default Card; 