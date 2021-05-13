import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { roles } from '../../../assets/config';
import { Button, TextField, Typography, Select, MenuItem, InputLabel } from '@material-ui/core';
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
        width: '45%', // Fix IE 11 issue.
    }
}));

const UpdateCharity = (props) => {

    const classes = styles();
    const charity = props.charity;
    const [firstname, setFirstname] = useState(charity.firstname);
    const [lastname, setLastname] = useState(charity.lastname);
    const [country, setCountry] = useState(charity.country);
    const [amount, setAmount] = useState(charity.amount);
    const [paymentmode, setPaymentmode] = useState();

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

    const updatedCharity = {
        firstname: firstname,
        lastname: lastname,
        country: country,
        paymentmode: paymentmode ? paymentmode : charity.paymentmode,
        amount: amount,
    };


    const addCharityFormHandler = (event) => {
        event.preventDefault();
        props.setCharity(updatedCharity);
        props.history.push('/charity');
    };

    const deleteCharityHandler = () => {
        props.setCharity();
        props.setUserType('user');
        props.setPermissions(roles[1].permissions);
        props.history.push('/user');
    }

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
                    SAVE CHARITY
                        </Button>
            </form>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={deleteCharityHandler}
            >
                DELETE CHARITY
            </Button>
        </div>
    );
};

export default withRouter(withAuth(UpdateCharity));