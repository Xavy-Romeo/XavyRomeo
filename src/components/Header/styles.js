import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appbar: {
        // background: 'black',
        height: '75px',
        background: 'linear-gradient(349deg, rgba(2,0,36,1) 0%, rgba(114,18,20,1) 16%, rgba(121,9,9,1) 47%, rgba(10,163,194,1) 100%)',
    },
    toolbar: {
        justifyContent: 'space-between',
        margin: 'auto 0'
    },
    nameContainer: {
        marginBottom: '5px'
    },
    nameLink: {
        textDecoration: 'none'
    },
    xavyTitle: {
        marginTop: 0,
        fontFamily: 'Kaushan Script, sans-sefif',
        color: 'rgb(195, 2, 2)',
        fontWeight: 'bold',
        textShadow: '4px 3px black',
        transition: '.5s',
        '&:hover': {
            color: 'black',
            textShadow: '3px 3px rgb(195, 2, 2)',
            transition: '.5s'
        }
    },
});

export default useStyles;