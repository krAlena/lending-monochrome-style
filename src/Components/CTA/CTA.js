import React, {useState, useEffect} from "react";
import {Element} from "react-scroll";
import "./CTA.sass";
import { CTA_ID } from "../../Constants/routes";

const CTA = () => {

    return (
        <Element name={CTA_ID}>
            <section className="page cta">
                <div className="page-content cta-content flex-row space-between">
                    <div className="flex-col main-info">
                        <h1>Always Track <span className="symbol-font">&</span> Analyze Your Business Statistics To Succeed.</h1>
                        <div className="description">A better way to manage your sales, team, clients <span className="symbol-font">&</span> marketing
                        — on a single platform. Powerful, affordable <span className="symbol-font">&</span> easy.</div>
                        <div className="input-with-button flex-row">
                            <input className="get-started-input" placeholder="Enter your email"/>
                            <div className="button black btn-start without-margin">Get started</div>
                        </div>
                        <div className="icons-panel flex-row">
                            <img className="logo" src="/img/cards/visa.svg" alt="logo visa"/>
                            <img className="logo" src="/img/cards/mastercard.svg" alt="logo mastercard"/>
                            <img className="logo" src="/img/cards/paypall.svg" alt="logo paypall"/>
                        </div>
                    </div>
                    <div className="illustration-part">
                        <img className="logo" src="/img/illustration/illustration_cta.svg" alt="illustration CTA"/>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default CTA;