import { Table } from 'semantic-ui-react';
import { PRIMARYCLASSES, PrimaryClassType } from '../../data/PrimaryData';

const Primary = () => {
  return (
    <>
      <div className='activities'>
        <h2>Primary</h2>
        <p>
          <span>Presidency: </span>
        </p>
        <ul>
          <li>
            <span>President: </span>Karson Hall
          </li>
          <li>
            <span>1st Counselor: </span>Ellie Jeppsen
          </li>
          <li>
            <span>2nd Counselor: </span>Gina Colby
          </li>
          <li>
            <span>Secretary: </span>Jodee Baltazar
          </li>
        </ul>
        <p>
          <span>Upcoming Activities: </span>TBD
        </p>
      </div>
      <div className='general-conference'>
        <Table celled basic='very' style={{ marginTop: '80px' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={3}>
                Primary Classes
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Class</Table.HeaderCell>
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
    </>
  );
};

export default Primary;
