import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navSections: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '40vw', 
        maxWidth: '800px',
    },
    menuIcon: {
        fontSize: '60px',
        backgroundColor: 'rgba(0,0,0,0.4)',
        border: '1px solid black',
        cursor: 'pointer',
        color: 'rgba(255,255,255,0.87)',
        '&:hover': {
            border: '1px solid white',
            backgroundColor: 'rgb(100,100,100,0.3)'
        }
    },
    navLink: {
        textDecoration: 'none',
        color: 'rgba(255,255,255,.87)'
    },
    listSpan: {
        whiteSpace: 'nowrap',
        textShadow: '2px 2px black',
        cursor: 'pointer',
        display: 'block',
        width:'100%',
        transition: '.3s ease-out',
        '&:before': {
            position: 'absolute',
            content: 'attr(id)',
            top: '-60px',
            opacity: 0,
            transition: '.2s',
        },
        '&:hover': {
            color: 'rgb(10, 163, 194)',
            fontSize: '32px',
            textShadow: '3px 3px black',
            transform: 'translateY(10%)',
            transition: '.2s ease'
        },
        '&:hover:before': {
            top: 0,
            opacity: 1,
            transition: '.3s ease',
            textDecoration: 'underline'
        }
    }
});

export default useStyles;