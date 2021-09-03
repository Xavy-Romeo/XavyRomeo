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
});

export default useStyles;