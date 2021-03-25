import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './Styling/Subtotal.css';

function Subtotal(){
    return(
        <div className="subtotal">
            <h2>Subtotal</h2>
            <button>Proceed to checkout</button>
        </div>
        
    )
}

export default Subtotal;