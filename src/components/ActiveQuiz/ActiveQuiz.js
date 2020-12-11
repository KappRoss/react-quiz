import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
  return (
    <div className = {classes.ActiveQuiz}>
      <p className = {classes.Question}>
        <span>
          <stong>1.</stong>&nbsp;
          How are you?
        </span>
        <small>4 out of 10</small>
      </p>
      <AnswersList 
        answers = {props.answers}
      /> 
    </div>
  )
}

export default ActiveQuiz;