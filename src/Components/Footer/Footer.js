import React from "react";
import "./Footer.sass";
import { Link } from "react-scroll";
import { ABOUT_US_ID, FAQ_ID, HOW_IT_WORKS_ID, PRICING_ID } from "../../Constants/routes";
import { COLOR_THEME } from "../../Constants/themes";
import FacebookSvgIcon from "../Common/Icons/FacebookSvgIcon";
import TwitterSvgIcon from "../Common/Icons/TwitterSvgIcon";
import GoogleSvgIcon from "../Common/Icons/GoogleSvgIcon";
import LinkedinSvgIcon from "../Common/Icons/LinkedinSvgIcon";
import YoutubeSvgIcon from "../Common/Icons/YoutubeSvgIcon";

const Footer = ({currentTheme}) => {


    return (
        <div className="footer flex-row full-width">
            <div className="footer-content flex-row space-between">
                <div className="main-block flex-col space-between">
                    <div className="top-block flex-col">
                        <div className="logo-part">
                            {
                                currentTheme === COLOR_THEME.light
                                    ?   <img className="logo" src="img/logoWhite.svg" alt="main logo"/>
                                    :   <img className="logo" src="img/logo.svg" alt="main logo"/>
                            }
                        </div>
                        <div className="subscribe-block">
                            <div className="info big">
                                Want to recieve our awesome stories?
                            </div>
                            <div className="input-with-button flex-row">
                                <input className="subscribe-input" placeholder="Enter your email"/>
                                <div className="button black btn-subscribe without-margin with-border-inverted">Subscribe</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-block description white">
                        © The 18 Design, All rights reserved.
                    </div>
                </div>
                <div className="secondary-block flex-col space-between">
                    <div className="info-cols-parent space-between flex-row">
                        <div className="info-col email-block flex-col">
                            <div className="description white email-title">Email</div>
                            <div className="description white">info@the18.design</div>
                        </div>
                        <div className="info-col flex-col">
                            <Link to={ABOUT_US_ID} smooth={true} duration={500}>
                                <div className="description white btn">About us</div>
                            </Link>
                            <Link to={HOW_IT_WORKS_ID} smooth={true} duration={500}>
                                <div className="description white btn">How it works</div>
                            </Link>
                            <Link to={PRICING_ID} smooth={true} duration={500}>
                                <div className="description white btn">Pricing</div>
                            </Link>
                            <Link to={FAQ_ID} smooth={true} duration={500}>
                                <div className="description white btn">FAQs</div>
                            </Link>
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
                        <FacebookSvgIcon className="icon logo white"/>
                        <TwitterSvgIcon className="icon logo white"/>
                        <GoogleSvgIcon className="icon logo white"/>
                        <LinkedinSvgIcon className="icon logo white"/>
                        <YoutubeSvgIcon className="icon logo white"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
