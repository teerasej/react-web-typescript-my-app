import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

export default function Main() {

    const [onLoading, setOnLoading] = useState(true);
    const history = useHistory();

    const alreadyLogin = false;

    useEffect(() => {
        // check token 

        if(alreadyLogin) {
            setOnLoading(false);
        } else {
            history.push('/login');
        }
    }, [])


    if (onLoading) {
        return (
            <CircularProgress />
        );
    } else {
        return (
            <div>Home</div>
        );
    }
}
