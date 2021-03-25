import React, { useState } from 'react';
import Product from './Product';
import { useStateValue} from './StateProvider';
import './Styling/ProductList.css';

const someItems = [
    {id:"1",
    title:"The Lean Startup: How Contant Innovation",
    price:11.96,
    rating:4,
    image:"https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"},
    {id:"2",
    title:"The Lean Startup: How Contant Innovation",
    price:11.96,
    rating:4,
    image:"https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"},
    {id:"3",
    title:"The Lean Startup: How Contant Innovation",
    price:11.96,
    rating:4,
    image:"https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"}
]

function ProductList(){
 
    return(
        <div className="productList">
            {
            someItems.map(item => (
                <div className="eachItem">
                    <Product
                        key = {item.id}
                        {...item}
                    />
                </div> 
            ))
            }
            
        </div>
    )
}

export default ProductList;