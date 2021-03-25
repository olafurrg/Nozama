import React, { useState } from 'react';
import {db} from './firebase';
import firebase from 'firebase';

import { useStateValue} from './StateProvider';
import './Styling/Sell.css';

function Sell() {
    const initialFieldValues ={
        title: '',
        category: '',
        price: 0,
        rating: 0,
        image: ''
    }

    var [values, setValues] = useState("")

    const handleInputChange = e =>{
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


    function createProduct(e){
        e.preventDefault();
        {/*
        db.collection("products").add({
            title: values.title,
            category: values.category,
            price: values.price,
            rating: values.rating,
            image: values.image,

        });
        */}
        db.collection("products").doc("asdfsfdg").set({
            title: values.title,
            category: values.category,
            price: values.price,
            rating: values.rating,
            image: values.image,
        })
        
        setValues("");
    }

    return (
        <div>
            <h1>Sell your own item here</h1>
            <form>
                    <h5>Name of product</h5>
                    <input value={values.title} onChange={handleInputChange} type="text" />
                    <h5>Category</h5>
                    <input value={values.category} onChange={handleInputChange} type="text"/>
                    <h5>Price of Item</h5>
                    <input type="number" onChange={handleInputChange} value={values.price} />
                    <h5>Rating for item</h5>
                    <input type="number" onChange={handleInputChange} value={values.rating} />
                    <h5>Link to Image</h5>
                    <input type="text" onChange={handleInputChange} value={values.image} />
                    <button onClick={createProduct} type="submit" >Create new Product</button>
                </form>
        </div>
        

    )
}

export default Sell;
