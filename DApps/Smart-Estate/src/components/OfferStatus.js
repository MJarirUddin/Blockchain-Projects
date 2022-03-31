import { TableHead } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useStore } from '../context/GlobalState';
import Loader from '../images/loader.gif'
import OfferAccepting from './OfferActions/OfferAccept';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    root: {
        flexGrow: 3,

        textAlign: 'center',
        margin: 'auto',

        maxWidth: 750,

    },

    table: {
        minWidth: 650,
    },
});


function OfferStatus({ PropertyId_TokenId }) {
    const classes = useStyles();

    const [{ contract, accounts }] = useStore();
    const [Data, setData] = useState([])
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")
    useEffect(() => {
        getOffers();
    }, [contract, accounts, PropertyId_TokenId])

    const getOffers = async () => await contract.methods.OfferStatus(PropertyId_TokenId).call({
        from: accounts[0]
    }).then(function (result, error) {
        if (result) {
            setData({ Data: result })
        } else if (error) {
            console.log(error)
            setTransactionInProcess(false);
            setTransactionSuccessful(false)
            setTransactionError(error.message)
        }
    })

    return (<div >
        <br/>
        
        <Card className={classes.root} >
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h6" align="center"><b>Bider address</b></Typography></TableCell>
                            <TableCell ><Typography variant="h6" align="center"><b>Bid Amount</b></Typography></TableCell>
                            <TableCell> <Typography variant="h6" align="center"><b>Actions</b></Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>

                        {Object.values(Data).map((item, index) => {
                            return item.map((post, i) => (
                                <>
                                    <TableRow key={post[0]} >
                                        <TableCell><Typography align="center"><b>{post[1]}</b></Typography></TableCell>
                                        <TableCell><Typography align="center"><b>{post[2]} ethers</b></Typography></TableCell>
                                        <TableCell><Typography align="center">{<OfferAccepting PropertyId_TokenId={PropertyId_TokenId} BuyerAddress={post[1]} useStore={useStore} />}</Typography></TableCell>

                                    </TableRow>

                                </>
                            ))
                        })}


                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
        <br/>
    </div>
    )
}

export default OfferStatus;
