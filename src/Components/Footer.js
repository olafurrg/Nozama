import React from 'react';

import '../Styling/Footer.css';

function Footer(){

    function handleScroll(){
        window.scrollTo(0,0);
    }

    return(
        <div className="footerarea">
            <div className="footerarea__top">
                <p onClick={handleScroll}>Back to top</p>
            </div>
            <div className="footerarea__links">
                <div>
                    <span>Contact US</span>
                </div>
                <div>
                    <span>Location</span>
                </div>
                <div>
                    <span>About Us</span>
                </div>
                <div>
                    <span>Now Hiring</span>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;