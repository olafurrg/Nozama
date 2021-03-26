import React, { useState } from 'react';
import { useStateValue} from '../StateProvider';
import '../Styling/Product.css';

function Product({id, title, price, rating, image}){
    const [{basket}, dispatch] = useStateValue()
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                }
        })
    }
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span>*</span>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={removeItem}>Remove from cart</button>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;