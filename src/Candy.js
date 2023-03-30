import React from 'react';
import { Link } from 'react-router-dom';

const Candy = () => {
    return (
        <div className='candy'>
            <img src='https://www.2foodtrippers.com/wp-content/uploads/2021/05/American-Candy-Birdseye-View-735x580.jpg.webp' alt="candies" />
            <h1>OMG MORE SUGARRRRR</h1>
            <h1><Link to="/">Go Back</Link></h1>
        </div>
    )
}


export default Candy;