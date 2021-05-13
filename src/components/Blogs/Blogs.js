import React from 'react';
import { withRouter } from 'react-router';
import Blog from './Blog/Blog';
import { withAuth } from '../../auth-context';
import './Blogs.css';

const Blogs = (props) => {
    const receivedBlogs = props.blogs;
    const userType = props.userType;


    const blogClickHandler = (id) => {
        if (userType !== 'guest') {
            props.history.push({
                pathname: `/${userType}/updateblog/${id}`,
                state: {
                    userType: userType
                }
            })
        }
    }

    const blogs = receivedBlogs.map((blog, index) => {
        return (
            <div className="Blogs">
                <Blog key={index} onClick={() => blogClickHandler(blog.id)} blog={blog} />
            </div>);
    });

    return (
        <div className="Blogs">
            {blogs}
        </div>
    );
};

export default withRouter(withAuth(Blogs));