import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appbar: {
        height: '75px',
        background: 'linear-gradient(to bottom, black, rgba(0,0,0,.4) 70%, rgba(0,0,0,0))',
        boxShadow: 'none'
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