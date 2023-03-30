import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Chips = () => {
    const [bags, setBags] = useState(0);

    function handleClick() {
        return setBags(bags => bags + 1);
    } 
    
    return (
        <div className='chips'>
            <img src='https://www.meijer.com/content/dam/meijer/product/0002/84/0019/91/0002840019914_1_A1C1_0600.png' alt="chips" />
            <h1>Bags: {bags} </h1>
            <button onClick={handleClick}>NOM NOM NOM</button>
            <h1><Link to="/">Go Back</Link></h1>
        </div>
    )
}


export default Chips;