export const PIXEL_SIZE = 4;

export const CAT_MAP = [
  '.....b.................b.............',
  '....bbb...............bbb............',
  '...bbobb.............bbobb...........',
  '..bbooobb...........bbooobb..........',
  '..booooob...........booooob..........',
  '.bbooooobb.........bbooooobb.........',
  'bbooooooobbbbbbbbbbbooooooobb........',
  'booooooooooooooooooooooooooob........',
  'booooooooooooooooooooooooooob........',
  'booooooooooooooooooooooooooob........',
  'boooobbbbbooooooooobbbbboooob........',
  'booobbeeebbooooooobbeeebbooob........',
  'booobeeeeebooooooobeeeeebooob........',
  'booobeeeeebooooooobeeeeebooob........',
  'booobeeeeebooooooobeeeeebooob........',
  'booobbeeebbooooooobbeeebbooob........',
  'boooobbbbbooonnnooobbbbboooob........',
  'booooooooooooonooooooooooooob........',
  '.booooooooooooooooooooooooob.........',
  '..booooooooooooooooooooooob..........',
  '...bbooooooooooooooooooobb...........',
  '.....bbbbbbbbbbbbbbbbbbb.............',
  '.........booooooooob........bbbbbb...',
  '.........booooooooob.......bboooobb..',
  '........booooooooooob.....bboobbppbb.',
  '.......booooooooooooob...bboobbbbppb.',
  '......booooooooooooooobb.boobb..bppb.',
  '.....booooooooooooooooob.boob...bppb.',
  '.....booooooooooooooooob.boob....bb..',
  '.....booooooooooooooooob.boob........',
  '.....booobooboooboobooob.boob........',
  '.....booobooboooboobooob.boob........',
  '.....booobooboooboobooob.boob........',
  '.....booobooboooboobooob.boob........',
  '.....booobooboooboobooob.boob........',
  '.....booobooboooboobooobboob.........',
  '.....booobooboooboobooobooob.........',
  '.....booobppbooobppboooboob..........',
  '.....boobppppbobppppboobob...........',
  '.....boobppppbobppppboobb............',
  '......bbbbbbbbbbbbbbbbb..............',
] as const;

export type PixelType = 'border' | 'eyes' | 'body' | 'nose' | 'pattern';

export function getPixelType(cell: string): PixelType | null {
  switch (cell) {
    case 'b':
      return 'border';
    case 'o':
      return 'body';
    case 'e':
      return 'eyes';
    case 'n':
      return 'nose';
    case 'p':
      return 'pattern';
    default:
      return null;
  }
}

export const PUPILS = [
  { x: 6, y: 12 },
  { x: 20, y: 12 },
] as const;
