
const SSTeachingSchedule = () => {
  return (
    <div>
      <table className='teaching-schedule-table'>
        <tr>
          <th colSpan={3}>2024 Book of Mormon - Adult Sunday School</th>
        </tr>
        <tr>
          <th></th>
          <th>Relief Society Room</th>
          <th>YW/Font Room</th>
        </tr>
        <tr>
          <td>1/7/2024</td>
          <td>Jared Olsen</td>
          <td>Brandon Poll</td>
        </tr>
        <tr>
          <td>1/21/2024</td>
          <td>Diane Ford</td>
          <td>Jimmy MacDougall</td>
        </tr>
        <tr>
          <td>2/4/2024</td>
          <td>Nate Baldwin</td>
          <td>Jared Olsen</td>
        </tr>
        <tr>
          <td>2/18/2024</td>
          <td>TBA</td>
          <td>Diane Ford</td>
        </tr>
        <tr>
          <td>3/3/2024</td>
          <td>Jimmy MacDougall</td>
          <td>Nate Baldwin</td>
        </tr>
        <tr>
          <td>3/17/2024</td>
          <td>Jared Olsen</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td>4/7/2024</td>
          <td>General Conference</td>
          <td>General Conference</td>
        </tr>
      </table>
      <hr style={{ width: '65%' }} />
      <table className='teaching-schedule-table'>
        <tr>
          <th colSpan={2}>2024 Book of Mormon - Youth Sunday School</th>
        </tr>
        <tr>
          <th>Class</th>
          <th>Teacher</th>
        </tr>
        <tr>
          <td>Course 12</td>
          <td>Danny & Sarah Barker</td>
        </tr>
        <tr>
          <td>Course 13</td>
          <td>Spencer & Alex Groneman</td>
        </tr>
        <tr>
          <td>Course 14 & 15</td>
          <td>Madi Brown & McKaylee Pacheco</td>
        </tr>
        <tr>
          <td>Course 16 & 17</td>
          <td>Colby & Mandie Bentley</td>
        </tr>
      </table>
    </div>
  );
};

export default SSTeachingSchedule;
