import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Login from '../auth/Login';
import { AppBar, Typography, Toolbar, Button, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { withAuth } from '../../auth-context';
import { roles } from '../../assets/config';

const styles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    loginBtn: {
        color: 'white'
    }
}));

const AppBarComp = React.memo((props) => {
    console.log("AppBar props");
    console.log(props);
    const classes = styles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        if (props.userType !== 'guest') {
            props.setUserType('guest')
            props.setPermissions(roles[0].permissions);
            props.history.push('/');
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar position="absolute">
            <Toolbar className={classes.toolbarIcon}>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={props.onClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    BLOG And CHARITY MANAGMENT SYSTEM
                </Typography>
                <Button onClick={handleClickOpen}>
                    <AccountCircleIcon style={{ color: 'white' }} />
                    <Typography className={classes.loginBtn} variant="h6">
                        {props.userType === 'guest' ? 'LOGIN' : 'LOGOUT'}
                    </Typography>
                </Button>
                <Login open={open} onClose={handleClose} />
            </Toolbar>
        </AppBar>
    );
});

export default withRouter(withAuth(AppBarComp));