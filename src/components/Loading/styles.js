import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loadingContainer: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    loadingTitle: {
        fontSize: '8rem',
        fontFamily: 'Kaushan Script, sans-sefif',
        color: 'rgb(195, 2, 2)',
        fontWeight: 'bold',
        textShadow: '4px 3px black',
        marginBottom: '10px',
        '@media (max-width:700px)': {
            fontSize: '5rem',
        },
        '@media (max-width:700px)': {
            fontSize: '3.5rem',
        },
    },
    loadingLogo: {
        height: '300px',
        '@media (max-width:450px)': {
            height: '150px'
        }

    }
});

export default useStyles;