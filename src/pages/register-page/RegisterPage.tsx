import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export default function RegisterPage() {

    const [onRegisterSuccesful, setOnRegisterSuccesful] = useState(false);

    const onStartRegisteration = () => {
        setOnRegisterSuccesful(true);
    }



    return (

        <div>
            <h1>Create new account</h1>
            <p>Email:</p>
            <TextField />
            <p>Password:</p>
            <TextField />
            <div>
                <Button variant="contained" onClick={onStartRegisteration}>
                    Register
                </Button>
            </div>
            <Dialog
                open={onRegisterSuccesful}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Registration Completed! Please login with your account.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button  color="primary">
                        ok
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
