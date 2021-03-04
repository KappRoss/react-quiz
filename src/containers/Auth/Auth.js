import React, {useState} from 'react'
import s from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js'

const Auth = props => {

    const [state, setState] = useState({
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct Email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    })

    const validateControl = (value, validation) => {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return  isValid
    }

    const onChangeHandler = (event, controlName) => {
        const formControls = {...state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        setState({
            formControls,
            isFormValid
        })

    }

    const loginHandler = () => {

    }

    const registerHandler = () => {

    }

    const submitHandler = event => {
        event.preventDefault()
    }

    const renderInputs = () => {
        return  Object.keys(state.formControls).map((controlName, index) => {
            const control = state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={event => onChangeHandler(event, controlName)}
                />
            )
        })
    }

    return (
        <div className={s.Auth}>
            <div>
                <h1>Authorization</h1>
                <form
                    action=""
                    onSubmit={submitHandler}
                    className={s.AuthForm}
                >
                    {
                      renderInputs()
                    }
                    <Button
                        type="success"
                        onClick={loginHandler}
                        disabled={!state.isFormValid}
                    >
                        Login
                    </Button>

                    <Button
                        type="primary"
                        onClick={registerHandler}
                    >
                        Registration
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Auth