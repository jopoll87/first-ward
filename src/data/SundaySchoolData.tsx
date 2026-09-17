export type AdultSundaySchoolTeachingType = {
  id: number;
  date: string;
  teacher1: string;
  teacher2: string;
  teacher1Classroom: string;
  teacher2Classroom: string;
  lessonLink: string;
}

export type YouthSundaySchoolTeachingType = {
  id: number;
  class: string;
  teachers: string;
  classroom: string;
}

export type PresidencyType = {
  id: number;
  calling: string;
  name: string;
};

export const SUNDAYSCHOOLPRESIDENCY = [
  {
    id: 1,
    calling: 'President',
    name: 'Jimmy MacDougall',
  },
  {
    id: 2,
    calling: '1st Counselor',
    name: 'Brian Hall',
  },
  {
    id: 3,
    calling: '2nd Counselor',
    name: 'Adam Jacobson',
  },
  {
    id: 4,
    calling: 'Secretary',
    name: 'Kyle Shupe',
  }
]

export const ADULTTEACHINGSCHEDULE = [
  {
    id: 1,
    date: 'September 6',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/36?lang=eng'
  },
  {
    id: 2,
    date: 'September 13',
    teacher1: 'Terry Bybee',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/37?lang=eng'
  },
  {
    id: 3,
    date: 'September 20',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/38?lang=eng'
  },
  {
    id: 4,
    date: 'September 27',
    teacher1: 'Terry Bybee',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/39?lang=eng'
  },
  {
    id: 5,
    date: 'October 4',
    teacher1: 'No Lessson',
    teacher1Classroom: 'General Conference',
    teacher2: 'No Lesson',
    teacher2Classroom: 'General Conference',
    lessonLink: ''
  },
  // {
  //   id: 6,
  //   date: 'October 11',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/41?lang=eng'
  // },
  // {
  //   id: 7,
  //   date: 'October 18',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/42?lang=eng'
  // },
  // {
  //   id: 8,
  //   date: 'October 25',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/43?lang=eng'
  // },
  // {
  //   id: 9,
  //   date: 'November 1',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/44?lang=eng'
  // },
  // {
  //   id: 10,
  //   date: 'November 8',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/44?lang=eng'
  // },
  // {
  //   id: 11,
  //   date: 'November 15',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/46?lang=eng'
  // },
  // {
  //   id: 12,
  //   date: 'November 22',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/47?lang=eng'
  // },
  // {
  //   id: 13,
  //   date: 'November 29',
  //   teacher1: '',
  //   teacher1Classroom: 'Relief Society',
  //   teacher2: 'Jenne Talbot',
  //   teacher2Classroom: 'Young Women',
  //   lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/48?lang=eng'
  // },
]

export const YOUTHTEACHING = [
  {
    id: 1,
    class: 'Course 12',
    teachers: 'Cami & Matt Miller',
    classroom: 'Room #7',
  },
  {
    id: 2,
    class: 'Course 13',
    teachers: 'Ashley & Taylor Bench',
    classroom: 'Room #1',
  },
  {
    id: 3,
    class: 'Course 14 & 15',
    teachers: 'Grace & Jaden Pacheco',
    classroom: 'Room #13',
  },
  {
    id: 4,
    class: 'Course 16 & 17',
    teachers: 'Brooke DeLong & Holly MacDougall',
    classroom: 'Stage',
  },
]