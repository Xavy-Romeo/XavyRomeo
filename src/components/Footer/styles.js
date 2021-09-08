import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    footer: {
        height: '80px',
        width: '100%',
        color: 'rgba(255,255,255,.87)',
        background: 'black',
        boxShadow: '0px 2px 4px -1px rgba(250,250,250,0.2),0px 4px 5px 0px rgba(250,250,250,0.14),0px 1px 10px 0px rgba(250,250,250,0.12)'
    },
    footerContainer: {
        height: '100%',
    },
    footerLogo: {
        height: '65px',
        marginTop:'5px'
    },
    connectIcon: {
        marginRight: '7px'
    },
    connectIcons: {
        margin: '0 7px',
        color: 'rgba(255,255,255,.87)', 
        fontSize: '1.5rem',
        cursor: 'pointer',
        '&:hover': {
            color: 'rgb(10, 163, 194)'
        }
    },

});

export default useStyles;