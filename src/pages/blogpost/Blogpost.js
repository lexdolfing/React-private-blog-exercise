import React from 'react';
import posts from '../../data/posts.json'
import {useNavigate, useParams} from "react-router-dom";

export default function Blogpost() {
    const {blogId} = useParams();

    const currentPost = posts.find((post) => {
        return post.id === blogId;
    })

    return(
        <>
        <h1>{currentPost.title}</h1>
            <p>{currentPost.content}</p>
            <p>This post was added on {currentPost.date}</p>
        </>
    )
}