import React from 'react';
import { Link } from 'react-router-dom';
import vendingMachineImg from './VendingMachine.png';


const VendingMachine = () => {
    return (
        <div className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}>
            <div>
                <h1>hello I am a vending machine. what would you like to have?</h1>
            </div>
            <div>
                <h1><Link to="/soda">soda</Link></h1>
                <h1><Link to="/chips">chips</Link></h1>
                <h1><Link to="/candy">candy</Link></h1>
            </div>
        </div>

    )
}


export default VendingMachine;