import React, {useEffect} from 'react'
import s from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizes} from "../../store/actions/quiz";

const QuizList = ({quizes, loading, fetchQuizes}) => {

    useEffect(() => {
        fetchQuizes()
    }, [quizes != null])


    const renderQuizes = () => {
        return quizes.map(quiz => {
            return (
                <li key={quiz.id}>
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

            {loading || quizes == null
                ? <Loader/>
                : <ul>
                    {renderQuizes()}
                </ul>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

export default connect(mapStateToProps, {fetchQuizes})(QuizList)