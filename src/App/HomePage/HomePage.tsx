import { Box, Container, Group, Image, Stack, Text, Title, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconSun, IconMoon } from '@tabler/icons-react';
import classes from './HomePage.module.css';
import mugshotUrl from './mugshot.jpg';

export const HomePage = () => {
  const computedColorScheme = useComputedColorScheme();
  const { setColorScheme } = useMantineColorScheme();

  return (
    <>
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="lg"
        aria-label="Toggle color scheme"
        className={classes.colorSchemeToggle}
      >
        {computedColorScheme === 'dark' && <IconSun className={classes.icon} stroke={1.5} />}
        {computedColorScheme === 'light' && <IconMoon className={classes.icon} stroke={1.5} />}
      </ActionIcon>
      <Container className={classes.pageContainer} size="md">
        <Box className={classes.mugshotContainer}>
          <Image className={classes.mugshot} src={mugshotUrl} h={300} w={300} />
        </Box>
        <Stack gap="md">
          <Title order={1} style={{ fontSize: '5rem', lineHeight: '4rem' }}>
            Hi
          </Title>
          <Title order={2} style={{ fontSize: '3rem' }}>
            I'm Sam Hunt
          </Title>
          <Text size="lg">A full stack web dev from New Zealand interested in software design, science fiction, and game dev</Text>
          <Text size="xl" fw="bold" c="violet">
            Currently open to work!
          </Text>
          <Text>Get in touch below 😃</Text>
          <Group gap="xs">
            <ActionIcon variant="light" size="lg" aria-label="Email" component="a" href="mailto:samhunt.dev@gmail.com" target="_blank">
              <IconMail className={classes.icon} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="light"
              size="lg"
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/samhunt-dev/"
              target="_blank"
            >
              <IconBrandLinkedin className={classes.icon} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="light" size="lg" aria-label="Github" component="a" href="https://github.com/sam-hunt" target="_blank">
              <IconBrandGithub className={classes.icon} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Stack>
      </Container>
    </>
  );
};
