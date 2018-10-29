import React, {Component} from 'react'
import { Welcome } from './Welcome';
import { QuestionContainer } from './QuestionContainer';
import Questions from '../api/questions';
import { Context } from '../Context';
import { ResultsContainer } from './ResultsContainer';

export default class LayoutContainer extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            showing : 'welcome',
            questions: []
        }
        this.setShowing = this.setShowing.bind(this)
        this.loadQuestions = this.loadQuestions.bind(this)        
    }
    componentDidMount(){
       this.loadQuestions()
    }
    loadQuestions(){
       new Promise((resolve, reject)=> Questions.loadQuestions(resolve, reject))
       .then(data=> this.setState({
             questions : data.results.map(e=> Object.assign({}, e, {question: e.question.replace(/&quot;/g, '"').replace(/&#039;/g,"'")}))
        })).catch(err=>console.log(err))        
       
    }
    setShowing(show){ 
        if(show === 'welcome') this.loadQuestions()     
        this.setState({showing: show})       
    }
    
    toRender(){
        switch(this.state.showing){
            case 'welcome':
                return <Welcome setShowing={this.setShowing}/>
            case 'question':
                return <QuestionContainer setShowing={this.setShowing}/>
            case 'result':
                return <ResultsContainer setShowing={this.setShowing}/>
            default:
                return <Welcome setShowing={this.setShowing}/>
        }           
    }
    render(){
        return (
                <div className="container">
                <Context.Provider value={this.state}>
                    {this.toRender()}
                </Context.Provider>
                </div>
            )
    }
}