import React from 'react';
import Button from './Button';
import SundaySchool from './activities/SundaySchool';
import EldersQuorum from './activities/EldersQuorum';
import ReliefSociety from './activities/ReliefSociety';
import AaronicPriesthood from './activities/AaronicPriesthood';
import YoungWomen from './activities/YoungWomen';
import Primary from './activities/Primary';
import WardMission from './activities/WardMission';

const Activities = () => {
  const [sundaySchool, setSundaySchool] = React.useState(false);
  const [eldersQuorum, setEldersQuorum] = React.useState(false);
  const [reliefSociety, setReliefSociety] = React.useState(false);
  const [aaronicPriesthood, setAaronicPriesthood] = React.useState(false);
  const [youngWomen, setYoungWomen] = React.useState(false);
  const [primary, setPrimary] = React.useState(false);
  const [wardMission, setWardMission] = React.useState(false);
  

  const handleSundaySchool = () => {
    setSundaySchool(!sundaySchool);
    setEldersQuorum(false);
    setReliefSociety(false);
    setAaronicPriesthood(false);
    setYoungWomen(false);
    setPrimary(false);
    setWardMission(false);
  };
  const handleEldersQuorum = () => {
    setEldersQuorum(!eldersQuorum);
    setSundaySchool(false);
    setReliefSociety(false);
    setAaronicPriesthood(false);
    setYoungWomen(false);
    setPrimary(false);
    setWardMission(false);
  }
  const handleReliefSociety = () => {
    setReliefSociety(!reliefSociety);
    setSundaySchool(false);
    setEldersQuorum(false);
    setAaronicPriesthood(false);
    setYoungWomen(false);
    setPrimary(false);
    setWardMission(false);
  }
  const handleAaronicPriesthood = () => {
    setAaronicPriesthood(!aaronicPriesthood);
    setSundaySchool(false);
    setEldersQuorum(false);
    setReliefSociety(false);
    setYoungWomen(false);
    setPrimary(false);
    setWardMission(false);
  }
  const handleYoungWomen = () => {
    setYoungWomen(!youngWomen);
    setSundaySchool(false);
    setEldersQuorum(false);
    setReliefSociety(false);
    setAaronicPriesthood(false);
    setPrimary(false);
    setWardMission(false);
  }
  const handlePrimary = () => {
    setPrimary(!primary);
    setSundaySchool(false);
    setEldersQuorum(false);
    setReliefSociety(false);
    setAaronicPriesthood(false);
    setYoungWomen(false);
    setWardMission(false);
  }
  const handleWardMission = () => {
    setWardMission(!wardMission);
    setSundaySchool(false);
    setEldersQuorum(false);
    setReliefSociety(false);
    setAaronicPriesthood(false);
    setYoungWomen(false);
    setPrimary(false);
  }
  
  return (
    <div className='info'>
      <h4>South Weber First Ward</h4>
      <h2 className='program'>Upcoming Activities</h2>
      <hr/>
      <div className='activity-buttons'>
        <div>
          <Button buttonName='Sunday School' handleClick={handleSundaySchool} />
        </div>
        <div>
          <Button buttonName='Elders Quorum' handleClick={handleEldersQuorum} />
        </div>
        <div>
          <Button buttonName='Relief Society' handleClick={handleReliefSociety} />
        </div>
        <div>
          <Button buttonName='Aaronic Priesthood' handleClick={handleAaronicPriesthood} />
        </div>
        <div>
          <Button buttonName='Young Women' handleClick={handleYoungWomen} />
        </div>
        <div>
          <Button buttonName='Primary' handleClick={handlePrimary} />
        </div>
        <div>
          <Button buttonName='Ward Mission' handleClick={handleWardMission} />
        </div>
      </div>
      <div>
        {sundaySchool && (
          <SundaySchool />
        )}
        {eldersQuorum && (
          <EldersQuorum />
        )}
        {reliefSociety && (
          <ReliefSociety />
        )}
        {aaronicPriesthood && (
          <AaronicPriesthood />
        )}
        {youngWomen && (
          <YoungWomen />
        )}
        {primary && (
          <Primary />
        )}
        {wardMission && (
          <WardMission />
        )}
      </div>
    </div>
  )
}

export default Activities