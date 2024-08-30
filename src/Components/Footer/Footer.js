import React from 'react';
import './Footer.sass';
import { Link } from "react-router-dom";

const Footer = () => {


    return (
        <div className="footer flex-row full-width">
            <div className="footer-content flex-row space-between">
                <div className='main-block flex-col space-between'>
                    <div className='top-block flex-col'>
                        <div className="logo-part">
                            <img className="logo" src="/img/logoWhite.svg" alt="main logo"/>

                        </div>
                        <div className='subscribe-block'>
                            <div className='info big'>
                                Want to recieve our awesome stories?
                            </div>
                        </div>
                    </div>
                    <div className='bottom-block description white'>
                        © The 18 Design, All rights reserved.
                    </div>
                </div>
                <div className='secondary-block'></div>
            </div>
        </div>
    );
};

export default Footer;
