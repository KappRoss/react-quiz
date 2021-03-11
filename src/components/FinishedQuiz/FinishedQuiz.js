import React from 'react';
import Button from '../UI/Button/Button';
import classes from './FinishedQuiz.module.css';
import {Link} from "react-router-dom";

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'succes') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {

                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )

                })}
            </ul>

            <p>Correct answers: {successCount} out of {props.quiz.length}</p>

            <Button
                onClick={props.onRetry}
                type='primary'
            >Repeat</Button>
            <Link to={'/'}>
                <Button type='success'>go to list of tests</Button>
            </Link>
        </div>
    )
}

export default FinishedQuiz;