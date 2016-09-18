const group = 'group';
export const champions = [
  { key: 'A', name: 'Abcd', image: { group, full: 'A.png' }, tags: ['a', 'b', 'c', 'd'] },
  { key: 'a', name: 'abcd', image: { group, full: 'a.png' }, tags: ['a', 'b', 'c', 'd'] },
  { key: 'B', name: 'Bcde', image: { group, full: 'B.png' }, tags: ['b', 'c', 'd', 'e'] },
  { key: 'b', name: 'bcde', image: { group, full: 'b.png' }, tags: ['b', 'c', 'd', 'e'] },
  { key: 'C', name: 'Cdef', image: { group, full: 'C.png' }, tags: ['c', 'd', 'e', 'f'] },
  { key: 'c', name: 'cdef', image: { group, full: 'c.png' }, tags: ['c', 'd', 'e', 'f'] },
  { key: 'D', name: 'Defg', image: { group, full: 'D.png' }, tags: ['d', 'e', 'f', 'g'] },
  { key: 'd', name: 'defg', image: { group, full: 'd.png' }, tags: ['d', 'e', 'f', 'g'] },
];

export const items = [
  { key: 'A', title: 'Abcd', group, image: 'A.png', ref: '/champion/A', withVersion: true },
  { key: 'a', title: 'abcd', group, image: 'a.png', ref: '/champion/a', withVersion: true },
  { key: 'B', title: 'Bcde', group, image: 'B.png', ref: '/champion/B', withVersion: true },
  { key: 'b', title: 'bcde', group, image: 'b.png', ref: '/champion/b', withVersion: true },
  { key: 'C', title: 'Cdef', group, image: 'C.png', ref: '/champion/C', withVersion: true },
  { key: 'c', title: 'cdef', group, image: 'c.png', ref: '/champion/c', withVersion: true },
  { key: 'D', title: 'Defg', group, image: 'D.png', ref: '/champion/D', withVersion: true },
  { key: 'd', title: 'defg', group, image: 'd.png', ref: '/champion/d', withVersion: true },
];
