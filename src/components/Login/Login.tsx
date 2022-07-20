import * as React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer.ts";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormControl/FormsControl.module.css";

type PropsType = {
    handleSubmit: any,
    error: any,
    captchaUrl: () => void
}


const LoginForm: React.FC<PropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email",
                "email",
                [required, maxLengthCreator(30)],
                Input)}
            {createField(
                "Password",
                "password",
                [required, maxLengthCreator(30)],
                Input,
                {type: "password"}
            )}
            {createField(
                null,
                "rememberMe",
                [],
                Input,
                {type: "checkbox"},
                "Remember Me"
            )}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&
                createField(
                "Symbols from image",
                "captcha",
                [required],
                Input,
                )}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {login})(Login);
