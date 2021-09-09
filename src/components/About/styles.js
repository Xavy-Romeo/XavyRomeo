import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    sectionTitleContainer: {
        position: 'relative'
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
    avatarImg: {
        border: '5px solid rgba(255,255,255,.05)',
        borderRadius: '25%',
        padding: '5px',
        height: '400px',
        width: '400px'
    },
    aboutPaper: {
        padding: '20px 30px'
    },
    aboutContent: {
        marginBottom: '10px'
    },
    projectsButton: {
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
    }
});

export default useStyles;