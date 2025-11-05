import { Icon } from 'semantic-ui-react';
import { MeetingData, PROGRAMS } from '../data/SacramentMeetingData';

const Program = () => {
  return (
    <div className='info'>
      <h3>South Weber First Ward</h3>
      <h2 className='program'>Sacrament Meeting Program</h2>
      <hr />
      {PROGRAMS.map((program: MeetingData) => (
        <div key={program.id}>
          <h3>{program.date}</h3>
          {program.isStreaming && <h3>Watch Live Stream on <a href='https://www.youtube.com/@southweberfirstward5349' target='_blank'><Icon name='youtube' color='red' size='big'/></a></h3>}
          <br />
          <p>
            <span>Presiding: {program.presiding}</span>
          </p>
          <p>
            <span>Welcome: {program.conducting}</span>
          </p>
          <p>
            <span>
              Opening Hymn: {program.openingHymnNumber}, {program.openingHymn}
            </span>
          </p>
          <p>
            <span>Invocation: {program.invocation}</span>
          </p>
          <div>
            <p>
              <strong>Ward Business: {program.conducting}</strong>
            </p>
            <ul>
              <li>
                Additional ward news and calendar items can be found under the{' '}
                <span>Upcoming Activities</span> tab.
              </li>
            </ul>
          </div>
          <p>
            <span>
              Sacrament Hymn: {program.sacramentHymnNumber},{' '}
              {program.sacramentHymn}
            </span>
          </p>
          <p>
            <span>Administration of the Sacrament: </span>Members of the
            Priesthood
          </p>
          {program.isFast && <p>Fast and Testimony Meeting</p>}
          {!program.isFast && (
            <div>
              <p>
                <span>First Speaker: {program.speaker1}</span>
              </p>
              <p>
                <span>Second Speaker: {program.speaker2}</span>
              </p>
              <p>
                <span>
                  Intermediate Hymn: {program.intermediateHymnNumber === 0 ? '' : `${program.intermediateHymnNumber}, ${program.intermediateHymn}`}
                </span>
              </p>
              <p>
                <span>Third Speaker: {program.speaker3}</span>
              </p>
              {program.speaker4 !== '' ? (
                <p>
                  <span>Fourth Speaker: {program.speaker4}</span>
                </p>
              ) : undefined}
              {program.speaker5 !== '' ? (
                <p>
                  <span>Fifth Speaker: {program.speaker5}</span>
                </p>
              ) : undefined}
            </div>
          )}
          <div style={{marginTop: '10px'}}>
            <p>
              <span>
                Closing Hymn: {program.closingHymnNumber}, {program.closingHymn}
              </span>
            </p>
            <p>
              <span>Benediction: {program.benediction}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
