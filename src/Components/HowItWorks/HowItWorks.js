import React, {useState, useEffect} from "react";
import {Element} from "react-scroll";
import "./HowItWorks.sass";
import { HOW_IT_WORKS_ID } from "../../Constants/routes";

const HowItWorks = () => {

    return (
        <Element name={HOW_IT_WORKS_ID}>
            <section className="page how-it-works">
                <div className="page-content how-it-works-content flex-row space-between">
                    <div className="flex-col main-info">
                        <div className="flex-row">
                            <div className="button transparent with-border uppercase">How it works</div>
                        </div>
                        <h2>Building the best space for collaboration.</h2>
                        <div className="tools-list flex-col">
                            <div className="tool-item flex-row full-width space-between">
                                <img className="logo" src="/img/tools/puzzle.svg" alt="puzzle img"/>
                                <div className="tool-description flex-col">
                                    <h3>Shared Cloud Libraries</h3>
                                    <div className="description">
                                        Navigate to the Your work panel in the left sidebar. 
                                        Select the library you want to share. Select the Share 
                                        icon in the upper right to share the library.
                                    </div>
                                </div>
                            </div>
                            <div className="tool-item flex-row full-width space-between">
                                <img className="logo" src="/img/tools/structure.svg" alt="puzzle img"/>
                                <div className="tool-description flex-col">
                                    <h3>Free developer handoff, right inside</h3>
                                    <div className="description">
                                        Cloud Inspector makes it easy for developers to get 
                                        the information they need to turn pixels into code — 
                                        all in the browser and, most importantly, for free.
                                    </div>
                                </div>
                            </div>
                            <div className="tool-item flex-row full-width space-between">
                                <img className="logo" src="/img/tools/rocket.svg" alt="puzzle img"/>
                                <div className="tool-description flex-col">
                                    <h3>Real-time collaborative editing</h3>
                                    <div className="description">
                                        Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.
                                    </div>
                                </div>
                            </div>
                            <div className="tool-item flex-row full-width space-between">
                                <img className="logo" src="/img/tools/import.svg" alt="puzzle img"/>
                                <div className="tool-description flex-col">
                                    <h3>Integrations with the Cloud API</h3>
                                    <div className="description">
                                        Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="illustration-part">
                        <img className="logo" src="/img/illustration/illustration_works.svg" alt="illustration work"/>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default HowItWorks;