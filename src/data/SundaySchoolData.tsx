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
    date: 'May 3',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/18?lang=eng'
  },
  {
    id: 2,
    date: 'May 17',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/20?lang=eng'
  },
  {
    id: 3,
    date: 'June 7',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/23?lang=eng'
  },
  {
    id: 4,
    date: 'June 21',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/25?lang=eng'
  },
  {
    id: 5,
    date: 'July 5',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/27?lang=eng'
  },
  {
    id: 6,
    date: 'July 19',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/29?lang=eng'
  },
  {
    id: 7,
    date: 'August 2',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/31?lang=eng'
  },
  {
    id: 8,
    date: 'August 16',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/33?lang=eng'
  },
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