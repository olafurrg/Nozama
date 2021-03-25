import React from 'react';

import './Styling/Home.css';
import ProductList from './ProductList';

function Home(){
    return(
        <div className="home">
            <img className="home__image" src="https:images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
               {/* <Product
                    id="1234"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image="https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                    id="1234"
                    title="The Lean Startup: How Contant Innovation"
                    price={101.60}
                    rating={3}
                    image="https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                    id="1234"
                    title="The Lean Startup: How Contant Innovation"
                    price={15.95}
                    rating={5}
                    image="https:images-eu.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
               />*/}
               <ProductList />
            </div>
        </div>
    )
}

export default Home;