import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useStateValue} from '../StateProvider';
import {db} from '../firebase';
import firebase from 'firebase'
import { useParams } from 'react-router';



function Review(){
    const [product, setProduct] = useState();
    const [id, setId] = useState();

    const Myid = window.location.pathname;
    const docId = Myid.slice(6);

    useEffect(() => {
        
        const Myid = window.location.pathname;
        const docId = Myid.slice(6);
        setId(docId);
        
        
    }, []);

    useEffect(() => {
        getProduct();
    }, [id]);

    function deleteItem(){
        var docRef = db.collection("products").ref('products').child(id);
        docRef.remove();
    }

    

    function getProduct(){
        var docRef = db.collection("products").doc(id);

        docRef.get().then((doc) => {
            if(doc.exists) {
                setProduct({
                    id: doc.id,
                    title: doc.data().title,
                    category: doc.data().category,
                    price: doc.data().price,
                    rating: doc.data().rating,
                    image: doc.data().image
                })
            } else {
                console.log("no such doc");
            }
        }).catch((error) => {
            console.log(error);
        });

    }

    return (
        <div>
            <h1>Review Item here</h1>
            <Product 
                key = {id}
                {...product}
            />
        </div>
        
        
    );
}

export default Review;