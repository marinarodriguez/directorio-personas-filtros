import React from 'react';
import PropTypes from 'prop-types';

function Card(props){
    const {name, img, city, age} = props;
    return ( <article>
        <h2>{name}</h2>
        <img src={img} alt={name.first} />
        <p>{city}</p>
        <p>{age}</p>
    </article> )
}
 
export default Card;

Card.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}