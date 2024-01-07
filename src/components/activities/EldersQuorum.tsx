import GeneralConference from './GeneralConference';

const EldersQuorum = () => {
  const generalConference = 'https://www.churchofjesuschrist.org/study/general-conference/2023/10?lang=eng';

  return (
    <div className='activities'>
      <h2>Elders Quorum</h2>
      <p><span>Presidency: </span></p>
      <ul>
        <li><span>President: </span>Jared Miller</li>
        <li><span>1st Counselor: </span>Chase Poll</li>
        <li><span>2nd Counselor: </span>AJ Colby</li>
        <li><span>Secretary: </span>Steve Decker</li>
      </ul>
      <p>Upcoming Activities: TBD</p>
      <p>Meets on the Second and Fourth Sundays of the month.</p>
      <p><span>Meeting Location: </span>Stage</p>
      <p>Discussion Topics can be found at the <a href={generalConference} target='_blank' >October 2023 General Conference</a> page</p>
      <h3>Lesson Schedule</h3>
      <GeneralConference />
    </div>
  )
}

export default EldersQuorum