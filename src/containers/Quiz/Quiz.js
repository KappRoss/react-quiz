import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  // constructor(props){
  //   super(props)
  //   this.launchClock()
  //   this.state = {
  //     currentTime: new Date().toLocaleString(),
  //     activeQuestion: 0 ,
  //     quiz: {
  //       question: 'What color is the sky?',
  //       rightAnswerId: 2,
  //       answers: [
  //         {text: 'red', id: 1},
  //         {text: 'blue', id: 2},
  //         {text: 'green', id: 3},
  //         {text: 'white', id: 4}
  //       ]
  //     }
  //   }
  // }
  // launchClock(){
  //   setInterval(() => {
  //     this.setState({
  //       currentTime: new Date().toLocaleString()
  //     })
  //   }, 1000)
  // }

  state = {
    activeQuestion: 0 ,
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
        {text: 'Lviw', id: 1},
        {text: 'Odessa', id: 2},
        {text: 'Kharkiv', id: 3},
        {text: 'Kiev', id: 4}
      ]
    }
    ]
  }

  onAnswerClickHendler = (answerId) => {
    console.log('Answer id', answerId)

    const question = this.state.quiz[this.state.activeQuestion].rightAnswerId;

    if (question === answerId){
      console.log('true')

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()){
          console.log('finish')
        }
        else{
          this.setState({
            activeQuestion: this.state.activeQuestion + 1
          })
        }
        window.clearTimeout(timeout);
      }, 1500)

    }
    else{
      console.log('false')
    }

  }

  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
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
            onAnswerClick = {this.onAnswerClickHendler}
            question = {this.state.quiz[this.state.activeQuestion].question}
            answers = {this.state.quiz[this.state.activeQuestion].answers}
            quizLength = {this.state.quiz.length}
            answerNumber = {this.state.activeQuestion + 1}
          />

        </div>
      </div>
    )
  }
}

export default Quiz;