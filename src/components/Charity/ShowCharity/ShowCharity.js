import React from 'react';
import { withAuth } from '../../../auth-context';
/* import { makeStyles } from '@material-ui/core/styles'; */

const ShowCharity = (props) => {
    const charity = props.charity;
    console.log(charity);
    console.log("showCharity");
    return (
        <div style={{ marginTop: '100px' }}>
            <p>Charity Details</p>
            <p>{charity.firstname + " " + charity.lastname} </p>
            <p>{charity.country}</p>
            <p>{charity.paymentmode}</p>
            <p>{charity.amount}</p>
        </div>
    );
};

export default withAuth(ShowCharity);
