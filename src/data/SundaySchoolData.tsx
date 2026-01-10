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
    date: 'January 4',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/01?lang=eng'
  },
  {
    id: 2,
    date: 'January 18',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/03?lang=eng'
  },
  {
    id: 3,
    date: 'February 1',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/05?lang=eng'
  },
  {
    id: 4,
    date: 'February 15',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/07?lang=eng'
  },
  {
    id: 5,
    date: 'March 1',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/09?lang=eng'
  },
  {
    id: 6,
    date: 'March  15',
    teacher1: 'Mike Poll',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Jenne Talbot',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/11?lang=eng'
  },
  {
    id: 7,
    date: 'April 5',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/14?lang=eng'
  },
  {
    id: 8,
    date: 'April 19',
    teacher1: 'Jenne Talbot',
    teacher1Classroom: 'Relief Society',
    teacher2: 'Mike Poll',
    teacher2Classroom: 'Young Women',
    lessonLink: 'https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026/16?lang=eng'
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