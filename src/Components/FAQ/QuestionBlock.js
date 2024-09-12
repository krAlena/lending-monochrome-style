import React, {useState} from "react";
import "./QuestionBlock.sass";

const QuestionBlock = ({isOpened, questionObj}) => {
    const [isVisibleAnswer, setIsVisibleAnswer] = useState(isOpened);

    return (
        <div className="question-block flex-row full-width space-between">
            <div className="question-body flex-col">
                <div className="question-title">{questionObj.title}</div>
                <div className={!isVisibleAnswer ? "question-answer hidden" : "question-answer"}>
                    {questionObj.answer}
                </div>
            </div>
            <img className="icon btn"
                onClick={() => setIsVisibleAnswer(!isVisibleAnswer)}
                src={isVisibleAnswer ? "img/icons/minus.svg" : "img/icons/plus.svg"}
                alt={isVisibleAnswer ? "minus" : "plus"}
            />
        </div>
    );
};

export default QuestionBlock;