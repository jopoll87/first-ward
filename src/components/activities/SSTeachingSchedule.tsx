import { Icon, Table } from 'semantic-ui-react';
import {
  ADULTTEACHINGSCHEDULE,
  AdultSundaySchoolTeachingType,
  YOUTHTEACHING,
  YouthSundaySchoolTeachingType,
} from '../../data/SundaySchoolData';

const getCurrentWeekId = (): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (const week of ADULTTEACHINGSCHEDULE) {
    const weekDate = new Date(`${week.date}, 2026`);
    if (weekDate >= today) return week.id;
  }
  return ADULTTEACHINGSCHEDULE[ADULTTEACHINGSCHEDULE.length - 1].id;
};

const SSTeachingSchedule = () => {
  const currentWeekId = getCurrentWeekId();

  return (
    <>
      <h3 className='info-section-header'>Adult Sunday School — 2026 Old Testament</h3>
      <div className='general-conference' style={{ overflowX: 'auto' }}>
        <Table celled basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Class #1</Table.HeaderCell>
              <Table.HeaderCell>Class #2</Table.HeaderCell>
              <Table.HeaderCell>Link</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {ADULTTEACHINGSCHEDULE.map((week: AdultSundaySchoolTeachingType) => (
              <Table.Row
                key={week.id}
                className={week.id === currentWeekId ? 'schedule-row-current' : ''}
              >
                <Table.Cell>{week.date}</Table.Cell>
                <Table.Cell>{week.teacher1} — {week.teacher1Classroom}</Table.Cell>
                <Table.Cell>{week.teacher2} — {week.teacher2Classroom}</Table.Cell>
                <Table.Cell>
                  {week.lessonLink && (
                    <a
                      href={week.lessonLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='schedule-link'
                      aria-label={`Lesson for ${week.date}`}
                    >
                      <Icon name='external alternate' />
                    </a>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <h3 className='info-section-header schedule-section-gap'>Youth Sunday School — 2026 Old Testament</h3>
      <div className='general-conference' style={{ overflowX: 'auto' }}>
        <Table celled basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Class</Table.HeaderCell>
              <Table.HeaderCell>Teachers</Table.HeaderCell>
              <Table.HeaderCell>Classroom</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {YOUTHTEACHING.map((course: YouthSundaySchoolTeachingType) => (
              <Table.Row key={course.id}>
                <Table.Cell>{course.class}</Table.Cell>
                <Table.Cell>{course.teachers}</Table.Cell>
                <Table.Cell>{course.classroom}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default SSTeachingSchedule;
