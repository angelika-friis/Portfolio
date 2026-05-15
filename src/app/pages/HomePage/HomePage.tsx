import { PixelClouds } from '../../../ui/animations/pixelClouds/PixelClouds';
import { PixelCat } from '../../../ui/components/PixelCat';
import { Stack, Text } from '../../../ui/components/primitives';
import { Window } from '../../../ui/components/Window/Window';

function HomePage() {
  return (
    <div>
      <Stack direction="horizontal">
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
        <Window title="clouds.img" contentPadding={false}>
          <PixelClouds />
        </Window>
      </Stack>
      <Window title="my_companion.img">
        <PixelCat />
      </Window>
    </div>
  );
}

export default HomePage;
