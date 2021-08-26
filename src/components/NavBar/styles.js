import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navSections: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '40vw', 
        maxWidth: '800px'
    },
    listSpan: {
        color: 'rgba(255,255,255, .87)',
        whiteSpace: 'nowrap',
        textShadow: '2px 2px black',
        cursor: 'pointer',
        display: 'block',
        width:'100%',
        '&:before': {
            position: 'absolute',
            content: 'attr(id)',
            top: '-60px',
            opacity: 0,
            transition: '.2s',
        },
        '&:hover': {
            color: 'rgb(10, 163, 194)',
            fontSize: '36px',
            // textShadow: '1px 1px rgb(10, 163, 194)',
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