import React, { useState, useEffect, useContext } from 'react';

import Box from '@material-ui/core/Box';

import Loading from '../../components/Loading';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Projects from '../../components/Projects';
import Resume from '../../components/Resume';
import SectionContext from '../../contexts/SectionContext';
import useStyles from './styles';

const Portfolio = () => {
    const classes = useStyles();
    const { currentSection } = useContext(SectionContext);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0,0);
            setLoaded(true);
        }, 2000);
    }, []);

    return (
        <>
            <Box className={!loaded ? classes.loadingContainer : classes.loaded}>
                <Loading />
            </Box>
            <Box 
                className={classes.contentPageContainer}
                style={{height: 'calc(100vh - 80px)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                {currentSection === 'Contact Me' &&
                    <Contact />
                }
                {currentSection === 'Projects' &&
                    <Projects />
                }
                {currentSection === 'Resume' &&
                    <Resume />
                }

                <About />
            </Box>
        </>
    )
}

export default Portfolio;