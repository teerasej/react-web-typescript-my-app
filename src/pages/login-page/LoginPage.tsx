import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function LoginPage() {
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
        </div>
    )
}
