// import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {


    const params = useParams();
    console.log(params); //This will give params in the url 

    const postBody = useLoaderData();
    const {body, id, title} = postBody;

    const navigate = useNavigate();
    const handleGoback = () => {
        // navigate('/posts')
        navigate(-1)  
    }

    return (
        <div>
            <h2>Details of id: {id}</h2>
            <h3>Title: {title}</h3>
            <p>Details: {body}</p>
            <button onClick={handleGoback}>Go back</button>
        </div>
    );
};

export default PostDetails;