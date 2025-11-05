import { Icon, Table } from 'semantic-ui-react';
import { TALKS, ConferenceTalkType } from '../../data/ConferenceTalkData';

const GeneralConference = () => {
  return (
    <Table celled basic='very' collapsing className='teaching-schedule-table' style={{margin: 'auto'}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Conference Talk</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {TALKS.map((talk: ConferenceTalkType) => (
          <Table.Row key={talk.id}>
            <Table.Cell>{talk.date}</Table.Cell>
            <Table.Cell>{talk.name}: {talk.title}</Table.Cell>
            <Table.Cell><a href={talk.url} target='_blank'><Icon name='external alternate' color='blue' /></a></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default GeneralConference;
