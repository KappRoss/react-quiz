import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  constructor(props){
    super(props)
    this.launchClock()
    this.state = {
      currentTime: new Date().toLocaleString(),
      quiz: {
        answers: [
          {text: 'answer 1'},
          {text: 'answer 2'},
          {text: 'answer 3'},
          {text: 'answer 4'},
          {text: 'answer 4'},
        ]
      }
    }
  }

  launchClock(){
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      })
    }, 1000)
  }

  render() {
    return(
      <div className = {classes.Quiz}>
        <div className = {classes.QuizWrapper}>
          <div className = {classes.Header}>
            <h1>Quiz</h1>
            <div className = {classes.Timer}>{this.state.currentTime}</div>
          </div>
          
          <ActiveQuiz 
            answers = {this.state.quiz.answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;