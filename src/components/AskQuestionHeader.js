import React from 'react';
import './../scss/AskQuestionHeader.scss';
import profile from './../assets/profile.png';
import hamburger from './../assets/hamburger.png'
import icon from './../assets/icon.png';
import { Link } from 'react-router-dom';

const AskQuestionHeader = ()=>{
    return <header>
        <div className="ask-question-header">
            <div className="ask-question-header-settings"><img src={hamburger}></img></div>
            <div className="ask-question-header-icon"><img src={icon}></img></div>
            <div className="ask-question-header-profile"><Link to="/profile"><img src={profile}></img></Link></div>
        </div>
    </header>
}

export default AskQuestionHeader;