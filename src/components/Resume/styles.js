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
    resumeImg: {
        height: '75vh',
        width: 'calc(75vh*0.773)',
        maxWidth: '90vw',
        display: 'flex',
        margin: '0 auto',
        '@media (max-width:750px)': {
            height:'calc(90vw*1.294)'
        }
    },
    resumeButton: {
        marginTop: '15px',
        background: 'linear-gradient(rgba(55,188,241,1), white, rgba(55,188,241,1))',
        '&:hover': {
            background: 'linear-gradient(transparent, rgba(55,188,241,1), transparent)',
        },
    }
});

export default useStyles;