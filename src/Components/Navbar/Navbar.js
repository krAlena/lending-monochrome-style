import React, { useState } from "react";
import "./Navbar.sass";
import { Link } from "react-scroll";
import { ABOUT_US_ID, FAQ_ID,  HOW_IT_WORKS_ID, PRICING_ID } from "../../Constants/routes";
import useIsSmallScreen from "../../Helpers/useIsSmallScreen";
import { COLOR_THEME } from "../../Constants/themes";

const Navbar = ({openMobNavbar, currentTheme, changeTheme}) => {
    const isSmallScreen = useIsSmallScreen();

    const [isBurgerOpened, setIsBurgerOpened] = useState(false);
    const toggleBurgerMenu = (isMenuOpened) => {
        // let isMenuOpened = !isBurgerOpened;
        setIsBurgerOpened(isMenuOpened);
        openMobNavbar(isMenuOpened);
    }

    return (
        <>
        <div className="navigation-bar">
            <div className="navigation-bar-content full-width flex-row space-between">
                <div className="tabs">
                    <div className="logo-part">
                        <img className="logo" src="img/logo.svg" alt="main logo"/>
                    </div>
                    {
                        !isSmallScreen
                            ?   <>
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
                                </>
                            :   null
                    }

                </div>
                <div className="right-buttons flex-row">
                    {/* <div id="theme-toggle"
                        className="theme-toggle" style={{"zIndex" : "1000", "cursor" : "pointer"}}
                        onClick={event => (currentTheme === COLOR_THEME.light)  ? changeTheme(COLOR_THEME.dark) : changeTheme(COLOR_THEME.light)}
                        data-theme={currentTheme}
                        aria-label={currentTheme}
                    >
                        <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                            <mask class="moon" id="moon-mask">
                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                            <circle cx="24" cy="10" r="6" fill="black" />
                            </mask>
                            <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                            <g class="sun-beams" stroke="currentColor">
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </g>
                        </svg>
                    </div> */}
                    {
                        !isSmallScreen
                            ?   <>
                                    <div className="button white">Login</div>
                                    <div className="button black without-margin">Sign Up</div>
                                </>
                            :   <div onClick={() => toggleBurgerMenu(!isBurgerOpened)} className="btn nav-toggle">
                                    <div className={isBurgerOpened ? "icon-parent x" : "icon-parent"}>
                                        <span className={isBurgerOpened ? "bar x" : "bar"}></span>
                                        <span className={isBurgerOpened ? "bar x" : "bar"}></span>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </div>
        <div className={isBurgerOpened ? "mob-navigation-screen visible" : "mob-navigation-screen"}>
            {
                isBurgerOpened
                    ?   <div className="info-col flex-col">
                            <Link to={ABOUT_US_ID} smooth={true} duration={500}>
                                <div className="description white btn" onClick={() => toggleBurgerMenu(false)}>About us</div>
                            </Link>
                            <Link to={HOW_IT_WORKS_ID} smooth={true} duration={500}>
                                <div className="description white btn" onClick={() => toggleBurgerMenu(false)}>How it works</div>
                            </Link>
                            <Link to={PRICING_ID} smooth={true} duration={500}>
                                <div className="description white btn" onClick={() => toggleBurgerMenu(false)}>Pricing</div>
                            </Link>
                            <Link to={FAQ_ID} smooth={true} duration={500}>
                                <div className="description white btn" onClick={() => toggleBurgerMenu(false)}>FAQs</div>
                            </Link>
                            <div className="login-block flex-col">
                                <div className="button white without-margin">Login</div>
                                <div className="button black without-margin">Sign Up</div>
                            </div>
                        </div>
                    :   null
            }

        </div>
        </>
    );
};

export default Navbar;
