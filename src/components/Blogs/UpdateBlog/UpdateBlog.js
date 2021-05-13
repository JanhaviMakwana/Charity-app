import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Container, CssBaseline, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withAuth } from '../../../auth-context';

const styles = makeStyles(() => ({
    paper: {
        margin: '100px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '25px'

    },
    form: {
        width: '90%',

    },
    submit: {
        padding: '10px',
        borderRadius: '10px'
    },
    label: {
        margin: '5px',
        padding: '10px',
        float: 'left'
    }
}));


const UpdateBlog = (props) => {

    const userType = props.userType;
    const { id } = props.match.params
    const blog = props.blogs.find(x => x.id === id);
    const classes = styles();
    const [blogId, setBlogId] = useState(blog.id);
    const [title, setTitle] = useState(blog.title);
    const [desc, setDesc] = useState(blog.description);
    const [year, setYear] = useState(blog.year);
    const [rating, setRating] = useState(blog.rating);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };


    const descChangeHandler = (event) => {
        setDesc(event.target.value);
    };

    const yearChangeHandler = (event) => {
        setYear(event.target.value);
    };

    const ratingChangeHandler = (event) => {
        setRating(event.target.value);
    };

    const idChangeHandler = (event) => {
        setBlogId(event.target.value);
    };

    const submitClickHandler = (event) => {
        event.preventDefault();
        const blog = [
            {
                id: id,
                title: title,
                description: desc,
                year: year,
                rating: rating
            }
        ];

        const filterdblogs = props.blogs.fiter(x => x.id !== id);
        const updatedBlogs = filterdblogs.concat(blog);
        props.setBlogs(updatedBlogs);
        props.history.push(`/${userType}/showblogs`);
    }


    return (
        <Container maxWidth="sm">
            <CssBaseline>
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={submitClickHandler}>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Id"
                            value={blogId}
                            autoComplete="blogId"
                            autoFocus
                            onChange={idChangeHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Title"
                            value={title}
                            autoComplete="title"
                            autoFocus
                            onChange={titleChangeHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Description"
                            value={desc}
                            autoComplete="desc"
                            autoFocus
                            onChange={descChangeHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Year"
                            value={year}
                            autoComplete="year"
                            autoFocus
                            onChange={yearChangeHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Rating"
                            value={rating}
                            autoComplete="rating"
                            autoFocus
                            onChange={ratingChangeHandler}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            POST
                    </Button>

                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
};

export default withRouter(withAuth(UpdateBlog));