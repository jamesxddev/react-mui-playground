import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
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
      },
    }}
  >
    <List>
      <ListItem disablePadding>
        <ListItemButton selected={activePage === 'home'} onClick={() => onNavigate('home')}>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton selected={activePage === 'dashboard'} onClick={() => onNavigate('dashboard')}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

      {/* Add more items similarly */}
    </List>
  </Drawer>
);

export default Sidebar;