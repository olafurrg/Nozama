import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useStateValue} from './StateProvider';
import './Styling/ProductList.css';
import {db} from './firebase';
import firebase from 'firebase'

const someItems = [
    {id:"1",
    title:"The Lean Startup: How Contant Innovation",
    price:11.96,
    rating:4,
    image:"https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"},
    {id:"2",
    title:"The Lean Startup: How Contant Innovation",
    price:110.96,
    rating:4,
    image:"https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"},
    {id:"3",
    title:"The Lean Startup: How Contant Innovation",
    price:11.46,
    rating:4,
    image:"https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"}
]

function ProductList(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts(){
        db.collection("products").onSnapshot(function(querySnapshot){
            setProducts(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    category: doc.data().category,
                    price: doc.data().price,
                    rating: doc.data().rating,
                    image: doc.data().image
    
                }))
            );
            
        })
    }
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
            {
            products.map(item => (
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