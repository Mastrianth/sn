import React from "react";
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import Redirect from "react-router-dom/es/Redirect";
import styles from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       validate={[required]}
                       name={"email"} component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required]} type={"password"}
                       name={"password"} component={Input} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(MapStateToProps, {login})(Login);