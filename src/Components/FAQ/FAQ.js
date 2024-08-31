import React, {useState, useEffect} from "react";
import {Element} from "react-scroll";
import "./FAQ.sass";
import { FAQ_ID } from "../../Constants/routes";

const FAQ = () => {

    return (
        <Element name={FAQ_ID}>
            <section className="page faq">
                <div className="page-content faq-content flex-row space-between">
                    <div className="flex-col main-info">
                        <div className="top-block">
                            <div className="flex-row">
                                <div className="button transparent with-border uppercase">FAQS</div>
                            </div>
                            <h2>Common Questions.</h2>
                            <div className="description">
                                The online form also provides links to a set of frequently
                                asked questions, other information materials related to
                                the financial disclosure programme.
                            </div>
                        </div>
                        <div className="questions-list">
                            <div className="question-block flex-row full-width space-between">
                                <div className="question-body flex-col">
                                    <div className="question-title">How much does a Teams subscription cost?</div>
                                    <div className="question-answer">
                                        Contributors are members of your team who need access to use
                                        the Mac app to create and edit Sketch documents. These prices don’t include sales
                                        tax, which may still apply. Head over to our pricing page to get full details.
                                    </div>
                                </div>
                                <img className="icon btn" src="/img/icons/plus.svg" alt="plus"/>
                            </div>
                            <div className="question-block flex-row full-width space-between">
                                <div className="question-body flex-col">
                                    <div className="question-title">Do I still need to purchase licenses for the Mac app?</div>
                                    {/* <div className="question-answer">
                                        Contributors are members of your team who need access to use
                                        the Mac app to create and edit Sketch documents. These prices don’t include sales
                                        tax, which may still apply. Head over to our pricing page to get full details.
                                    </div> */}
                                </div>
                                <img className="icon btn" src="/img/icons/minus.svg" alt="minus"/>
                            </div>
                            <div className="question-block flex-row full-width space-between">
                                <div className="question-body flex-col">
                                    <div className="question-title">What are the differences between Contributors and Viewers?</div>
                                    {/* <div className="question-answer">
                                        Contributors are members of your team who need access to use
                                        the Mac app to create and edit Sketch documents. These prices don’t include sales
                                        tax, which may still apply. Head over to our pricing page to get full details.
                                    </div> */}
                                </div>
                                <img className="icon btn" src="/img/icons/minus.svg" alt="minus"/>
                            </div>
                            <div className="question-block flex-row full-width space-between">
                                <div className="question-body flex-col">
                                    <div className="question-title">How long does the free Teams subscription trial last?</div>
                                    {/* <div className="question-answer">
                                        Contributors are members of your team who need access to use
                                        the Mac app to create and edit Sketch documents. These prices don’t include sales
                                        tax, which may still apply. Head over to our pricing page to get full details.
                                    </div> */}
                                </div>
                                <img className="icon btn" src="/img/icons/minus.svg" alt="minus"/>
                            </div>
                            <div className="question-block flex-row full-width space-between">
                                <div className="question-body flex-col">
                                    <div className="question-title">Will program for Teams replace volume licensing?</div>
                                    {/* <div className="question-answer">
                                        Contributors are members of your team who need access to use
                                        the Mac app to create and edit Sketch documents. These prices don’t include sales
                                        tax, which may still apply. Head over to our pricing page to get full details.
                                    </div> */}
                                </div>
                                <img className="icon btn" src="/img/icons/minus.svg" alt="minus"/>
                            </div>
                        </div>
                    </div>
                    <div className="illustration-part">
                        <img className="logo" src="/img/illustration/illustration_faq.svg" alt="illustration FAQ"/>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default FAQ;