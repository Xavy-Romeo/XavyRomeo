import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// import Material UI icons
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

export default function NavBar () {
    const classes = useStyles();

    const navSection = [ 
        {name: 'About Me'},
        {name: 'Contact Me'},
        {name: 'Portfolio'},
        {name: 'Resume'}
    ]

    const [currentSection, setCurrentSection] = useState(navSection[0]);

    return (
        <nav>
            {/* <Hidden lgUp>

            </Hidden>
            <Hidden mdDown> */}
                <Box>
                <List className={classes.navSections}>
                    {/* Create a li for each nav section */}
                    {navSection.map((section) => (
                        <ListItem 
                            onClick={() => {
                                setCurrentSection(section.name)
                            }} 
                            key={section.name}
                        >
                            <Typography 
                                className={classes.listSpan} 
                                id={section.name} 
                                variant='subtitle1' 
                                component='span'
                            >
                                {section.name}
                            </Typography>
                        </ListItem>
                    ))} 
                </List>
                </Box>
            {/* </Hidden> */}
        </nav>
    );
};