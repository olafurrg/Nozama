import React, { useState } from 'react';
import {db} from '../firebase';
import firebase from 'firebase';

import { useStateValue} from '../StateProvider';
import '../Styling/Sell.css';
import Product from './Product';

function Sell() {
    const initialFieldValues ={
        title: '',
        category: '',
        price: 0,
        rating: 0,
        image: ''
    }

    const [values, setValues] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [image, setImage] = useState("")

    function createProduct(e){
        e.preventDefault();
        
        const productsRef = db.collection('products');
        console.log(title);
        productsRef.add({

            title,
            category,
            price,
            rating,
            image

        }).then(function(docRef){
            console.log("Product created with id: " , docRef.id);
        })
        .catch(function(error){
            console.error("Error creating", error);
        });
        
        setValues("");
    }

    return (
        <div>
            <h1>Sell your own item here</h1>
            <form>
                    <h5>Name of product</h5>
                    <input value={values.title} onChange={event => setTitle(event.target.value)} type="text" />
                    <h5>Category</h5>
                    <input value={values.category} onChange={event => setCategory(event.target.value)} type="text"/>
                    <h5>Price of Item</h5>
                    <input type="number" onChange={event => setPrice(event.target.value)} value={values.price} />
                    <h5>Rating for item</h5>
                    <input type="number" onChange={event => setRating(event.target.value)} value={values.rating} />
                    <h5>Link to Image</h5>
                    <input type="text" onChange={event => setImage(event.target.value)} value={values.image} />
                    <button onClick={createProduct} type="submit" >Create new Product</button>
                </form>
        </div>
        

    )
}

export default Sell;
