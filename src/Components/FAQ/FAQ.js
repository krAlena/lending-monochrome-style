import React, {useState, useEffect} from "react";
import {Element} from "react-scroll";
import "./FAQ.sass";
import { FAQ_ID } from "../../Constants/routes";
import QuestionBlock from "./QuestionBlock";

const FAQ = () => {
    const arrQuestions = [
        {
            _id: 0,
            title: "How much does a Teams subscription cost?",
            answer: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details."
        },
        {
            _id: 1,
            title: "Do I still need to purchase licenses for the Mac app?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id viverra nibh eros, aliquet purus molestie eu convallis. Pellentesque eu egestas lectus integer sollicitudin odio. Quis lectus ante at lacus ut. Pretium fermentum ac convallis pharetra lacus nibh at sit est. Sit donec nulla nisl, praesent est egestas faucibus ullamcorper curabitur."
        },
        {
            _id: 2,
            title: "What are the differences between Contributors and Viewers?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id viverra nibh eros, aliquet purus molestie eu convallis."
        },
        {
            _id: 3,
            title: "How long does the free Teams subscription trial last?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id viverra nibh eros, aliquet purus molestie eu convallis. Pellentesque eu egestas lectus integer sollicitudin odio. Quis lectus ante at lacus ut. Pretium fermentum ac convallis pharetra lacus nibh at sit est. Sit donec nulla nisl, praesent est egestas faucibus ullamcorper curabitur. Fringilla mattis blandit felis cursque."
        },
        {
            _id: 4,
            title: "Will program for Teams replace volume licensing?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id viverra nibh eros, aliquet purus molestie eu convallis. Pellentesque eu egestas lectus integer sollicitudin odio. Quis lectus ante at lacus ut. Pretium fermentum ac convallis pharetra lacus nibh at sit est. Sit donec nulla nisl, praesent est egestas faucibus ullamcorper curabitur."
        }
    ]

    return (
        <Element name={FAQ_ID}>
            <section className="page faq">
                <div className="page-content faq-content flex-row space-between">
                    <div className="flex-col main-info">
                        <div className="top-block">
                            <div className="flex-row">
                                <div className="bordered-title uppercase">FAQS</div>
                            </div>
                            <h2>Common Questions.</h2>
                            <div className="description">
                                The online form also provides links to a set of frequently
                                asked questions, other information materials related to
                                the financial disclosure programme.
                            </div>
                        </div>
                        <div className="questions-list">
                            {
                                Array.isArray(arrQuestions) && arrQuestions.length > 0
                                    ?   arrQuestions.map((el,index) => <QuestionBlock isOpened={(index===0)} questionObj={el}/>)
                                    :   null
                            }

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