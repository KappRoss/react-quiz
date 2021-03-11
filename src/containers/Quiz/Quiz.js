import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.retryQuiz()
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <div className={classes.Header}>
                        <h1>Quiz</h1>
                    </div>
                    {
                        this.props.loading || !this.props.quiz
                            ? <Loader/>
                            : this.props.isFinished
                            ? <FinishedQuiz
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.props.retryQuiz}
                            />
                            : <ActiveQuiz
                                onAnswerClick={this.props.quizAnswerClick}
                                question={this.props.quiz[this.props.activeQuestion].question}
                                answers={this.props.quiz[this.props.activeQuestion].answers}
                                quizLength={this.props.quiz.length}
                                answerNumber={this.props.activeQuestion + 1}
                                answerState={this.props.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.quiz.results,
        activeQuestion: state.quiz.activeQuestion,
        isFinished: state.quiz.isFinished,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading,
    }
}

export default connect(mapStateToProps,{fetchQuizById, quizAnswerClick, retryQuiz})(Quiz);