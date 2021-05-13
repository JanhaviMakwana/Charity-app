import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const blog = props.blog
    return (
        <div className="Blog" onClick={props.onClick}>
            <p className="Title">{blog.title}</p>
            <p className="Desc">{blog.description}</p>
            <h3 className="Year">{blog.year}</h3>
            <h3 className="Rating">{blog.rating}</h3>
        </div>
    );
};

export default Blog;