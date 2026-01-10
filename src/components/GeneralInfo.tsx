import { Table } from 'semantic-ui-react';
import { BISHOPRIC, PresidencyType } from '../data/AdultData';

const GeneralInfo = () => {
  return (
    <div className='info'>
      <h2>1st Ward General Info</h2>
      <h3>Bishopric</h3>
      <div>
        <Table basic='very' celled collapsing>
          <Table.Body>
            {BISHOPRIC.map((member: PresidencyType) => (
              <Table.Row key={member.id}>
                <Table.Cell><strong>{member.calling}:</strong> {member.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <hr/>
      <p>
        The South Weber First Ward Meets on Sundays from{' '}
        <span>8:30am to 10:30am.</span>
      </p>
      <p>
        Sacrament Meeting is from <span>8:30am to 9:30am.</span>
      </p>
      <p>
        Second Hour Meetings: <span>9:40am to 10:30am.</span>
      </p>
      <ul>
        <li>Every Sunday: Primary</li>
        <li>First and Third Sundays: Sunday School</li>
        <li>
          Second and Fourth Sundays: Priesthood, Relief Society, and Youth
          classes
        </li>
        <li>Fifth Sundays: Special Meetings</li>
      </ul>
    </div>
  );
};

export default GeneralInfo;
