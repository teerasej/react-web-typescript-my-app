import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'

export default function LoginPage() {

    const history = useHistory();

    const goRegisterPage = () => {
        history.push('/signup');
    }

    return (

        <div>
            <h1>Login: </h1>
            <p>Email:</p>
            <TextField />
            <p>Password:</p>
            <TextField />
            <div>
                <Button variant="contained">
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
