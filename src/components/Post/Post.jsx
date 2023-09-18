// import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {title, id} = post;
    const postStyle = {
        border: "2px solid indigo",
        padding: "5px",
        borderRadius: "20px",
        marginBottom:"5px",
        display: "flex",
        flexDirection: "column"
    }

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    
    return (
        <div style={postStyle}>
            <h4>Post of ID: {id}</h4>
            <p style={{flexGrow:1}}>Title: {title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button style={{marginTop: "10px"}} onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;