import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      {/* Add more items similarly */}
      {/* Add more items */}
    </List>
  </Drawer>
);

export default Sidebar;