import React from 'react';
import './../scss/AskQuestionFooter.scss';

const AskQuestionFooter = ({ category })=>{
    return (
        <div className="ask-question-footer">
            {category.name && <div> &#x20B9; 150 ( 1 question on {category.name})</div>}
            <div onClick={()=>alert('No api provided to ask question')} className="wallet-balance-add-money">Ask now</div>
        </div>
    )
}

export default AskQuestionFooter;