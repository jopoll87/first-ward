import GeneralConference from './GeneralConference'

const ReliefSociety = () => {
  const generalConference = 'https://www.churchofjesuschrist.org/study/general-conference/2023/10?lang=eng';
  
  return (
    <div className='activities'>
      <h2>Relief Society</h2>
      <p><span>Presidency: </span></p>
      <ul>
        <li><span>President: </span>Cami Miller</li>
        <li><span>1st Counselor: </span>Natalie Browning</li>
        <li><span>2nd Counselor: </span>Tara Hadley</li>
        <li><span>Secretary: </span>Erika Walters</li>
      </ul>
      <p>Upcoming Activities: TBD</p>
      <p>Meets on the Second and Fourth Sundays of the month.</p>
      <p><span>Meeting Location: </span>Relief Society Room</p>
      <p>Discussion Topics can be found at the <a href={generalConference}>October 2023 General Conference</a> page</p>
      <h3>Lesson Schedule</h3>
      <GeneralConference />
    </div>
  )
}

export default ReliefSociety