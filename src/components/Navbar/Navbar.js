import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Group } from '@mantine/core';
import {
  IconBellRinging,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconDatabaseImport,
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Navbar.module.css';
import logo from './logo.jpeg';

const data = [
  { link: '/about', label: 'About', icon: IconBellRinging },
  { link: '/images', label: 'Images', icon: IconReceipt2 },
  { link: '/users', label: 'Users', icon: IconDatabaseImport },
];

export function Navbar(props) {
  const [active, setActive] = useState(props.id);

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <img
            src={logo}
            alt="Neuropixel AI Logo"
            style={{ width: '200px', height: 'auto', marginRight: '10px' }}
          />
        </Group>
        <div className={classes.links}>{links}</div>
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="/" className={classes.link}>
        <IconLogout className={classes.linkIcon} stroke={1.5} />
        <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
