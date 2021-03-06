import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    sectionTitleContainer: {
        position: 'relative',
        marginTop: '50px'
    },
    sectionTitleShadow: {
        textAlign: 'center',
        width: '100%',
        color: 'white',
        textShadow: '10px 10px 5px rgb(220,220,220)',
        opacity: '5%',
        fontWeight: 'bold',
    },
    sectionTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        textDecoration: 'underline'
    },
    projectsPaper: {
        padding: '20px 20px 40px 20px'
    },
    cardGridContainer: {
        marginTop:'20px',
    },
    cardContainer: {
        margin: '0 auto', 
        height: '400px', 
        width: '275px', 
        background: 'rgba(255,255,255,.05)', 
        borderLeft: 'solid 1px rgba(255,255,255,.5)', 
        borderTop: 'solid 1px rgba(255,255,255,.5)', 
        borderRadius: '5px',
        padding: '0 5%', 
        boxShadow: '20px 20px 50px rgba(0,0,0,.5)',
        '@media (max-width:700px)': {
            transform: 'scale(.8)'
        },        
    },
    imageContainer: {
        width: '100%',
        height: '125px',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '3px',
    },
    technologies: {
        width: '100%', 
        marginTop: '10px', 
        height: '100px'
    },
    techPaper: {
        background: 'rgba(255,255,255, .05)', 
        padding: '5px', 
        width: '100%', 
        height: '100%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:'rgba(0,0,0,.85)'
    },
    modalButton: {
        marginTop: '15px',
        width: '100%',
        background: 'linear-gradient(rgba(55,188,241,1), white, rgba(55,188,241,1))',
        '&:hover': {
            background: 'linear-gradient(transparent, rgba(55,188,241,1), transparent)',
        },
    }
});

export default useStyles;