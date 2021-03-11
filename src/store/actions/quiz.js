import axios from "../../axios/axios-quiz";
import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTION, QUIZ_RETRY,
    QUIZ_SET_STATE
} from "./actionTypes";

export const fetchQuizesStart = () => {
    return {
        type: FETCH_QUIZES_START
    }
}

export const fetchQuizesSuccess = (quizes) => {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export const fetchQuizesError = (error) => {
    return {
        type: FETCH_QUIZES_ERROR,
        error
    }
}

export const fetchQuizSuccess = (quiz) => {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export const quizSetState = (answerState, results) => {
    return {
        type: QUIZ_SET_STATE,
        answerState,
        results
    }
}

export const finishQuiz = () => {
    return {
        type: FINISH_QUIZ
    }
}

export const quizNextQuestion = (activeQuestion, answerState) => {
    return {
        type: QUIZ_NEXT_QUESTION,
        activeQuestion,
        answerState
    }
}

const isQuizFinished = (state) => {
    return state.activeQuestion + 1 === state.quiz.length
}

export const retryQuiz = () => {
    return {
        type: QUIZ_RETRY
    }
}
////// thunk below /////

export const fetchQuizes = () => {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test #${index + 1}`
                })
            })
            dispatch(fetchQuizesSuccess(quizes))
        } catch (e) {
            fetchQuizesError(e)
        }
    }
}

export const fetchQuizById = (quizId) => {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get(`/quizes/${quizId}.json`)
            const quiz = response.data

            dispatch(fetchQuizSuccess(quiz))

            dispatch(fetchQuizesSuccess())

        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export const quizAnswerClick = (answerId) => {
    return (dispatch, getState) => {
        const state = getState().quiz

        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (state.answerState[key] === 'succes') {
                return
            }
        }

        const question = state.quiz[state.activeQuestion];
        const results = state.results;

        if (Number.parseInt(question.rightAnswerId) === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'succes'
            }

            dispatch(quizSetState({[answerId]: 'succes'}, results))

            const timeout = window.setTimeout(() => {
                if (isQuizFinished(state)) {
                    dispatch(finishQuiz())
                } else {
                    dispatch(quizNextQuestion(state.activeQuestion + 1, null))
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            results[question.id] = 'error'
            dispatch(quizSetState({[answerId]: 'error'}, results))

        }

    }
}
