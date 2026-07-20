import InfoRow from '../InfoRow';
import GeneralConference from './GeneralConference';

const ReliefSociety = () => {
  return (
    <div className='activities'>
      <h2>Relief Society</h2>

      <h3 className='info-section-header'>Presidency</h3>
      <InfoRow label='President' value='Shae Brown' />
      <InfoRow label='1st Counselor' value='Conya Pacheco' />
      <InfoRow label='2nd Counselor' value='Jeni Poll' />
      <InfoRow label='Secretary' value='Allison Hurst' />

      <h3 className='info-section-header'>Meeting Info</h3>
      <InfoRow label='Schedule' value='2nd & 4th Sundays' />
      <InfoRow label='Location' value='Relief Society Room' />

      <p className='activity-note'>Please note that some weeks have 2 talks assigned for discussion.</p>

      <h3 className='info-section-header'>Lesson Schedule</h3>
      <GeneralConference />
    </div>
  );
};

export default ReliefSociety;