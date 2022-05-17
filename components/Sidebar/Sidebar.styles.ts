import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  sidebar: {
    backgroundColor: '#111827',
    position: 'fixed',
    color: '#ffffff',
    top: '0px',
    left: '0px',
    height: '100vh',
    width: '16rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  logo: {
    height: '15%',
  },
  children: {
    color: '#ffffff',
  },
  buttonDecor: {
    alignContent: 'center',
  },
}));
