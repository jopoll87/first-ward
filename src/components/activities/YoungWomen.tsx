import InfoRow from '../InfoRow';

const YoungWomen = () => {
  return (
    <div className='activities'>
      <h2>Young Women</h2>

      <h3 className='info-section-header'>Presidency</h3>
      <InfoRow label='President' value='Amy Hayes' />
      <InfoRow label='1st Counselor' value='Tara Hadley' />
      <InfoRow label='2nd Counselor' value='Sandy Bybee' />
      <InfoRow label='Secretary' value='Kimi Gustafson' />

      <h3 className='info-section-header'>Upcoming Activities</h3>
      <InfoRow label='Activities' value='TBD' />
    </div>
  );
};

export default YoungWomen;