import { Icon } from 'semantic-ui-react';
import { MeetingData, PROGRAMS } from '../data/SacramentMeetingData';

type ProgramRowProps = { label: string; value: string };

const ProgramRow = ({ label, value }: ProgramRowProps) => (
  <div className='program-row'>
    <span className='program-label'>{label}</span>
    <span className='program-value'>{value}</span>
  </div>
);

const Program = () => {
  return (
    <div className='program-wrapper'>
      {PROGRAMS.map((program: MeetingData) => (
        <div key={program.id} className='program-card'>

          <div className='program-header'>
            <p className='program-ward-name'>South Weber First Ward</p>
            <h2 className='program-title'>Sacrament Meeting</h2>
            <p className='program-date'>{program.date}</p>
            <p className='program-time'>8:30 AM – 9:30 AM</p>
            {program.isStreaming && (
              <div className='program-stream'>
                <a
                  href='https://www.youtube.com/@southweberfirstward5349'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Watch Live Stream on YouTube'
                >
                  <Icon name='youtube' color='red' size='large' />
                  <span>Watch Live Stream</span>
                </a>
              </div>
            )}
          </div>

          <div className='program-section'>
            <ProgramRow label='Presiding' value={program.presiding} />
            <ProgramRow label='Conducting' value={program.conducting} />
            <ProgramRow
              label='Opening Hymn'
              value={`#${program.openingHymnNumber} — ${program.openingHymn}`}
            />
            <ProgramRow label='Invocation' value={program.invocation} />
            <ProgramRow label='Ward Business' value={program.conducting} />
          </div>
          <p className='program-note'>
            Additional ward news and calendar items can be found under the{' '}
            <strong>Upcoming Activities</strong> tab.
          </p>

          <div className='program-section-divider'>✦ Sacrament ✦</div>

          <div className='program-section'>
            <ProgramRow
              label='Sacrament Hymn'
              value={`#${program.sacramentHymnNumber} — ${program.sacramentHymn}`}
            />
            <ProgramRow
              label='Administration'
              value='Members of the Priesthood'
            />
          </div>

          {program.isFast ? (
            <>
              <div className='program-section-divider'>✦ Testimonies ✦</div>
              <div className='program-fast'>
                <p>Fast and Testimony Meeting</p>
              </div>
            </>
          ) : (
            <>
              <div className='program-section-divider'>✦ Speakers ✦</div>
              <div className='program-section'>
                {program.speaker1 && <ProgramRow label='Speaker' value={program.speaker1} />}
                {program.speaker2 && <ProgramRow label='Speaker' value={program.speaker2} />}
                {program.intermediateHymnNumber !== 0 && (
                  <ProgramRow
                    label='Intermediate Hymn'
                    value={`#${program.intermediateHymnNumber} — ${program.intermediateHymn}`}
                  />
                )}
                {program.speaker3 && <ProgramRow label='Speaker' value={program.speaker3} />}
                {program.speaker4 && <ProgramRow label='Speaker' value={program.speaker4} />}
                {program.speaker5 && <ProgramRow label='Speaker' value={program.speaker5} />}
              </div>
            </>
          )}

          <div className='program-section-divider'>✦ Closing ✦</div>

          <div className='program-section'>
            {program.closingHymnNumber !== 0 && (
              <ProgramRow
                label='Closing Hymn'
                value={`#${program.closingHymnNumber} — ${program.closingHymn}`}
              />
            )}
            <ProgramRow label='Benediction' value={program.benediction} />
          </div>

        </div>
      ))}
    </div>
  );
};

export default Program;
