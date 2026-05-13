import { PixelClouds } from '../../../ui/animations/pixelClouds/PixelClouds';
import { Stack, Text } from '../../../ui/components/primitives';
import { Window } from '../../../ui/components/Window/Window';

function HomePage() {
  return (
    <div>
      <Stack direction="horizontal">
        <Window title="clouds.img" contentPadding={false}>
          <PixelClouds />
        </Window>
        <Window title="hello.txt">
          <Text as="p">{`> Hi! I'm Angelika.`}</Text>
          <Text as="p">{`> I develop websites and apps.`}</Text>
          <Text as="p">{`> Graduating summer 2026.`}</Text>
        </Window>
      </Stack>
    </div>
  );
}

export default HomePage;
