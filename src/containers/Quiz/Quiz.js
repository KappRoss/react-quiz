import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {

  state = {
    results: {},
    activeQuestion: 0,
    isFinished: false,
    answerState: null,
    quiz: [
    {
      id: 1,
      question: 'What color is the sky?',
      rightAnswerId: 2,
      answers: [
        {text: 'red', id: 1},
        {text: 'blue', id: 2},
        {text: 'green', id: 3},
        {text: 'white', id: 4}
      ]
    },
    {
      id: 2,
      question: 'What is the capital of Ukraine?',
      rightAnswerId: 4,
      answers: [
        {text: 'Lviv', id: 1},
        {text: 'Odessa', id: 2},
        {text: 'Kharkiv', id: 3},
        {text: 'Kiev', id: 4}
      ]
    }
    ]
  }

  onAnswerClickHendler = (answerId) => {
    // fix many clicks
    if(this.state.answerState){
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'succes'){
        return
      }
    }
    //
    
    
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId){
      if(!results[question.id]){
        results[question.id] = 'succes'
      }

      this.setState({
        answerState: {[answerId]: 'succes'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()){
          this.setState({
            isFinished: true
          })
        }
        else{
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout);
      }, 1000)
    }
    else{
      results[question.id] = 'error' 
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }

  }

  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    console.log('render' , this.state);
    return(
      <div className = {classes.Quiz}>
        <div className = {classes.QuizWrapper}>
          <div className = {classes.Header}>
            <h1>Quiz</h1>
            <div className = {classes.Timer}>{this.state.currentTime}</div>
          </div>
            {
              this.state.isFinished 
              ? <FinishedQuiz
                  results = {this.state.results}
                  quiz = {this.state.quiz}
                  onRetry = {this.retryHandler}
                /> 
              : <ActiveQuiz 
                  onAnswerClick = {this.onAnswerClickHendler}
                  question = {this.state.quiz[this.state.activeQuestion].question}
                  answers = {this.state.quiz[this.state.activeQuestion].answers}
                  quizLength = {this.state.quiz.length}
                  answerNumber = {this.state.activeQuestion + 1}
                  answerState = {this.state.answerState}
                />
            }
          

        </div>
      </div>
    )
  }
}

export default Quiz;