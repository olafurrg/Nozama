import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

import './Styling/Subtotal.css';

function Subtotal(){
    const[{basket}, dispatch] = useStateValue();

    const getCartTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
                    </p>
                    )
                }
                decimalScale={2}
                value={getCartTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button className="checkout__button">Proceed to checkout</button>
        </div>
        
    )
}

export default Subtotal;