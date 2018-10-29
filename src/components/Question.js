import React from 'react'

export const Question = ({category, question, nextQuestion, questNo, total}) => {
    return (
        
            <div className="card" style={{width: '50%', margin:'auto', marginTop:'2em', backgroundColor:'#bfbfbf'}}>
        
            <div className="card-body">
            <h5 className="card-title">{category} ({questNo+1}/{total})</h5>
            <p className="card-text">{question}</p>
            <a href="#" onClick={()=>nextQuestion('True')} className="btn btn-primary">True</a>{" "}
            <a href="#" onClick={()=>nextQuestion('False')} className="btn btn-danger">False</a>
            </div>
        </div>
        
    )
}