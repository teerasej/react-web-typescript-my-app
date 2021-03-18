import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function RegisterPage() {
    return (

        <div>
            <h1>Create new account</h1>
            <p>Email:</p>
            <TextField />
            <p>Password:</p>
            <TextField />
            <div>
                <Button variant="contained">
                    Register
                </Button>
            </div>
        </div>
    )
}
