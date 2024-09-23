import React from "react";
import {Element} from "react-scroll";
import "./HowItWorks.sass";
import { HOW_IT_WORKS_ID } from "../../Constants/routes";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PuzzleSvgIcon from "../Common/Icons/PuzzleSvgIcon";
import ImportSvgIcon from "../Common/Icons/ImportSvgIcon";
import RocketSvgIcon from "../Common/Icons/RocketSvgIcon";
import StructureSvgIcon from "../Common/Icons/StructureSvgIcon";

const HowItWorks = () => {

    return (
        <Element name={HOW_IT_WORKS_ID}>
            <section className="page how-it-works">
                <div className="page-content how-it-works-content flex-row space-between">
                    <div className="flex-col main-info">
                        <div className="flex-row">
                            <div className="bordered-title uppercase">How it works</div>
                        </div>
                        <h2>Building the best space for collaboration.</h2>
                        <div className="illustration-part-mob mob-visible">
                            <div className="hightlight-spot hidden-on-light-theme"></div>
                            <LazyLoadImage
                                className="logo"
                                alt="illustration work"
                                effect="blur"
                                src="img/illustration/illustration_works.svg"
                            />
                        </div>
                        <div className="tools-list flex-col">
                            <div className="tool-item full-width space-between">
                                <PuzzleSvgIcon className="logo icon"/>
                                <div className="tool-description flex-col">
                                    <h3>Shared Cloud Libraries</h3>
                                    <div className="description">
                                        Navigate to the Your work panel in the left sidebar. 
                                        Select the library you want to share. Select the Share 
                                        icon in the upper right to share the library.
                                    </div>
                                </div>
                            </div>
                            <div className="tool-item full-width space-between">
                                <StructureSvgIcon className="logo icon"/>
                                <div className="tool-description flex-col">
                                    <h3>Free developer handoff, right inside</h3>
                                    <div className="description">
                                        Cloud Inspector makes it easy for developers to get 
                                        the information they need to turn pixels into code — 
                                        all in the browser and, most importantly, for free.
                                    </div>
                                </div>
                            </div>
                            <div className="tool-item full-width space-between">
                                <RocketSvgIcon className="logo icon"/>
                                <div className="tool-description flex-col">
                                    <h3>Real-time collaborative editing</h3>
                                    <div className="description">
                                        Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.
                                    </div>
                                </div>
                            </div>
                            <div className="tool-item full-width space-between">
                                <ImportSvgIcon className="logo icon"/>
                                <div className="tool-description flex-col">
                                    <h3>Integrations with the Cloud API</h3>
                                    <div className="description">
                                        Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="illustration-part mob-hidden">
                        <div className="hightlight-spot hidden-on-light-theme"></div>
                        <LazyLoadImage
                            className="logo"
                            alt="illustration work"
                            effect="blur"
                            src="img/illustration/illustration_works.svg"
                        />
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default HowItWorks;