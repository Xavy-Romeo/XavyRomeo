import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';

const Projects = () => {
    const classes = useStyles();

    window.scrollTo(0,0);

    return (
        <>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6' component='h1'>
                    PROJECTS
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    Portfolio
                </Typography>
            </Grid>
            
                <Paper style={{width: '100%', padding: '30px'}}>
                    <Grid container justifyContent='center'>
                        <Grid item xs={12} sm={6} lg={3} style={{marginTop:'20px'}}>
                            <div style={{margin: '0 auto', height: '400px', width: '275px', background: 'rgba(255,255,255,.05)', borderLeft: 'solid 1px rgba(255,255,255,.5)', borderTop: 'solid 1px rgba(255,255,255,.5)', borderRadius: '5px', boxShadow: '20px 20px 50px rgba(0,0,0,.5)'}}>
                                HELLO
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3} style={{marginTop:'20px'}}>
                            <div style={{margin: '0 auto', height: '400px', width: '275px', background: 'rgba(255,255,255,.05)', borderLeft: 'solid 1px rgba(255,255,255,.5)', borderTop: 'solid 1px rgba(255,255,255,.5)', borderRadius: '5px', boxShadow: '20px 20px 50px rgba(0,0,0,.5)'}}>
                                HELLO
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3} style={{marginTop:'20px'}}>
                            <div style={{margin: '0 auto', height: '400px', width: '275px', background: 'rgba(255,255,255,.05)', borderLeft: 'solid 1px rgba(255,255,255,.5)', borderTop: 'solid 1px rgba(255,255,255,.5)', borderRadius: '5px', boxShadow: '20px 20px 50px rgba(0,0,0,.5)'}}>
                                HELLO
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3} style={{marginTop:'20px'}}>
                            <div style={{margin: '0 auto', height: '400px', width: '275px', background: 'rgba(255,255,255,.05)', borderLeft: 'solid 1px rgba(255,255,255,.5)', borderTop: 'solid 1px rgba(255,255,255,.5)', borderRadius: '5px', boxShadow: '20px 20px 50px rgba(0,0,0,.5)'}}>
                                HELLO
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            
        </>
    )
}

export default Projects;
