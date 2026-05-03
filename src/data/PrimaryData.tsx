export type PrimaryClassType = {
  id: number;
  course: string;
  teachers: string;
  classroom: string;
};

export type PresidencyType = {
  id: number;
  calling: string;
  name: string;
};

export const PRIMARYPRESIDENCY = [
  {
    id: 1,
    calling: 'President',
    name: 'Karson Hall',
  },
  {
    id: 2,
    calling: '1st Counselor',
    name: 'Ellie Jeppsen',
  },
  {
    id: 3,
    calling: '2nd Counselor',
    name: 'Gina Colby',
  },
  {
    id: 4,
    calling: 'Secretary',
    name: 'Jodee Baltazar',
  },
];

export const PRIMARYCLASSES = [
  {
    id: 1,
    course: 'Sunbeam/CTR 4',
    teachers: 'Johanna Carson & Myrt Hyer',
    classroom: 'Classroom 16',
  },
  {
    id: 2,
    course: 'CTR 5',
    teachers: 'Thomas & Carina Love',
    classroom: 'Classroom 8',
  },
  {
    id: 3,
    course: 'CTR 6',
    teachers: 'Matti & Cam Miller',
    classroom: 'Classroom 17',
  },
  {
    id: 4,
    course: 'Valiant 7',
    teachers: 'Jon & Jess Poll',
    classroom: 'Classroom 3',
  },
  {
    id: 5,
    course: 'Valiant 8',
    teachers: 'Julianne Higgs & Kelly Johnson',
    classroom: 'Classroom 15',
  },
  {
    id: 6,
    course: 'Valiant 9',
    teachers: 'Sarah Dickson & Bonnie Strazz',
    classroom: 'Classroom 18',
  },
  {
    id: 7,
    course: 'Valiant 10',
    teachers: 'Ingrid Byram & Marilyn Peek',
    classroom: 'Classroom 14',
  },
];
