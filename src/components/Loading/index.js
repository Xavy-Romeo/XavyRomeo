import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";

import useStyles from './styles';
import Logo from '../../assets/images/xr-loading-logo.png';

import Box from '@material-ui/core/Box';

const Loading = () => {
    const classes = useStyles();

    return (
        <Box className={classes.loadingContainer}>
            <h1 className={classes.loadingTitle}>
                Xavy Romeo
            </h1>
            <PulseLoader size={30} color='rgb(195, 2, 2)' />
            <img src={Logo} className={classes.loadingLogo} alt='loading logo'/>            
        </Box>
    )
}

export default Loading;
