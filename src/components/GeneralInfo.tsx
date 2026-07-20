import InfoRow from './InfoRow';

const GeneralInfo = () => {
  return (
    <div className='info'>
      <h2>1st Ward General Info</h2>

      <h3 className='info-section-header'>Bishopric</h3>
      <InfoRow label='Bishop' value='Jared Miller' />
      <InfoRow label='1st Counselor' value='Jason Poll' />
      <InfoRow label='2nd Counselor' value='Abraham McKay' />
      <InfoRow label='Executive Secretary' value='Brodie Nielson' />
      <InfoRow label='Ward Clerk' value='Matt Gustafson' />

      <div className='info-divider'>✦ Meeting Schedule ✦</div>

      <h3 className='info-section-header'>Sunday Meetings</h3>
      <InfoRow label='Sacrament Meeting' value='8:30 AM – 9:30 AM' />
      <InfoRow label='Second Hour' value='9:40 AM – 10:30 AM' />

      <h3 className='info-section-header'>Second Hour Classes</h3>
      <InfoRow label='Every Sunday' value='Primary' />
      <InfoRow label='1st & 3rd Sundays' value='Sunday School' />
      <InfoRow label='2nd & 4th Sundays' value='Priesthood, Relief Society & Youth' />
      <InfoRow label='5th Sundays' value='Special Meetings' />
    </div>
  );
};

export default GeneralInfo;
