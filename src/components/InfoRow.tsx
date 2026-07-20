type InfoRowProps = { label: string; value: string };

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className='info-row'>
    <span className='info-row-label'>{label}</span>
    <span className='info-row-value'>{value}</span>
  </div>
);

export default InfoRow;
