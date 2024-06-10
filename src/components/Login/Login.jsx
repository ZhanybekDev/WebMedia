import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { connect } from "react-redux";
import { login, logout } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to='/profile' />;
    }

    const handleSubmit = (values, { setSubmitting, setStatus }) => {
        props.login(values.email, values.password, values.rememberMe)
            .then(response => {
                if (!response.success) {
                    setStatus(response.message);
                }
                setSubmitting(false);
            })
            .catch(error => {
                setStatus('An unexpected error occurred');
                setSubmitting(false);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
                validationSchema={loginFormSchema}>
                {({ isSubmitting, status }) => (
                    <Form>
                        <div>
                            <Field type={'text'} name={'email'} placeholder={'e-mail'} />
                        </div>
                        <ErrorMessage name="email" component="div" />

                        <div>
                            <Field type={'password'} name={'password'} placeholder={'password'} />
                        </div>
                        <ErrorMessage name="password" component="div" />

                        <div>
                            <Field type={'checkbox'} name={'rememberMe'} />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        {status && <div className="error">{status}</div>}

                        <button type={'submit'} disabled={isSubmitting}>Log in</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login, logout })(Login);
