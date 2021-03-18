import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function LoginPage() {



    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            const jsonFormData = JSON.stringify(values, null, 2);
            console.log('Login Form:', jsonFormData);
            startAuthentication(jsonFormData);
        },
    });
    const history = useHistory();


    const goRegisterPage = () => {
        history.push('/signup');
    }

    const startAuthentication = (json:any) => {
        // authen with api 

        // store token 

        history.push('/');
    }

    return (

        <div>
            <h1>Login: </h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div>
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <div>
                    <Button variant="contained" type="submit">
                        Sign in
                    </Button>
                </div>
                <div>
                    <Button onClick={goRegisterPage}>
                        Create Account?
                    </Button>
                </div>
            </form>
        </div>
    )
}
