import React, { useState } from 'react';
import { Box, Group, ScrollArea, Button } from '@mantine/core';
import {
  IconUpload,
  IconFolder,
  IconUser,
  IconSwitchHorizontal,
  IconLogout,
  IconDatabaseImport,
} from '@tabler/icons-react';
import logo from './logo.jpeg';  // Ensure path is correct
import classes from './Navbar.module.css';  // Ensure you have appropriate CSS

const menuItems = [
  { icon: IconUpload, label: 'LIFT' },
  { icon: IconFolder, label: 'MSWAP' },
  { icon: IconUser, label: 'BSWAP' },
  { icon: IconDatabaseImport, label: 'Quin' },
  { icon: IconFolder, label: 'My Files' },
];

export function Navbar() {
  const [active, setActive] = useState('LIFT');

  const links = menuItems.map((item) => (
    <Button
      variant={active === item.label ? 'filled' : 'subtle'}
      color="dark"
      fullWidth
      onClick={() => setActive(item.label)}
      leftIcon={<item.icon size={20} />}
      style={{ justifyContent: "flex-start", marginBottom: '10px' }}
      key={item.label}
    >
      {item.label}
    </Button>
  ));

  return (
    <Box sx={{ width: 300, backgroundColor: '#1A1A1A', color: 'white', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ padding: 'md', flexGrow: 1 }}>
        <Group direction="column" align="start">
          <img src={logo} alt="Logo" style={{ width: '100%', marginBottom: '20px' }} />
          {links}
        </Group>
      </Box>
      <Box sx={{ padding: 'md' }}>
        <Button variant="subtle" color="dark" fullWidth leftIcon={<IconSwitchHorizontal size={20} />} style={{ marginBottom: '10px' }}>
          Change account
        </Button>
        <Button variant="subtle" color="dark" fullWidth leftIcon={<IconLogout size={20} />}>
          Logout
        </Button>
      </Box>
    </Box>
  );
}
