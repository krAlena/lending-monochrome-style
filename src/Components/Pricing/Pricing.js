import React from "react";
import {Element} from "react-scroll";
import "./Pricing.sass";
import { PRICING_ID } from "../../Constants/routes";

const Pricing = () => {
    return (
        <Element name={PRICING_ID}>
            <section className="page pricing">
                <div className="page-content pricing-content flex-col">
                    <div className="top-info flex-row full-width space-between">
                        <div className="illustration-part">
                            <img className="logo" src="/img/illustration/illustration_price.svg" alt="illustration Price"/>
                        </div>
                        <div className="flex-col main-info">
                            <div className="flex-row">
                                <div className="bordered-title uppercase">Pricing</div>
                            </div>
                            <h2>Select a membership level the right price for you.</h2>
                            <div className="description">
                                Prices listed in USD. Taxes may apply.
                            </div>
                            <div className="description">
                                By using program you agree to our terms and policies.
                            </div>
                        </div>
                    </div>
                    <div className="price-plans flex-row">
                        <div className="price-plan-item flex-col space-between">
                            <div className="top-info">
                                <div className="price-block flex-row">
                                    <div className="dollar-sign">$</div>
                                    <div className="price">49</div>
                                    <div className="period">per month</div>
                                </div>
                                <div className="description medium">A pay-once license, just for you</div>
                                <ul className="plan-features-list flex-col">
                                    <li>The Mac app — yours to keep</li>
                                    <li>Beautiful White_level</li>
                                    <li>One year of saving to Cloud</li>
                                </ul>
                            </div>
                            <div className="button black without-margin">Join</div>
                        </div>
                        <div className="price-plan-item dark flex-col space-between">
                            <div className="top-info">
                                <div className="price-block flex-row">
                                    <div className="dollar-sign">$</div>
                                    <div className="price">99</div>
                                    <div className="period">per month</div>
                                </div>
                                <div className="description medium">Pro account, just for you</div>
                                <ul className="plan-features-list flex-col">
                                    <li>The Mac app — yours to keep</li>
                                    <li>One year of Mac app updates</li>
                                    <li>One year of saving to Cloud</li>
                                    <li>A personal Cloud workspace</li>
                                    <li>All tools, just for you</li>
                                </ul>
                            </div>
                            <div className="button without-margin">Join</div>
                        </div>
                        <div className="price-plan-item light flex-col space-between">
                            <div className="top-info">
                                <div className="price-block flex-row">
                                    <div className="dollar-sign">$</div>
                                    <div className="price">299</div>
                                    <div className="period">per month</div>
                                </div>
                                <div className="description medium">A subscription for the whole team</div>
                                <ul className="plan-features-list flex-col">
                                    <li>Access to the Mac app for all</li>
                                    <li>A shared Cloud workspace</li>
                                    <li>Free Cloud access for unlim</li>
                                    <li>Easy team management</li>
                                    <li>No license key required</li>
                                </ul>
                            </div>
                            <div className="button black without-margin">Join</div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
};

export default Pricing;