import React, {useEffect, useState} from 'react'
import s from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

const QuizList = props => {

    const [state, setState] = useState({
            quizes: [],
            loading: true
        }
    )

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get('/quizes.json')
                    const quizes = []
                    Object.keys(response.data).forEach((key, index) => {
                        quizes.push({
                            id: key,
                            name: `Test #${index + 1}`
                        })
                    })

                    setState({
                        ...state,
                        quizes,
                        loading: false
                    })

                } catch (e) {
                    console.log(e)
                }

            }
        )()
    }, [state.loading])


    const renderQuizes = () => {
        return state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
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

            {state.loading
                ? <Loader/>
                : <ul>
                    {renderQuizes()}
                </ul>
            }

        </div>
    )
}

export default QuizList