import React from 'react';
import { withRouter } from 'react-router';
import { IconButton, List, ListItem, ListItemText, Typography, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withAuth } from '../../auth-context';
import blogsData from '../../assets/blogs';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    }

}));

const AppDrawer = (props) => {

    console.log("Drawer props");
    const classes = useStyles();
    console.log(props);
    let userType = props.userType;
    let blogs = null;
    if (props.location.state && props.location.state.blogs) {
        blogs = props.location.state.blogs
    }
    const addBlogClickHandler = () => {
        props.history.push({
            pathname: `/${userType}/addblog`,
            state: {
                userType: userType
            }
        })
        props.onClick();
    };

    const showBlogsClickHandler = () => {
        if (userType === 'guest') {
            props.history.push('/showblogs')

        } else {
            props.history.push({
                pathname: `/${userType}/showblogs`,
                state: {
                    userType: userType,
                    blogs: blogs !== null ? blogs : blogsData
                }
            })
        }
        props.onClick();
    };

    const addCharityClickHandler = () => {
        props.history.push({
            pathname: `/${userType}/addcharity`,
            state: {
                userType: userType
            }
        })
        props.onClick();
    }

    const homeClickHandler = () => {
        if (props.location.state && props.location.state.userType) {
            userType = props.location.state.userType
        }
        if (userType === 'guest') {
            props.history.push('/');
        } else {
            props.history.push({
                pathname: `/${userType}`,
                state: {
                    ...props.location.state
                }
            });
        }
        props.onClick();
    }

    const ShowCharityClickHandler = () => {
        props.history.push({
            pathname: `/${userType}/showcharity`,
            state: {
                userType: userType
            }
        })
        props.onClick();
    }

    //console.log(Object.keys(permissions).length);
    const guestOptions = (
        <List>
            <ListItem button onClick={homeClickHandler}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={showBlogsClickHandler}>
                <ListItemText primary="Show Blogs" />
            </ListItem>
        </List>
    );

    const userOptions = (
        <List>
            <ListItem button onClick={homeClickHandler}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={showBlogsClickHandler}>
                <ListItemText primary="Show Blogs" />
            </ListItem>
            <ListItem button onClick={addBlogClickHandler}>
                <ListItemText primary="Add Blog" />
            </ListItem>
            <ListItem button onClick={addCharityClickHandler}>
                <ListItemText primary="Add Charity" />
            </ListItem>
            <ListItem button onClick={homeClickHandler}>
                <ListItemText primary="Show Charity" />
            </ListItem>
        </List>
    );

    const charityOptions = (
        <List>
            <ListItem button onClick={homeClickHandler}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={showBlogsClickHandler}>
                <ListItemText primary="Show Blogs" />
            </ListItem>
            <ListItem button onClick={addBlogClickHandler}>
                <ListItemText primary="Add Blog" />
            </ListItem>
            <ListItem button onClick={ShowCharityClickHandler}>
                <ListItemText primary="Show Charity" />
            </ListItem>
        </List>
    );

    const adminOptions = (
        <List>
            <ListItem button onClick={homeClickHandler}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={showBlogsClickHandler}>
                <ListItemText primary="Show Blogs" />
            </ListItem>
            <ListItem button onClick={addBlogClickHandler}>
                <ListItemText primary="Add Blog" />
            </ListItem>
            <ListItem button onClick={addCharityClickHandler}>
                <ListItemText primary="Add Charity" />
            </ListItem>
            <ListItem button onClick={homeClickHandler}>
                <ListItemText primary="Show Charity" />
            </ListItem>
            <ListItem button onClick={homeClickHandler}>
                <ListItemText primary="Users Details" />
            </ListItem>
        </List>
    );
    //console.log(props.open);
    return (
        <div>
            <Drawer open={props.open} className={[classes.drawerPaper, !props.open && classes.drawerPaperClose].join(' ')} >
                <div>
                    <IconButton onClick={props.onClick}>
                        <Typography>BACK</Typography>
                    </IconButton>
                    {props.userType === 'guest' && guestOptions}
                    {props.userType === 'user' && userOptions}
                    {props.userType === 'charity' && charityOptions}
                    {props.userType === 'admin' && adminOptions}
                </div>
            </Drawer >
        </div>
    );
};


export default withRouter(withAuth(AppDrawer));
