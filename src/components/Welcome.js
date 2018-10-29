import React from 'react'

export const Welcome = ({setShowing}) => {
    return (
        <div className="card" style={{width: '50%', margin:'auto', marginTop:'2em'}}>
       
        <div className="card-body">
          <h5 className="card-title">Welcome to Trivia</h5>
          <p className="card-text">You will be presented with 10 True or False questions. Can you score 100%?</p>
          <a href="#" onClick={()=>setShowing('question')} className="btn btn-primary">Start quizz</a>
        </div>
      </div>
    )
}