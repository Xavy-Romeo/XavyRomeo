import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
  paper: {
    position: 'relative',
    maxWidth: '90%',
    width: '1200px',
    height: '1000px',
    maxHeight: '90%',
    border: '2px solid black',
    borderRadius: '4px',
    background: 'rgb(50,54,62)',
    boxShadow: '0px 4px 5px -2px rgba(255,255,255,0.2),0px 7px 10px 1px rgba(255,255,255,0.14),0px 2px 16px 1px rgba(255,255,255,0.12)',
    padding: '15px'
  },
  closeButton: {
    background: 'transparent',
    position: 'absolute',
    right: 5,
    top: 5,
    color: 'rgba(255,255,255,0.87)',
    fontSize: '15px',
    '&:hover': {
      color: 'rgb(55,188,241)',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  }, 
  previewImage: {
    objectFit: 'contain',
    height: '394px',
    width: '700px',
    maxWidth: '100%',
    boxShadow: '0px 4px 5px -2px rgba(255,255,255,0.2),0px 7px 10px 1px rgba(255,255,255,0.14),0px 2px 16px 1px rgba(255,255,255,0.12)',
    borderRadius: '4px', 
    padding: '10px',
    margin: '0 auto',
    '@media (max-width:850px)': {
      height: '250px',
      width: '444px',
      padding: '5px'
    },
    '@media (max-width:550px)': {
      height: '125px',
      width: '222px',
      padding: '5px'
    },
  
  },
  descBox: {
    marginBottom: '10px'
  },
  cardButton: {
    width: '35%',
    marginRight: '10px',
    background: 'linear-gradient(rgba(55,188,241,1), white, rgba(55,188,241,1))',
    '&:hover': {
        background: 'linear-gradient(transparent, rgba(55,188,241,1), transparent)',
    },
}, 
});

export default useStyles;