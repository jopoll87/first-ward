import InfoRow from '../InfoRow';
import SSTeachingSchedule from './SSTeachingSchedule';

const SundaySchool = () => {
  const comeFollowMe =
    'https://www.churchofjesuschrist.org/study/come-follow-me?lang=eng';

  return (
    <div className='activities'>
      <h2>Sunday School</h2>

      <h3 className='info-section-header'>Presidency</h3>
      <InfoRow label='President' value='Jimmy MacDougall' />
      <InfoRow label='1st Counselor' value='Brian Hall' />
      <InfoRow label='2nd Counselor' value='Adam Jacobson' />
      <InfoRow label='Secretary' value='Kyle Shupe' />

      <h3 className='info-section-header'>Meeting Info</h3>
      <InfoRow label='Schedule' value='1st & 3rd Sundays' />
      <InfoRow label='Class Time' value='9:40 AM – 10:30 AM' />

      <p className='activity-note'>
        Lesson resources can be found at the{' '}
        <a href={comeFollowMe} target='_blank' rel='noopener noreferrer'>
          Come Follow Me
        </a>{' '}
        webpage. Direct links to weekly lessons are available in the Teaching
        Schedule.
      </p>

      <h3 className='info-section-header'>Teaching Schedule</h3>
      <SSTeachingSchedule />
    </div>
  );
};

export default SundaySchool;
