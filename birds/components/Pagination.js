import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(13),
        },
    },
}));

export default function PaginationOutlined() {
    const classes = useStyles();

    return (
        <div className={classes.root}>



            <Pagination count={3} variant="outlined" color="secondary" />
        </div>
    );
}