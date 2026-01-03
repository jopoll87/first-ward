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
    classroom: 'East of Library',
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
    classroom: 'South Side of Stage',
  },
  {
    id: 4,
    class: 'Course 16 & 17',
    teachers: 'Brooke DeLong & Holly MacDougall',
    classroom: 'Stage',
  },
]