import React, { useEffect, useState } from 'react';
import './../scss/AskQuestion.scss';
import ReactSelect from 'react-select';
import axios from 'axios';
import { apiUrl } from './../utils';
import KeyFeatures from './KeyFeatures';
import AskQuestionFooter from './AskQuestionFooter';

const AskQuestion = ()=>{
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [textValue, setTextValue] = useState('')

    useEffect(()=>{
        (async ()=>{
            const resp = await axios.get(`${apiUrl}question/category/all`);
            setCategories(resp.data.data)
        })()
    }, []);
    
    let suggestions = [];
    let categoryObj = {};
    if(category){
        categoryObj = categories.find((cat)=>cat.name === category)
        suggestions = categoryObj.suggestions
    }
    return (
        <div className="ask-question">
            <div className="ask-question-heading"><h4>Ask a question</h4></div>
            <div>Lorem ipsum dolor sit amet. Ut quaerat omnis ut aliquam reprehenderit ea quasi doloribus ea eligendi temporibus aut sunt nihil. Id velit expedita sit dolorem tempora ea tenetur odio sit tenetur maxime et tenetur veniam qui ipsum recusandae? Ut soluta quis eos porro atque et Quis libero in quia ratione ea iusto illo ut velit labore et necessitatibus rerum.</div>
            <div className="ask-question-category-heading"><h4>Choose Category</h4></div>
            <div className="ask-question-category-select">
                <ReactSelect 
                    options={categories.map((opt)=>({label: opt.name, value: opt.name}))}
                    onChange={(e)=>setCategory(e.value)}
                    menuPortalTarget={document.body}
                    menuPosition={'fixed'} 
                    styles={{ 
                        menuPortal: base => ({ ...base, zIndex: 2000 }),
                    }}
                />
            </div>
            <div className="ask-question-category-question">
                <textarea
                    onChange={(e)=>setTextValue(e.target.value)}
                    value={textValue}
                    placeholder="Type a question"
                    rows="6"
                    style={{width: '100%'}}>
                </textarea>
            </div>
            {suggestions.length > 0 && <div className="ask-question-ideas-heading"><h4>Ideas what to ask (Select any one) </h4></div>}
            {suggestions.map((q, i)=>{ 
                return (
                    <div onClick={()=>setTextValue(q)} key={`ideas-${i}`} className="ask-question-ideas-question">{q}</div>
                )})
            }
            <div className="ask-question-help-text">Lorem ipsum dolor sit amet. Ut quaerat omnis ut aliquam reprehenderit ea quasi doloribus ea eligendi temporibus aut sunt nihil. Id velit</div>
            <KeyFeatures />
            <AskQuestionFooter category={categoryObj}/>
        </div>
    )
}

export default AskQuestion;