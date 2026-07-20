import InfoRow from '../InfoRow';

const AaronicPriesthood = () => {
  return (
    <div className='activities'>
      <h2>Aaronic Priesthood</h2>

      <h3 className='info-section-header'>Meeting Info</h3>
      <InfoRow label='Mission Prep' value='Every Sunday, 3:30 PM at the Stake Center' />
      <InfoRow label='Upcoming Activities' value='TBD' />
    </div>
  );
};

export default AaronicPriesthood;