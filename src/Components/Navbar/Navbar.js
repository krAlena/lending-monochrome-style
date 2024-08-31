import React, {useState, useEffect} from "react";
import "./Navbar.sass";
import { Link } from "react-scroll";
import { ABOUT_US, ABOUT_US_ID, FAQ, FAQ_ID, HOME_PAGE, HOW_IT_WORKS, HOW_IT_WORKS_ID, PRICING, PRICING_ID } from "../../Constants/routes";

const Navbar = () => {

    return (
        <div className="navigation-bar">
            <div className="navigation-bar-content full-width flex-row space-between">
                <div className="tabs">
                    <div className="logo-part">
                        <img className="logo" src="/img/logo.svg" alt="main logo"/>
                    </div>
                    <div className="tab active">
                        <Link to={ABOUT_US_ID} smooth={true} duration={500}>
                            <div className="section">About Us</div>
                        </Link>
                    </div>
                    <div className="tab">
                        <Link to={HOW_IT_WORKS_ID} smooth={true} duration={500}>
                            <div className="section">How it works</div>
                        </Link>
                    </div>
                    <div className="tab">
                        <Link to={PRICING_ID} smooth={true} duration={500}>
                            <div className="section">Pricing</div>
                        </Link>
                    </div>
                    <div className="tab">
                        <Link to={FAQ_ID} smooth={true} duration={500}>
                            <div className="section">FAQs</div>
                        </Link>
                    </div>
                </div>
                <div className="right-buttons flex-row">
                    <div className="button white">Login</div>
                    <div className="button black without-margin">Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
