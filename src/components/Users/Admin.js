import React, { useState } from 'react';
import { roles } from '../../assets/config';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        width: '500px',
        margin: '10px auto',
        backgroundColor: '#E8E8E8'
    },
    header: {
        fontWeight: 'bold'
    },
    disable: {
        color: 'gray'
    }
});
const Admin = (props) => {
    const classes = useStyles();
    const permissionsUser = JSON.parse(JSON.stringify(roles[1].permissions))
    const permissionCharity = JSON.parse(JSON.stringify(roles[1].permissions))
    const [user, setUser] = useState(permissionsUser);
    const [charity, setCharity] = useState(permissionCharity)
    const [guest, setGuest] = useState(true);
    const checkHandler = (type, id) => {
        if (window.confirm('Change Permission ?')) {
            if (type === 'user') {
                const index = user.findIndex(x => x.id === id);
                const data = { ...user }
                data[index].disable = !user[index].disable;
                let updatedCharityData = [];
                for (let i in data) {
                    updatedCharityData.push(data[i])
                }
                setUser(updatedCharityData)

            } else if (type === 'charity') {
                const index = charity.findIndex(x => x.id === id);
                const data = { ...charity }
                data[index].disable = !charity[index].disable;
                let updatedData = [];
                for (let i in data) {
                    updatedData.push(data[i])
                }
                setCharity(updatedData)

            } else {
                setGuest(false);
            }
        }
    }

    const usersPermissions = user.length + 1;
    const charityPermissions = charity.length + 1;
    console.log(usersPermissions);
    const userData = user.map((permission) => {
        return <TableRow>
            <TableCell align="center" key={permission.id} className={permission.disable && classes.disable}>{permission.name}</TableCell>
            <Checkbox checked={!permission.disable} onChange={() => checkHandler('user', permission.id)} />
        </TableRow>
    });

    const charityData = charity.map((permission) => {
        return <TableRow>
            <TableCell align="center" key={permission.id} className={permission.disable && classes.disable}>{permission.name}</TableCell>
            <Checkbox checked={!permission.disable} onChange={() => checkHandler('charity', permission.id)} />
        </TableRow>
    });

    return (
        <div style={{ marginTop: '100px' }}>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>

                        <TableRow >
                            <TableCell className={classes.header} align="center">Users</TableCell>
                            <TableCell className={classes.header} align="center">Permissions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">Guest</TableCell>
                            <TableCell align="center" className={!guest && classes.disable}>Show Blogs</TableCell>
                            <Checkbox checked={guest} onChange={() => checkHandler('guest', 1)} />
                        </TableRow>

                        <TableRow>
                            <TableCell rowSpan={usersPermissions} align="center">User</TableCell>
                        </TableRow>
                        {userData}

                        <TableRow>
                            <TableCell rowSpan={charityPermissions} align="center">Charity User</TableCell>
                        </TableRow>
                        {charityData}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default Admin;