import React, {Component} from 'react'
import { Context } from '../Context';
import { Question } from './Question';

class QuestionContainerFactory extends Component  {
    constructor(props){
        super(props)
        
        this.state = {
            questionNo : 0,
        }
        this.nextQuestion = this.nextQuestion.bind(this)
    }
    nextQuestion(answer){
        let qNo = this.state.questionNo
        Object.assign(this.props.questions[qNo], this.props.questions[qNo], {answered:answer})
        if(qNo < 9){           
            this.setState({questionNo: qNo+1})
        }
        else{
            this.setState({questionNo: 0})
            this.props.setShowing('result')
        }
    }
    render(){
        let quest =this.props.questions[this.state.questionNo]
    return (                
             <Question category={quest.category} question={quest.question} questNo={this.state.questionNo} nextQuestion={this.nextQuestion} total={this.props.questions.length}/>
        )
    }
}

export const QuestionContainer = React.forwardRef((props, ref)=>(
    <Context.Consumer>
        {
            (context)=><QuestionContainerFactory {...props} ref={ref} {...context} />
        }                   
  </Context.Consumer>
))