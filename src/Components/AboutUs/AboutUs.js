import React from "react";
import {Element} from "react-scroll";
import "./AboutUs.sass";
import { ABOUT_US_ID } from "../../Constants/routes";

const AboutUs = () => {


    return (
    <Element name={ABOUT_US_ID}>
        <section className="page about-us">
            <div className="page-content about-us-content flex-row space-between">
                <div className="illustration-part">
                    <img className="logo" src="/img/illustration/illustration_about.svg" alt="illustration About Us"/>
                </div>
                <div className="flex-col main-info">
                    <div className="flex-row">
                        <div className="button transparent with-border uppercase">About us</div>
                    </div>
                    <h2>Faster, friendlier feedback loops make life easier.</h2>
                    <div className="description">
                        Add a Viewer to your team so they can see everything you share, or invite
                        people to individual documents. It’s up to you. Stakeholders can check
                        out designs in their web browser, test prototypes and leave feedback for free.
                    </div>
                    <ul class="list flex-col">
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