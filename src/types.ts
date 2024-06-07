const mg = [
  { id: 1, name: 'Chest' },
  { id: 2, name: 'Back' },
  { id: 3, name: 'Shoulders' },
  { id: 4, name: 'Biceps' },
  { id: 5, name: 'Triceps' },
  { id: 6, name: 'Forearms' },
  { id: 7, name: 'Abs' },
  { id: 8, name: 'Obliques' },
  { id: 9, name: 'Quads' },
  { id: 10, name: 'Hamstrings' },
  { id: 11, name: 'Glutes' },
  { id: 12, name: 'Calves' },
  { id: 13, name: 'Neck' },
  { id: 14, name: 'Upper Back' },
  { id: 15, name: 'Lower Back' },
  { id: 16, name: 'Traps' },
  { id: 17, name: 'Adductors' },
  { id: 18, name: 'Abductors' },
  { id: 19, name: 'Serratus' },
  { id: 20, name: 'Hip Flexors' },
] as const;

export type Muscles = (typeof mg)[number]['name'];
