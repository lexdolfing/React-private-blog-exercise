import React from 'react';
import blogPosts from '../../data/posts.json'
import { Outlet, Link} from 'react-router-dom'


export default function BlogpostsOverview() {
    return (
        <>
            <h1>Overview of blogposts</h1>
            <p>Aantal blogposts: {blogPosts.length}</p>
            <ul>
                {blogPosts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
                    </li>
                } )}
            </ul>
        </>
    )
}

