import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const drawerWidth = 240;

const Sidebar = () => (
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
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      {/* Add more items similarly */}
    </List>
  </Drawer>
);

export default Sidebar;