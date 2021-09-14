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
    aboutContainer: {
        marginBottom: '25px'
    },
    avatarContainer: {
        '@media (max-width:1279px)': {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
        },
    },
    avatarImg: {
        border: '5px solid rgba(255,255,255,.05)',
        borderRadius: '25%',
        padding: '5px',
        height: '400px',
        width: '400px',
        '@media (max-width:450px)': {
            height: '250px',
            width: '250px'
        },
    },
    aboutPaper: {
        padding: '20px 30px'
    },
    aboutContent: {
        marginBottom: '10px'
    },
    projectsButton: {
        width: '400px',
        background: 'linear-gradient(rgba(55,188,241,1), white, rgba(55,188,241,1))',
        '&:hover': {
            background: 'linear-gradient(transparent, rgba(55,188,241,1), transparent)',
        },
        '@media (max-width:700px)': {
            width: '100%'
        }

    },
    skillsContainer: {
        padding: '10px', 
        margin: '20px 0', 
        background: 'black'
    },
    logosContainer: {
        margin: '5px', 
        paddingTop: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        background: 'black'
    },
    logos: {
        height: '70px',
        width: '70px',
        padding: '2px',
        '@media (max-width:616px)': {
            height: '40px',
            width: '40px'
        }
    },
    hireButton: {
        background: 'linear-gradient(rgba(55,188,241,1), white, rgba(55,188,241,1))',
        '&:hover': {
            background: 'linear-gradient(transparent, rgba(55,188,241,1), transparent)',
        },
        height: '100%',
        width: '400px',
        '@media (max-width:976px)': {
            marginLeft: '0px',
            width: '100%'
        }
    }
});

export default useStyles;