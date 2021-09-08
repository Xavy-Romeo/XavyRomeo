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
});

export default useStyles;