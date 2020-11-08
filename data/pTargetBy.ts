import { IInput } from '@domain/Game';

import { CM } from './Cell';

export const payload: IInput[] = [
  {
    tick: 1,
    id: '1',
    ants: [
      { id: 1, errors: 0, age: 14, health: 7, payload: 0, point: { x: 0, y: 0 }, event: 'birth' },
      { id: 17, errors: 4, age: 1, health: 7, payload: 8, point: { x: 1, y: 1 }, event: 'good' },
    ],
    canvas: {
      cells: [
        [new CM(null, 1), {}, {}, new CM(null, undefined, 1)],
        [new CM(5), new CM(0, 1), {}, {}],
        [new CM(9), {}, new CM(null, null, null), {}],
      ],
    },
  },
  {
    tick: 2,
    id: '1',
    ants: [
      { id: 1, errors: 0, age: 14, health: 7, payload: 1, point: { x: 0, y: 0 }, event: 'birth' },
      { id: 17, errors: 4, age: 1, health: 8, payload: 8, point: { x: 1, y: 2 }, event: 'good' },
    ],
    canvas: {
      cells: [
        [new CM(1, 1), {}, new CM(1), new CM(null, undefined, 1)],
        [new CM(4), {}, {}, {}],
        [new CM(9), new CM(0, 1), new CM(null, null, null), {}],
      ],
    },
  },
  {
    tick: 3,
    id: '1',
    ants: [
      { id: 1, errors: 0, age: 14, health: 7, payload: 2, point: { x: 0, y: 0 }, event: 'birth' },
      { id: 17, errors: 4, age: 1, health: 4, payload: 9, point: { x: 1, y: 2 }, event: 'good' },
    ],
    canvas: {
      cells: [
        [new CM(2, 1), {}, {}, new CM(null, undefined, 1)],
        [new CM(4), {}, {}, {}],
        [new CM(8), new CM(null, 1), new CM(null, null, null), {}],
      ],
    },
  },
  {
    tick: 4,
    id: '1',
    ants: [
      { id: 1, errors: 0, age: 14, health: 7, payload: 3, point: { x: 0, y: 0 }, event: 'birth' },
      { id: 17, errors: 4, age: 1, health: 4, payload: 9, point: { x: 1, y: 2 }, event: 'good' },
    ],
    canvas: {
      cells: [
        [new CM(1, 1), {}, {}, new CM(null, undefined, 1)],
        [new CM(4), {}, {}, {}],
        [new CM(8), new CM(null, 1), new CM(null, null, null), {}],
      ],
    },
  },
];
