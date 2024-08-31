import React from "react";
import "./Footer.sass";
import { Link } from "react-router-dom";

const Footer = () => {


    return (
        <div className="footer flex-row full-width">
            <div className="footer-content flex-row space-between">
                <div className="main-block flex-col space-between">
                    <div className="top-block flex-col">
                        <div className="logo-part">
                            <img className="logo" src="/img/logoWhite.svg" alt="main logo"/>

                        </div>
                        <div className="subscribe-block">
                            <div className="info big">
                                Want to recieve our awesome stories?
                            </div>
                            <div className="input-with-button flex-row">
                                <input className="subscribe-input" placeholder="Enter your email"/>
                                <div className="button black btn-subscribe without-margin with-contrast-border">Subscribe</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-block description white">
                        © The 18 Design, All rights reserved.
                    </div>
                </div>
                <div className="secondary-block flex-col space-between">
                    <div className="info-cols-parent space-between flex-row">
                        <div className="info-col flex-col">
                            <div className="description white email-title">Email</div>
                            <div className="description white">info@the18.design</div>
                        </div>
                        <div className="info-col flex-col">
                            <div className="description white">About us</div>
                            <div className="description white">How it works</div>
                            <div className="description white">Pricing</div>
                            <div className="description white">FAQs</div>
                        </div>
                        <div className="info-col flex-col">
                            <div className="description white">Lead generation</div>
                            <div className="description white">Customer engagement</div>
                            <div className="description white">Customer support</div>
                            <div className="description white">Help Center Articles</div>
                            <div className="description white">Outbound Messages</div>
                            
                        </div>
                    </div>
                    <div className="icons-panel flex-row">
                        <img className="logo" src="/img/socialmedia/social_fb.svg" alt="facebook logo"/>
                        <img className="logo" src="/img/socialmedia/social_tw.svg" alt="twitter logo"/>
                        <img className="logo" src="/img/socialmedia/social_gl.svg" alt="google logo"/>
                        <img className="logo" src="/img/socialmedia/social_in.svg" alt="linkedin logo"/>
                        <img className="logo" src="/img/socialmedia/social_yt.svg" alt="youtube logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
