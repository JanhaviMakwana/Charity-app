import React, { useState } from 'react';
import {Button, TextField, Typography,Select, MenuItem, InputLabel } from '@material-ui/core';
import {  roles } from "../../../assets/config";
import { withRouter } from 'react-router';
import { withAuth } from '../../../auth-context';
import { makeStyles } from '@material-ui/core/styles';

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
        width: '45%', // Fix IE 11 issue.
    }
}));

const AddCharity = (props) => {

    const classes = styles();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentmode, setPaymentmode] = useState('');

    const firstnameChangeHandler = (event) => {
        setFirstname(event.target.value);
    };

    const lastnameChangeHandler = (event) => {
        setLastname(event.target.value);
    };

    const countryChangeHandler = (event) => {
        setCountry(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const paymentmodeChangeHandler = (event) => {
        setPaymentmode(event.target.value);
    };

    const charity = {
        firstname: firstname,
        lastname: lastname,
        country: country,
        paymentmode: paymentmode,
        amount: amount,
    };

    const addCharityFormHandler = (event) => {
        event.preventDefault();
        props.setCharity(charity);
        props.setUserType('charity');
        props.setPermissions(roles[3].permissions);
        props.history.push('/charity');
    };

    return (
        <div className={classes.paper}>

            <Typography component="h1" variant="h5">
                Charity Details
                        </Typography>
            <form className={classes.form} noValidate onSubmit={addCharityFormHandler}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="Firstname"
                    value={firstname}
                    autoComplete="firstname"
                    autoFocus
                    onChange={firstnameChangeHandler}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Lastname"
                    value={lastname}
                    autoComplete="lastname"
                    autoFocus
                    onChange={lastnameChangeHandler}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    value={country}
                    autoComplete="country"
                    autoFocus
                    onChange={countryChangeHandler}
                />

                <InputLabel className={classes.label}>Payment Mode</InputLabel>

                <Select
                    label="paytmentmode"
                    value={paymentmode}
                    variant="outlined"
                    labelWidth={100}
                    onChange={paymentmodeChangeHandler}
                    className={classes.select}
                    id="paytmentmode"
                    autoFocus
                >
                    <MenuItem value="online">Online</MenuItem>
                    <MenuItem value="check">Check</MenuItem>
                    <MenuItem value="cash">Cash</MenuItem>
                </Select>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="amount"
                    label="Amount"
                    value={amount}
                    autoComplete="amount"
                    autoFocus
                    onChange={amountChangeHandler}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    ADD
                        </Button>
            </form>
        </div>
    );

};

export default withRouter(withAuth(AddCharity));


