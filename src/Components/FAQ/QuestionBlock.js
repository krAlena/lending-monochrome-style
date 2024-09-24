import React, {useState} from "react";
import "./QuestionBlock.sass";
import PlusSvgIcon from "../Common/Icons/PlusSvgIcon";
import MinusSvgIcon from "../Common/Icons/MinusSvgIcon";

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
            {
                isVisibleAnswer
                    ?   <MinusSvgIcon className="icon btn" onClick={() => setIsVisibleAnswer(!isVisibleAnswer)}/>
                    :   <PlusSvgIcon className="icon btn" onClick={() => setIsVisibleAnswer(!isVisibleAnswer)}/>
            }
        </div>
    );
};

export default QuestionBlock;