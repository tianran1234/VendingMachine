import React from 'react';
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div className='soda'>
            <img src='https://www.eatthis.com/wp-content/uploads/sites/4/2021/10/coca-cola.jpg?quality=82&strip=1&w=640' alt="coca cola can" />
            <h1>OMG SUGARRRRR</h1>
            <h1><Link to="/">Go Back</Link></h1>
        </div>
    )
}



export default Soda;