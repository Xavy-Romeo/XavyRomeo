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
    formContainer: {
        position: 'absolute', 
        top: '10%', 
        left: '50%', 
        height: '80%', 
        width: '45%', 
        background: 'rgba(255,255,255,.25)', 
        borderRadius: '5px',
        minHeight: '500px',
        overflow: 'hidden',
        '@media (max-width:1150px)': {
            height: '90%',
            top: '5%',
        },
        '@media (max-width:850px)': {
            background: 'rgba(0,0,0,.85)',
            left: '5%',
            width: '90%', 

        },
    },
    contactForm: {
        width: '90%',
        marginTop: '1em'
    },
    contactFormLabel: {
        marginBottom: '5px',
        textShadow: '2px 2px 5px black'
    },
    contactFromInputs: {
        minHeight: '20px',
        borderRadius: '10px',
        border: '3px solid rgb(55,188,241)',
        fontFamily: 'Playfair Display, Serif',
        fontSize: '20px',
        marginBottom: '20px',
        background: 'rgba(0,0,0,.5)',
        color: 'rgba(255,255,255,.87)',
        padding: '5px 15px',
        '&:hover': {
            border: `3px solid black`,
        },
        '&:focus': {
            border: '3px solid rgba(255,255,255,.87)',
            backgroundColor: 'rgba(0,0,0,.8)',
            outline: 'none',
        },
    },
    formButton: {
        border: 'none',
        padding: '1em',
        borderRadius: '4px',
        background: 'linear-gradient(rgba(55,188,241,1), white, rgba(55,188,241,1))',
        '&:hover': {
            background: 'linear-gradient(rgb(50,54,62), rgba(55,188,241,1), rgb(50,54,62))',
        },
    }
});

export default useStyles;