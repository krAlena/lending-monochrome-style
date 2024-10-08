import React from "react";
import {Element} from "react-scroll";
import "./AboutUs.sass";
import { ABOUT_US_ID } from "../../Constants/routes";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutUs = () => {


    return (
    <Element name={ABOUT_US_ID}>
        <section className="page about-us">
            <div className="page-content about-us-content flex-row space-between">
                <div className="illustration-part mob-hidden">
                    <div className="hightlight-spot hidden-on-light-theme"></div>
                    <LazyLoadImage
                        className="logo"
                        alt="illustration About Us"
                        effect="blur"
                        src="img/illustration/illustration_about.svg"
                    />
                </div>
                <div className="flex-col main-info">
                    <div className="flex-row">
                        <div className="bordered-title uppercase">About us</div>
                    </div>
                    <h2>Faster, friendlier feedback loops make life easier.</h2>
                    <div className="description">
                        Add a Viewer to your team so they can see everything you share, or invite
                        people to individual documents. It’s up to you. Stakeholders can check
                        out designs in their web browser, test prototypes and leave feedback for free.
                    </div>
                    <div className="illustration-part-mob mob-visible">
                        <div className="hightlight-spot hidden-on-light-theme"></div>
                        <LazyLoadImage
                            className="logo"
                            alt="illustration About Us"
                            effect="blur"
                            src="img/illustration/illustration_about.svg"
                        />
                    </div>
                    <ul className="list flex-col">
                        <li>Shared Cloud Libraries, for a single source of truth</li>
                        <li>Prototype previews for user testing and research</li>
                        <li>Easy organization with projects</li>
                        <li>Free developer handoff, right inside the browser</li>
                        <li>Two-factor authentication and SSO</li>
                    </ul>
                </div>
            </div>
        </section>
    </Element>
    )
};

export default AboutUs;