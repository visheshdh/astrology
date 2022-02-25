import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { simpleAction } from '../actions';
import AskQuestionHeader from '../components/AskQuestionHeader';
import WalletBalance from '../components/WalletBalance';
import AskQuestion from '../components/AskQuestion'
import './../scss/AskQuestionPage.scss';

const AskQuestionPage = ()=>{
    // const dispatch = useDispatch()
    // const df = useSelector((state)=>console.log(state))
    return (
        <div>
            <div className="fixed-header-wrapper">
                <AskQuestionHeader />
                <WalletBalance />
            </div>
            <AskQuestion />
        </div>
    )
}

export default AskQuestionPage;