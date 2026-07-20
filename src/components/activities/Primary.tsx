import InfoRow from '../InfoRow';
import { Table } from 'semantic-ui-react';
import { PRIMARYCLASSES, PrimaryClassType } from '../../data/PrimaryData';

const Primary = () => {
  return (
    <>
      <div className='activities'>
        <h2>Primary</h2>

        <h3 className='info-section-header'>Presidency</h3>
        <InfoRow label='President' value='Karson Hall' />
        <InfoRow label='1st Counselor' value='Ellie Jeppsen' />
        <InfoRow label='2nd Counselor' value='Gina Colby' />
        <InfoRow label='Secretary' value='Jodee Baltazar' />

        <h3 className='info-section-header'>Upcoming Activities</h3>
        <InfoRow label='Activities' value='TBD' />
      </div>
      <div className='general-conference mt-large' style={{ overflowX: 'auto' }}>
        <Table celled basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={3}>Primary Classes</Table.HeaderCell>
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
