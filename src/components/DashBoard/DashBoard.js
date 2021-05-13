import React, { useState } from 'react';
import AppBar from '../DashBoard/AppBar';
import Drawer from '../DashBoard/Drawer';
import { withAuth } from '../../auth-context';
const DashBoard = React.memo((props) => {
    console.log("DashBoard props");
    console.log(props);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <AppBar onClick={handleDrawerOpen} />
            <Drawer onClick={handleDrawerClose} open={open} permissions={props.permissions} />
        </div>
    );
});

export default withAuth(DashBoard);