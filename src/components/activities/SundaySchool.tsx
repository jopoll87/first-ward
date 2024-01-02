import React from 'react';
import Button from '../Button';
import SSTeachingSchedule from './SSTeachingSchedule';

const SundaySchool = () => {
  const [teachingSchedule, setTeachingSchedule] = React.useState(false);

  const handleTeachingSchedule = () => {
    setTeachingSchedule(!teachingSchedule);
  }

  const comeFollowMe = 'https://www.churchofjesuschrist.org/study/come-follow-me?lang=eng';
  
  return (
    <div className='activities'>
            <h2>Sunday School</h2>
            <p><span>Presidency: </span></p>
            <ul>
              <li><span>President: </span>Scott Hayes</li>
              <li><span>1st Counselor: </span>Brodie Nielson</li>
              <li><span>2nd Counselor: </span>Jon Poll</li>
              <li><span>Secretary: </span>Kyle Shupe</li>
            </ul>
            <p>Meets on the First and Third Sundays of the month</p>
            <p>Discussion Topics can be found at the <a href={comeFollowMe}>Come Follow Me</a> webpage</p>
            <p>Class Time: 12:40pm - 1:30pm</p>
            <p>Sunday School Classrooms:</p>
            <ul>
              <li><span>Course 12: </span>Classroom east of the library</li>
              <li><span>Course 13: </span> Classroom west of the 8th Ward's Bishop's office</li>
              <li><span>Course 14 & 15: </span>Classroom north of Pioneer Ward's Bishop's office</li>
              <li><span>Course 16 & 17: </span>On the stage</li>
              <li><span>Adult Classes: </span>Relief Society room & YW/Baptismal Font room</li>
            </ul>
            <div className='teaching-schedule'>
              <Button buttonName='Teaching Schedule' handleClick={handleTeachingSchedule} />
            </div>
            <div>
              {teachingSchedule && (
                <SSTeachingSchedule />
              )}
            </div>
          </div>
  )
}

export default SundaySchool