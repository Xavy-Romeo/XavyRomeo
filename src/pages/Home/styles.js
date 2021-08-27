import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    landingPageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(55,188,241,1)',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '130vh',
        overflow: 'hidden'
    },
    landingSea: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50vh',
        zIndex:'8'
    },

    landingSun: {
        position: 'absolute',
        height: '20vh',
        right: '15%',
        top: '8%',
        zIndex: '5',
    },

    landingCloud: {
        position: 'absolute',
        height: '30vh',
        left: '10%',
        top: '6%',
        zIndex: '7',
        opacity: '0',
        '@media (min-width:1920px)': {
            opacity: '1'
        } 
    },

    landingCloud2: {
        position: 'absolute',
        height: '26vh',
        right: '20%',
        top: '15%',
        zIndex: '6'
    },

    landingYatch: {
        position: 'absolute',
        height: '15vh',
        top: '55%',
        right: '15%',
        zIndex: '10'
    },

    landingShip: {
        position: 'absolute',
        height: '5vh',
        bottom: '38.3%',
        left: '30%',
        zIndex: '9'
    },

    landingPalm: {
        position: 'absolute',
        height: '80vh',
        bottom: '2%',
        left: '-15%',
        zIndex: '11',
        '@media (min-width:2300px)': {
            left: '-5%'
        },
    },

    landingTitle: {
        marginTop: '60px',
        position: 'absolute',
        color: 'black',
        fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: 'bold',
        fontSize: '3.2rem',
        textShadow: '4px 3px rgb(195, 2, 2)',
        zIndex: '1',
        '@media (min-width:960px)': {
            fontSize: '5rem'
        },
        '@media (min-width:1280px)': {
            fontSize: '6rem'
        },
        '@media (min-width:1920px)': {
            fontSize: '8rem'
        }
    },
    
});

export default useStyles;