import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import NavBar from '../NavBar';

export default function Header () {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                    <Box className={classes.nameContainer}> 
                        <Typography className={classes.xavyTitle} variant='h1'>
                            Xavy Romeo
                        </Typography>
                    </Box>
                    <Box>
                        <NavBar />
                    </Box>
            </Toolbar>
        </AppBar>
    );
};