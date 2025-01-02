import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

const navItems = [
  { titleKey: 'nav.home', path: '/' },
  { titleKey: 'nav.program', path: '/program' },
  { titleKey: 'nav.donate', path: '/donate' },
  { titleKey: 'nav.scrutateurs', path: '/scrutateurs' },
  { titleKey: 'nav.news', path: '/news' },
  { titleKey: 'nav.contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => {
        const translatedText = t(item.titleKey);
        return (
          <ListItem
            component={RouterLink}
            to={item.path}
            key={item.titleKey}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={translatedText} />
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Cabral Libii 2025
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
              {navItems.map((item) => (
                <Button
                  component={RouterLink}
                  to={item.path}
                  key={item.titleKey}
                  color="inherit"
                  sx={{ mx: 1 }}
                >
                  {t(item.titleKey)}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
