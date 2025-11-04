import { Table } from 'semantic-ui-react';

const SSTeachingSchedule = () => {
  return (
    <div>
      <Table celled basic='very' collapsing stackable className='teaching-schedule-table' style={{ margin: 'auto' }} textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={3}>2024 Book of Mormon - Adult Sunday School</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Relief Society Room</Table.HeaderCell>
            <Table.HeaderCell>YW/Font Room</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1/7/2024</Table.Cell>
            <Table.Cell>Jared Olsen</Table.Cell>
            <Table.Cell>Brandon Poll</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1/21/2024</Table.Cell>
            <Table.Cell>Diane Ford</Table.Cell>
            <Table.Cell>Jimmy MacDougall</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2/4/2024</Table.Cell>
            <Table.Cell>Nate Baldwin</Table.Cell>
            <Table.Cell>Jared Olsen</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2/18/2024</Table.Cell>
            <Table.Cell>TBA</Table.Cell>
            <Table.Cell>Diane Ford</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3/3/2024</Table.Cell>
            <Table.Cell>Jimmy MacDougall</Table.Cell>
            <Table.Cell>Nate Baldwin</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3/17/2024</Table.Cell>
            <Table.Cell>Jared Olsen</Table.Cell>
            <Table.Cell>TBA</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4/7/2024</Table.Cell>
            <Table.Cell>General Conference</Table.Cell>
            <Table.Cell>General Conference</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <hr style={{ width: '65%' }} />
      <Table celled basic='very' collapsing stackable className='teaching-schedule-table' style={{ margin: 'auto' }} textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={2}>2024 Book of Mormon - Youth Sunday School</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Class</Table.HeaderCell>
            <Table.HeaderCell>Teacher</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Course 12</Table.Cell>
            <Table.Cell>Danny & Sarah Barker</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Course 13</Table.Cell>
            <Table.Cell>Spencer & Alex Groneman</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Course 14 & 15</Table.Cell>
            <Table.Cell>Madi Brown & McKaylee Pacheco</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Course 16 & 17</Table.Cell>
            <Table.Cell>Colby & Mandie Bentley</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default SSTeachingSchedule;
