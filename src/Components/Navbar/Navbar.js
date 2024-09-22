import React, { useState, useEffect } from "react";
import "./Navbar.sass";
import { Link } from "react-scroll";
import { ABOUT_US_ID, FAQ_ID,  HOW_IT_WORKS_ID, PRICING_ID } from "../../Constants/routes";
import useIsSmallScreen from "../../Helpers/useIsSmallScreen";
import { COLOR_THEME } from "../../Constants/themes";
import SunMoonSvgIcon from "../Common/Icons/SunMoonSVGIcon";

const Navbar = ({openMobNavbar, currentTheme, changeTheme}) => {
    const isSmallScreen = useIsSmallScreen();

    useEffect(() => {
        console.log(process.env);
    }, []);

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
                    <div id="theme-toggle"
                        className="theme-toggle" style={{"zIndex" : "1000", "cursor" : "pointer"}}
                        onClick={event => (currentTheme === COLOR_THEME.light)  ? changeTheme(COLOR_THEME.dark) : changeTheme(COLOR_THEME.light)}
                        data-theme={currentTheme}
                        aria-label={currentTheme}
                    >
                        <SunMoonSvgIcon className="icon"></SunMoonSvgIcon>
                    </div>
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
