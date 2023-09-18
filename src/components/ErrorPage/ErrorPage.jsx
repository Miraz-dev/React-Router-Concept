// import React from 'react';

import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {



    const error = useRouteError();
    console.log(error);


    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/')
    }


    return (
        <div>
            <h2>Oops {error.status} !!!</h2>
            <p>{error.message || error.statusText}</p>
            <button onClick={handleGoHome}>Go Home</button>
        </div>
    );
};

export default ErrorPage;