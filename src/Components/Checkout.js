import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import { useStateValue} from '../StateProvider';
import '../Styling/Checkout.css';
import Subtotal from './Subtotal';
import Product from './Product';
import { splitString } from 'react-currency-format/lib/utils';


function Checkout(){
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout__title">Your shopping basket is empty.</h2>
                            <p>You have no items in your basket. Buy one.</p>
                        </div>
                    ) : 
                    <div>
                        <h2 className="basketTitle">Items in the Shopping Basket</h2>
                        {
                            basket.map(item => (
                                <Product key = {item.id}{...item}/>
                            ))
                        }
                    </div>
                }    
            </div>
            <div className="checkout__center">

            </div>
            {
                basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>)
            }
        </div>
    )
}

export default Checkout;