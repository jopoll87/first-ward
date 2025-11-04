import { Icon, Table } from 'semantic-ui-react';

const GeneralConference = () => {
  return (
    <div style={{margin: '0, 0'}}>
      <Table celled basic='very' collapsing className='teaching-schedule-table'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Conference Talk</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>November 9</Table.Cell>
            <Table.Cell>
              Elder Soares: Adorned. with the Virtue of Temperance{' '}
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>November 23</Table.Cell>
            <Table.Cell>Elder Brown: The Eternal Gift of Testimony</Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>December 14</Table.Cell>
            <Table.Cell>No Lesson: Stake Conference</Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>December 28</Table.Cell>
            <Table.Cell>
              Elder Cuvelier: The Name by Which Ye Are Called
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>January 11</Table.Cell>
            <Table.Cell>
              Elder Stevenson: Blessed Are the Peacemakers
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>January 25</Table.Cell>
            <Table.Cell>
              Elder Anderson: The Atoning Love of Jesus Christ{' '}
              <strong>and</strong> Elder Johnson: Be Reconciled to God
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>February 8</Table.Cell>
            <Table.Cell>
              Elder Gong: No One Sits Alone <strong>and</strong> Elder Cook: The
              Lord Is Hastening His Work
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>February 22</Table.Cell>
            <Table.Cell>
              Elder Johnson: The Power of Ministering to the One{' '}
              <strong>and</strong> ElderJackson: Remembering the Sheep
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>March 8</Table.Cell>
            <Table.Cell>
              President Oaks: The Family-Centered Gospel of Jesus Christ{' '}
              <strong>and</strong> Elder Rasband: The Family Proclamation -
              Words from God
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>March 22</Table.Cell>
            <Table.Cell>
              Elder Amos: The Good News Recipe <strong>and</strong> President
              Eyring: Proved and Strengthened in Christ
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>April 12</Table.Cell>
            <Table.Cell>
              Elder Kearon: Jesus Christ and Your New Beginning
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>April 26</Table.Cell>
            <Table.Cell>
              Elder Uchtdorf: Do Your Part with All Your Heart
            </Table.Cell>
            <Table.Cell>
              <Icon name='external alternate' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default GeneralConference;
