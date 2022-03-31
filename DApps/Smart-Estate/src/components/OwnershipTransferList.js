import React from 'react'
import { useStore } from '../context/GlobalState'
import { Card, TableHead } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Typography from '@material-ui/core/Typography';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        flexGrow: 3,
        // width: '0%',
        textAlign: 'center',
        margin: 'auto',
        maxWidth: 1000,
        boxShadow: "2px 0px 10px",
    },

    table: {
        width:850
    },
});



export const OwnershipTransferList = () => {
    const classes = useStyles();
    const [{ contract, accounts, OwnershipsEvents }, dispatch] = useStore();
    //console.log(OwnershipsEvents)

    return (
        <div style={{backgroundColor:"#f9f9f9"}}>
            <h3>List Of Ownership Transfer Using <b>Smart Estate</b></h3>
            <Card className={classes.root} >
                <TableContainer style={{height:330}} component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="h6" align="center"><b>Owner</b></Typography></TableCell>
                                <TableCell ><Typography variant="h6" align="center"><b>Ownership Transfer to</b></Typography></TableCell>
                                <TableCell> <Typography variant="h6" align="center"><b>Property Id</b></Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {OwnershipsEvents.map((item, index) => {
                                if (item[0] !== "0x0000000000000000000000000000000000000000") {
                                    return <>
                                        <TableRow key={index}>
                                            <TableCell><Typography ><b>{item[0]}</b></Typography></TableCell>
                                            <TableCell><Typography ><b>{item[1]}</b></Typography></TableCell>
                                            <TableCell><Typography align="center"><b>{item[2]}</b></Typography></TableCell>

                                        </TableRow>

                                    </>

                                }



                            })}


                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <br />
        </div>

    )
}
