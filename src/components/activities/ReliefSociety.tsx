import GeneralConference from './GeneralConference'

const ReliefSociety = () => {  
  return (
    <div className='activities'>
      <h2>Relief Society</h2>
      <p><span>Presidency: </span></p>
      <ul>
        <li><span>President: </span>Shae Brown</li>
        <li><span>1st Counselor: </span>Conya Pacheco</li>
        <li><span>2nd Counselor: </span>Jeni Poll</li>
        <li><span>Secretary: </span>Allison Hurst</li>
      </ul>
      <p>Upcoming Activities: TBD</p>
      <p>Meets on the Second and Fourth Sundays of the month.</p>
      <p><span>Meeting Location: </span>Relief Society Room</p>
      <p>Please note that some weeks have 2 talks assigned for discussion</p>
      <h3>Lesson Schedule</h3>
      <GeneralConference />
    </div>
  )
}

export default ReliefSociety