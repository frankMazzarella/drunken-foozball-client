import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GavelIcon from '@material-ui/icons/Gavel';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core';

import Home from './home/Home';
import Stats from './stats/Stats';
import Rules from './rules/Rules';
import Rankings from './rankings/Rankings';
import Tournaments from './tournaments/Tournaments';
import Admin from './admin/Admin';
import EditRules from './admin/EditRules';
import Login from './login/Login';
import FirebaseService from './services/Firebase.serivce';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: drawerWidth,
    },
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#61978e',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarFooter: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#464646',
    width: '100%',
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  }

  const signOut = () => {
    FirebaseService.signOut()
      .then(() => {
        setIsLoggedIn(false);
        history.push('/');
      })
      .catch(error => console.error(error));
  }

  FirebaseService.subscribeToAuthChanges(isLoggedIn => setIsLoggedIn(isLoggedIn));

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/rules" onClick={handleDrawerClose}>
          <ListItemIcon><GavelIcon /></ListItemIcon>
          <ListItemText primary="Rules" />
        </ListItem>
        <ListItem button component={Link} to="/stats" onClick={handleDrawerClose}>
          <ListItemIcon><EqualizerIcon /></ListItemIcon>
          <ListItemText primary="Stats" />
        </ListItem>
        <ListItem button component={Link} to="/rankings" onClick={handleDrawerClose}>
          <ListItemIcon><FormatListNumberedIcon /></ListItemIcon>
          <ListItemText primary="Rankings" />
        </ListItem>
        <ListItem button component={Link} to="/tournaments" onClick={handleDrawerClose}>
          <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
          <ListItemText primary="Tournaments" />
        </ListItem>
        {
          isLoggedIn ?
            <ListItem button component={Link} to="/admin" onClick={handleDrawerClose}>
              <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItem> :
            null
        }
      </List>
      <Divider />
      <List className={classes.sidebarFooter}>
        {
          isLoggedIn ?
            <ListItem button onClick={signOut}>
              <ListItemIcon><SportsSoccerIcon /></ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem> :
            <ListItem button component={Link} to="/login" onClick={handleDrawerClose}>
              <ListItemIcon><SportsSoccerIcon /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
        }
        <ListItem key={'Version'}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary={'Version 1.4.3'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome to the Drunken Foozball League
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/rules" component={Rules} />
          <Route path="/stats" component={Stats} />
          <Route path="/rankings" component={Rankings} />
          <Route path="/tournaments" component={Tournaments} />
          <Route path="/admin/edit-rules" component={EditRules} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
