import { PixelClouds } from '../../../ui/animations/pixelClouds/PixelClouds';
import { PixelCat } from '../../../ui/components/PixelCat';
import { Stack, Text } from '../../../ui/components/primitives';
import { Window } from '../../../ui/components/Window/Window';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div>
      <Stack direction="horizontal" className={styles.section1}>
        <Stack direction="vertical">
          <Window title="hello.txt">
            <Text as="p">{`> Hi! I'm Angelika.`}</Text>
            <Text as="p">{`> I develop websites and apps.`}</Text>
          </Window>
          <Window title="updates.txt">
            <Text as="p">{`> Graduating summer 2026.`}</Text>
            <Text as="p">{`> So... Need a fullstack developer?`}</Text>
          </Window>
        </Stack>
        <Window
          title="clouds.img"
          contentPadding={false}
          className={styles.cloudWindow}
        >
          <PixelClouds />
        </Window>
      </Stack>
      <Stack direction="horizontal">
        <Window title="about_me.txt">
          <Text as="p">{`> I want to make websites and apps that are easy to use, secure and accesible for everyone.`}</Text>
          <Text as="p">{`> I am graduating as a fullstack developer with a focus on websecurtiy in the MERN-stack.`}</Text>
          <Text as="p">{`> In my 6 month internship I got to develop a backend and api for a android nativ pos-application in Kotlin. So much fun!`}</Text>
          <Text as="p">{``}</Text>
          <Text
            as="p"
            muted={true}
          >{`> I love structure and I am constantly looking for better and cleaner structure for my files and code. My brain loves it and it makes debugging and cooperation easier.`}</Text>
        </Window>
        <Window title="my_companion.img">
          <PixelCat />
        </Window>
      </Stack>
    </div>
  );
}

export default HomePage;
