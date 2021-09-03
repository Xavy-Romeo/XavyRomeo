import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';
import SectionContext from '../../contexts/SectionContext';
import { navActive, navSection } from '../../utils';

export default function NavBar () {
  const classes = useStyles();

  const { setCurrentSection } = useContext(SectionContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
      setAnchorEl(null);
  };

  return (
    <nav>
      <Hidden lgUp>
        <Box>
          <MenuIcon 
              className={classes.menuIcon} 
              onClick={openMenu}
          />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            {navSection.map((section) => (
              <MenuItem
                onClick={() => {
                  setAnchorEl(null)
                  setCurrentSection(section.name)
                }} 
                key={section.name}
              >
                <NavLink 
                  to={section.to} 
                  exact 
                  className={classes.navLink}
                >
                  <Typography  id={section.name}>
                    {section.name}
                  </Typography>
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Hidden>
      <Hidden mdDown>
        <List className={classes.navSections}>
          {/* Create a li for each nav section */}
          {navSection.map((section) => (
            <ListItem 
              key={section.name}
            >
              <NavLink
                onClick={() => {
                  setCurrentSection(section.name)
                  navActive(section.name)
                }}
                to={section.to} 
                exact 
                className={classes.navLink} 
              >
                <Typography 
                  className={classes.listSpan} 
                  id={section.name} 
                  variant='body1' 
                  component='span'
                >
                  {section.name}
                </Typography>
              </NavLink>
            </ListItem>
          ))} 
        </List>
      </Hidden>
    </nav>
  );
};