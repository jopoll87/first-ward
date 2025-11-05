import GeneralConference from './GeneralConference';

const EldersQuorum = () => {
  return (
    <div className='activities'>
      <h2>Elders Quorum</h2>
      <p>
        <span>Presidency: </span>
      </p>
      <ul>
        <li>
          <span>President: </span>Kenny Carson
        </li>
        <li>
          <span>1st Counselor: </span>Chase Poll
        </li>
        <li>
          <span>2nd Counselor: </span>AJ Colby
        </li>
        <li>
          <span>Secretary: </span>Steve Decker
        </li>
      </ul>
      <p>Upcoming Activities: TBD</p>
      <p>Meets on the Second and Fourth Sundays of the month.</p>
      <p>
        <span>Meeting Location: </span>Stage
      </p>
      <p>
        Please note that some weeks have 2 talks assigned for discussion.
      </p>
      <h3>Lesson Schedule</h3>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <GeneralConference />
      </div>
    </div>
  );
};

export default EldersQuorum;
