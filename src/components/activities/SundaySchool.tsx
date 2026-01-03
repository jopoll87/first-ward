import SSTeachingSchedule from './SSTeachingSchedule';

const SundaySchool = () => {
  const comeFollowMe =
    'https://www.churchofjesuschrist.org/study/come-follow-me?lang=eng';

  return (
    <div className='activities'>
      <h2>Sunday School</h2>
      <p>
        <span>Presidency: </span>
      </p>
      <ul>
        <li>
          <span>President: </span>Jimmy MacDougall
        </li>
        <li>
          <span>1st Counselor: </span>Brian Hall
        </li>
        <li>
          <span>2nd Counselor: </span>Adam Jacobson
        </li>
        <li>
          <span>Secretary: </span>Kyle Shupe
        </li>
      </ul>
      <p>Meets on the First and Third Sundays of the month</p>
      <p>Class Time: 9:40am - 10:30am</p>
      <p>
        Lesson resources can be found at the{' '}
        <a href={comeFollowMe} target='_blank'>
          Come Follow Me
        </a>{' '}
        webpage. Direct links to weekly lessons are available in the Teaching
        Schedule.
      </p>

      <h3>Teaching Schedule</h3>
      <div>
        <SSTeachingSchedule />
      </div>
    </div>
  );
};

export default SundaySchool;
