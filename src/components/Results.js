import React from 'react'
import { FeedbackList } from './FeedbackList';
export const Results = ({resultMessage, resultPercent, feedbacks, setShowing}) => {
    return (
        
        <div className="card" style={{width: '50%', margin:'auto', marginTop:'2em'}}>        
                <div className="card-body">
                <h5 className="card-title">Results ({resultPercent}%)</h5>
                <p>{resultMessage}</p>
                <FeedbackList feedbacks={feedbacks}/><br/>
                <a href="#" onClick={()=>setShowing('welcome')} className="btn btn-primary">Retry</a>
                </div>
        </div>
        
    )
}