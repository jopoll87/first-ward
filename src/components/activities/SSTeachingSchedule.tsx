import { Icon, Table } from 'semantic-ui-react';
import {
  ADULTTEACHINGSCHEDULE,
  AdultSundaySchoolTeachingType,
  YOUTHTEACHING,
  YouthSundaySchoolTeachingType,
} from '../../data/SundaySchoolData';

const SSTeachingSchedule = () => {
  return (
    <>
      <div className='general-conference'>
        <Table celled basic='very' style={{ marginTop: '30px' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4'>
                2026 The Old Testament - Adult Sunday School
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Class #1</Table.HeaderCell>
              <Table.HeaderCell>Class #2</Table.HeaderCell>
              <Table.HeaderCell>Link</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {ADULTTEACHINGSCHEDULE.map(
              (week: AdultSundaySchoolTeachingType) => (
                <Table.Row key={week.id}>
                  <Table.Cell>{week.date}</Table.Cell>
                  <Table.Cell>{week.teacher1} - {week.teacher1Classroom}</Table.Cell>
                  <Table.Cell>{week.teacher2} - {week.teacher2Classroom}</Table.Cell>
                  <Table.Cell>
                    <a href={week.lessonLink} target='_blank'>
                      <Icon name='external alternate' color='blue' />
                    </a>
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </div>

      <div className='general-conference'>
        <Table celled basic='very' style={{ marginTop: '80px' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={3}>
                2026 The Old Testament - Youth Sunday School
              </Table.HeaderCell>
            </Table.Row>
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
