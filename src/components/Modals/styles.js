import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    paper: {
        maxWidth: '90%',
        width: '1000px',
        height: '500px',
        border: '2px solid black',
        borderRadius: '4px',
        background: 'rgb(50,54,62)',
        boxShadow: '0px 7px 8px -4px rgba(255,255,255,0.2),0px 13px 19px 2px rgba(255,255,255,0.14),0px 5px 25px 4px rgba(255,255,255,0.12)',
        padding: '15px'
      }, 
});

export default useStyles;