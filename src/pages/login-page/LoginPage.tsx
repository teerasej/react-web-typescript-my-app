import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function LoginPage() {

    const history = useHistory();

    const goRegisterPage = () => {
        history.push('/signup');
    }

    const startAuthentication = () => {
        // authen with api 

        // store token 

        history.push('/');
    }

    return (

        <div>
            <h1>Login: </h1>
            <p>Email:</p>
            <TextField />
            <p>Password:</p>
            <TextField />
            <div>
                <Button variant="contained" onClick={startAuthentication}>
                    Sign in
                </Button>
            </div>
            <div>
                <Button onClick={goRegisterPage}>
                    Create Account?
                </Button>
            </div>
        </div>
    )
}
