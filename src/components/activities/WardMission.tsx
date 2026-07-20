import InfoRow from '../InfoRow';

const WardMission = () => {
  return (
    <div className='activities'>
      <h2>Ward Mission</h2>

      <h3 className='info-section-header'>Local Missionaries</h3>
      <InfoRow label='Mission Leader' value='Bruce Browning' />
      <InfoRow label='Ward Missionary' value='Colby Bentley' />
      <InfoRow label='Ward Missionary' value='Mandie Bentley' />
      <InfoRow label='Ward Missionary' value='Diane Ford' />
      <InfoRow label='Ward Missionary' value='Reed Poll' />
      <InfoRow label='Ward Missionary' value='Kaylee McKay' />
      <InfoRow label='Ward Missionary' value='Kelly Olson' />

      <h3 className='info-section-header'>Fulltime Missionaries</h3>
      <InfoRow label='Missionaries' value='Elder Riddell & Elder Buck' />
      <InfoRow label='Contact' value='(801) 651-8961' />
    </div>
  );
};

export default WardMission;
