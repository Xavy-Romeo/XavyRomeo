import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loadingContainer: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: -1200,
        zIndex: 9999,
        backgroundColor: 'rgb(40,44,52)'
    },
    loaded: {
        height: 0,
        opacity: 0
    },
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
        zIndex:'8',
        objectFit: 'cover'
    },
    landingSun: {
        position: 'absolute',
        height: '20vh',
        right: '8%',
        top: '8%',
        zIndex: '5',
        '@media (max-width:500px)': {
            top: '15%',
        } 
    },
    landingSunLoading: {
        position: 'absolute',
        height: '20vh',
        right: '8%',
        top: '8%',
        zIndex: '5',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: 'yellow',
        '@media (max-width:500px)': {
            top: '15%',
        } 
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
        right: '15%',
        top: '15%',
        zIndex: '6',
        '@media (max-width:500px)': {
            height: '20vh',
            right: '35%',
            top: '18%',
        } 
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
        zIndex: '9',
        '@media (max-width:1750px)': {
            left: '90%'
        },
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
        '@media (max-width:1100px)': {
            left: '-50%'
        },
        '@media (max-width:500px)': {
            left: '-70%'
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
    landingAboutContainer: {
        margin: '60px auto 0 auto',
        borderTop: '2px solid rgba(255,255,255,.2)',
    },
    landingAbout: {
        margin: '50px 0'
    },
    landingPaper: {
        padding: '20px 30px',
        alignItems: 'center'
    },
    stackTitle: {
        marginRight: '10px',
        '@media (max-width:400px)': {
            fontSize: '1.5rem',
        },
    },
    landingButtonContainer: {
        marginTop: '15px'
    },
    landingButton: {
        width: '40%',
        background: 'linear-gradient(rgba(55,188,241,1), white, rgba(55,188,241,1))',
        '&:hover': {
            background: 'linear-gradient(transparent, rgba(55,188,241,1), transparent)',
        },
        '@media (max-width:700px)': {
            width: '90%',
        },
        '@media (min-width:1500px)': {
            width: '30%',
        }
    },
    mailIcon: {
        marginRight: '8px'
    }
});

export default useStyles;