import InfoRow from '../InfoRow';
import GeneralConference from './GeneralConference';

const EldersQuorum = () => {
  return (
    <div className='activities'>
      <h2>Elders Quorum</h2>

      <h3 className='info-section-header'>Presidency</h3>
      <InfoRow label='President' value='Kenny Carson' />
      <InfoRow label='1st Counselor' value='Chase Poll' />
      <InfoRow label='2nd Counselor' value='AJ Colby' />
      <InfoRow label='Secretary' value='Steve Decker' />

      <h3 className='info-section-header'>Meeting Info</h3>
      <InfoRow label='Schedule' value='2nd & 4th Sundays' />
      <InfoRow label='Location' value='Stage' />

      <p className='activity-note'>Please note that some weeks have 2 talks assigned for discussion.</p>

      <h3 className='info-section-header'>Lesson Schedule</h3>
      <div className='conference-center'>
        <GeneralConference />
      </div>
    </div>
  );
};

export default EldersQuorum;
