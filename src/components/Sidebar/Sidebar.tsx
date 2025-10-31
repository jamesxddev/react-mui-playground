import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton,
  ListItemIcon,
  Typography,
  Box
} from '@mui/material';
import {
  HomeOutlined,
  DashboardOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
  PeopleOutlined,
  SettingsOutlined,
  CurrencyBitcoinOutlined
} from '@mui/icons-material';
import type { NavigationProps } from '../../types/navigation';

const drawerWidth = 240;

const Sidebar = ({ onNavigate, activePage }: NavigationProps) => (
  <Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        position: 'relative',
        bgcolor: '#0A1929',
        borderRight: '1px solid rgba(255,255,255,0.1)',
      },
      '& .MuiListItemButton-root': {
        py: 1.5,
        px: 2,
        '&:hover': {
          bgcolor: 'rgba(255,255,255,0.08)',
        },
        '&.Mui-selected': {
          bgcolor: '#1C2E45',
          '&:hover': {
            bgcolor: '#1C2E45',
          },
        },
      },
      '& .MuiListItemIcon-root': {
        minWidth: 40,
        color: 'grey.400',
      },
      '& .MuiListItemText-root': {
        margin: 0,
      },
      '& .MuiTypography-root': {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
    }}
  >
    <Box sx={{ p: 2.5, pb: 1 }}>
      <Typography variant="subtitle2" color="grey.400" sx={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Dashboards
      </Typography>
    </Box>
    
    <List>
      <ListItem disablePadding>
        <ListItemButton selected={activePage === 'home'} onClick={() => onNavigate('home')}>
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="Overview" 
            primaryTypographyProps={{
              sx: { color: 'grey.300' }
            }}
          />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton selected={activePage === 'dashboard'} onClick={() => onNavigate('dashboard')}>
          <ListItemIcon>
            <DashboardOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="Dashboard"
            primaryTypographyProps={{
              sx: { color: 'grey.300' }
            }}
          />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BarChartOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="Analytics"
            primaryTypographyProps={{
              sx: { color: 'grey.300' }
            }}
          />
        </ListItemButton>
      </ListItem>

      <Box sx={{ p: 2.5, pb: 1, pt: 3 }}>
        <Typography variant="subtitle2" color="grey.400" sx={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          General
        </Typography>
      </Box>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="E-commerce"
            primaryTypographyProps={{
              sx: { color: 'grey.300' }
            }}
          />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PeopleOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="Customers"
            primaryTypographyProps={{
              sx: { color: 'grey.300' }
            }}
          />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <CurrencyBitcoinOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="Crypto"
            primaryTypographyProps={{
              sx: { color: 'grey.300' }
            }}
          />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="Settings"
            primaryTypographyProps={{
              sx: { color: 'grey.300' }
            }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;