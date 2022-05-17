import { Stack, UnstyledButton, Center, Container, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { Home, TruckDelivery } from 'tabler-icons-react';
import useStyles from './Sidebar.styles';

export function Sidebar() {
  const { classes } = useStyles();

  return (
    <Stack spacing="xl" className={classes.sidebar}>
      <Center className={classes.logo}>
        <span>this is a logo</span>
      </Center>
      <Link href="/" passHref>
        <UnstyledButton className={classes.children} component="a">
          <Container size={200} px="xs">
            <Group className={classes.buttonDecor}>
              <Home />
              <Text>Home</Text>
            </Group>
          </Container>
        </UnstyledButton>
      </Link>
      <Link
        href={{
          pathname: '/orders',
        }}
        passHref
      >
        <UnstyledButton className={classes.children} component="a">
          <Container size={200} px="xs">
            <Group className={classes.buttonDecor}>
              <TruckDelivery />
              <Text>Orders</Text>
            </Group>
          </Container>
        </UnstyledButton>
      </Link>
    </Stack>
  );
}
