import React, {useState} from 'react'
import s from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";
import {createControl, validate, validateForm} from '../../form/formFramework'
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import axios from "../../axios/axios-quiz";

function createOptionControl(number) {
    return createControl({
        label: `option ${number}`,
        errorMessage: 'cant be empty!',
        id: number
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Enter question',
            errorMessage: 'it empty!'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

const QuizCreator = props => {

    const [state, setState] = useState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    })

    const changeHandler = (value, controlName) => {

        const formControls = {...state.formControls}
        const control = {...formControls[controlName]}

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        setState({
            ...state,
            formControls,
            isFormValid: validateForm(formControls)
        })

    }

    const renderControls = () => {
        return Object.keys(state.formControls).map((controlName, index) => {
            let control = state.formControls[controlName]
            return (
                <>
                    <Input
                        key={controlName + index}
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </>
            )
        })
    }

    const addQuestionHandler = event => {
        event.preventDefault()

        const quiz = state.quiz.concat()
        const index = quiz.length + 1

        const {question, option1, option2, option3, option4} = state.formControls

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }

        quiz.push(questionItem)
        setState({
            ...state,
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        })

    }
    const createQuizHandler = async (event) => {
        event.preventDefault()

        try {
            await axios.post('/quizes.json', state.quiz)

            setState({
                quiz: [],
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFormControls()
            })

        } catch (e) {
            console.log(e)
        }
    }

    const selectChangeHandler = event => {
        setState({
            ...state,
            rightAnswerId: event.target.value
        })
    }

    const select = <Select
        label={'Choose right answer '}
        value={state.rightAnswerId}
        onChange={selectChangeHandler}
        options={[
            {text: 1, value: 1},
            {text: 2, value: 2},
            {text: 3, value: 3},
            {text: 4, value: 4},
        ]}
    />

    return (
        <div className={s.QuizCreator}>
            <div>
                <h1>Create Quiz</h1>
                <form onSubmit={event => event.preventDefault()}>

                    {
                        renderControls()
                    }

                    {select}

                    <Button
                        type={'primary'}
                        onClick={addQuestionHandler}
                        disabled={!state.isFormValid}
                    >
                        Add question
                    </Button>
                    <Button
                        type={'success'}
                        onClick={createQuizHandler}
                        disabled={state.quiz.length === 0}
                    >
                        Create test
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default QuizCreator