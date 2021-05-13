import React from 'react';
import { withRouter } from 'react-router';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Avatar, Button, CssBaseline, TextField, Typography, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { users } from '../../assets/config';
import { withAuth } from '../../auth-context';

const styles = ((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '25px'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    valid: {
        borderBottom: '2px solid red'
    }
}));


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userType: 'guest'
        }
    };



    usernameChangeHandler = (event) => {
        this.setState({ username: event.target.value })
    };

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    };

    formSubmitHandler = (event) => {
        event.preventDefault();
        const usersData = users;
        let userType = '';
        let permissions = '';
        for (let key in usersData) {
            if (usersData[key].username === this.state.username) {
                if (usersData[key].password === this.state.password) {
                    userType = usersData[key].role.name;
                    this.props.setUserType(userType);
                    permissions = usersData[key].role.permissions;
                    console.log(permissions);
                    this.props.setPermissions(permissions);
                }
            }
        }
        const counter = setTimeout(() => {
            this.routeHandler(userType);
            this.props.onClose();
            return clearInterval(counter);
        }, [30])

    };
    loginCloseHandler = () => {
        this.props.history.goBack();
    };

    routeHandler = (type) => {
        this.props.history.push(`/${type}`);
    }

    render() {
        return (
            <Modal open={this.props.open} onClose={this.props.onClose}>
                <Container maxWidth="sm">
                    <CssBaseline>
                        <div className={this.props.classes.paper}>
                            <Avatar className={this.props.classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={this.props.classes.form} noValidate onSubmit={this.formSubmitHandler}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="User Name"
                                    autoComplete="username"
                                    autoFocus
                                    value={this.state.username}
                                    onChange={this.usernameChangeHandler}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.passwordChangeHandler}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={this.props.classes.submit}
                                >
                                    Sign In
                                </Button>
                            </form>
                        </div>
                    </CssBaseline>
                </Container>
            </Modal>
        );
    }
};


export default withStyles(styles)(withRouter(withAuth(Login)));