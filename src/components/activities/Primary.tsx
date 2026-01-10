import { Table } from 'semantic-ui-react';
import {
  PRIMARYCLASSES,
  PrimaryClassType,
  PRIMARYPRESIDENCY,
  PresidencyType,
} from '../../data/PrimaryData';

const Primary = () => {
  return (
    <div className='activities'>
      <h2>Primary</h2>
      <p>
        <span>Presidency: </span>
      </p>
      <div>
        <Table basic='very' celled collapsing>
          <Table.Body>
            {PRIMARYPRESIDENCY.map((member: PresidencyType) => (
              <Table.Row key={member.id}>
                <Table.Cell>
                  <strong>{member.calling}:</strong> {member.name}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <hr />
      <p>
        <span>Upcoming Activities: </span>TBD
      </p>
      <p>Singing Time: 9:40-10:00am</p>
      <p>Class Time: 10:00-10:30am</p>
      <h3>Primary Classrooms</h3>
      <div className='general-conference'>
        <Table celled basic='very' style={{ marginTop: '30px' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Course</Table.HeaderCell>
              <Table.HeaderCell>Teachers</Table.HeaderCell>
              <Table.HeaderCell>Classroom</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {PRIMARYCLASSES.map((course: PrimaryClassType) => (
              <Table.Row key={course.id}>
                <Table.Cell>{course.course}</Table.Cell>
                <Table.Cell>{course.teachers}</Table.Cell>
                <Table.Cell>{course.classroom}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Primary;
