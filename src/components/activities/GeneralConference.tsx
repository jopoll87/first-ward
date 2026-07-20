import { Icon, Table } from 'semantic-ui-react';
import { TALKS, ConferenceTalkType } from '../../data/ConferenceTalkData';

const getCurrentDate = (talks: ConferenceTalkType[]): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const uniqueDates = [...new Set(talks.map(t => t.date))];
  for (const date of uniqueDates) {
    if (new Date(`${date}, 2026`) >= today) return date;
  }
  return uniqueDates[uniqueDates.length - 1];
};

const GeneralConference = () => {
  const currentDate = getCurrentDate(TALKS);

  return (
    <div className='general-conference' style={{ overflowX: 'auto' }}>
      <Table celled basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Conference Talk</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {TALKS.map((talk: ConferenceTalkType) => (
            <Table.Row
              key={talk.id}
              className={talk.date === currentDate ? 'schedule-row-current' : ''}
            >
              <Table.Cell>{talk.date}</Table.Cell>
              <Table.Cell>
                {talk.name}: {talk.title}
              </Table.Cell>
              <Table.Cell>
                {talk.url && (
                  <a href={talk.url} target='_blank' rel='noopener noreferrer' className='schedule-link' aria-label={`${talk.name}: ${talk.title}`}>
                    <Icon name='external alternate' />
                  </a>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default GeneralConference;
