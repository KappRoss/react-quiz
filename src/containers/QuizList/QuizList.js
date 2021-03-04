import React from 'react'
import s from './QuizList.module.css'
import {NavLink} from "react-router-dom";

const QuizList = props => {

    const renderQuizes = () => {
        return [1,2,3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    return (
        <div className={s.QuizList}>
            <div>
                <h1>Quiz List</h1>
            </div>
            <ul>
                { renderQuizes() }
            </ul>
        </div>
    )
}

export default QuizList