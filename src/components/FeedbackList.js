import React from 'react'

export const FeedbackList = ({feedbacks}) => {
    return (
        <ul className="list-group">
            {
                feedbacks.map((e, i)=>
                     <li key={i}
                     className="list-group-item"
                     style={{backgroundColor: e.result === 'Correct'? '#66ff99' : '#ff5050'}}
                     >{e.question}<br/><strong>Correct Answer: {e.correct}</strong></li>)
            }
           
            
        </ul>
        
    )
}