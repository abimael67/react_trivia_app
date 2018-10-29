import React, {Component} from 'react'
import { Context } from '../Context';
import { Results } from './Results';

class ResultsContainerFactory extends Component  {
    constructor(props){
        super(props) 
        this.correctAnswers = 0
        this.output = this.checkAnswers()
        this.resultPercent = (this.correctAnswers/(props.questions.length)*100)        
        this.getResultMessage = this.getResultMessage.bind(this)
    }
    checkAnswers(){
        return this.props.questions.reduce((pv, cv)=>{
            let res = {question: cv.question, correct: cv.correct_answer, answer:cv.answered}
            if(cv.answered === cv.correct_answer){
                this.correctAnswers += 1
                Object.assign(res, res, {result:'Correct'})
            }else{
                Object.assign(res, res, {result:'Incorrect'})
            }
            pv.push(res)
            return pv
        },[])
        
    }
    getResultMessage(){
       let perc = this.resultPercent
       if(perc === 100)
            return 'Congrats, you are the best!'
        if(perc < 100 && perc > 80)
            return 'Great job!. We are sure you can achieve the max score.'
        if(perc <= 80 && perc > 60)
            return 'You did okay. Would you like to try for a better score?'
        if(perc <= 60 && perc > 30)
            return 'You can do better. Try again.'
        if(perc <= 30)
            return 'Ouch, not too good score. You should retry.'
    }
    
  
    render(){       
        return (                
            <Results resultMessage={this.getResultMessage()} resultPercent={this.resultPercent} feedbacks={this.output} setShowing={this.props.setShowing}/>
            )
    }
}

export const ResultsContainer = React.forwardRef((props, ref)=>(
    <Context.Consumer>
        {
            (context)=><ResultsContainerFactory {...props} ref={ref} {...context} />
        }                   
  </Context.Consumer>
))