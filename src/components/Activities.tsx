import React from 'react';
import Button from './Button';
import SundaySchool from './activities/SundaySchool';
import EldersQuorum from './activities/EldersQuorum';
import ReliefSociety from './activities/ReliefSociety';
import AaronicPriesthood from './activities/AaronicPriesthood';
import YoungWomen from './activities/YoungWomen';
import Primary from './activities/Primary';
import WardMission from './activities/WardMission';

type Section =
  | 'sundaySchool'
  | 'eldersQuorum'
  | 'reliefSociety'
  | 'aaronicPriesthood'
  | 'youngWomen'
  | 'primary'
  | 'wardMission';

const Activities = () => {
  const [activeSection, setActiveSection] = React.useState<Section | null>(null);

  const handleSection = (name: Section) =>
    setActiveSection(prev => (prev === name ? null : name));

  return (
    <div className='info'>
      <h2>Upcoming Activities</h2>
      <hr/>
      <div className='activity-buttons' role='tablist'>
        <div>
          <Button buttonName='Sunday School' handleClick={() => handleSection('sundaySchool')} isActive={activeSection === 'sundaySchool'} ariaControls='activities-content' />
        </div>
        <div>
          <Button buttonName='Elders Quorum' handleClick={() => handleSection('eldersQuorum')} isActive={activeSection === 'eldersQuorum'} ariaControls='activities-content' />
        </div>
        <div>
          <Button buttonName='Relief Society' handleClick={() => handleSection('reliefSociety')} isActive={activeSection === 'reliefSociety'} ariaControls='activities-content' />
        </div>
        <div>
          <Button buttonName='Aaronic Priesthood' handleClick={() => handleSection('aaronicPriesthood')} isActive={activeSection === 'aaronicPriesthood'} ariaControls='activities-content' />
        </div>
        <div>
          <Button buttonName='Young Women' handleClick={() => handleSection('youngWomen')} isActive={activeSection === 'youngWomen'} ariaControls='activities-content' />
        </div>
        <div>
          <Button buttonName='Primary' handleClick={() => handleSection('primary')} isActive={activeSection === 'primary'} ariaControls='activities-content' />
        </div>
        <div>
          <Button buttonName='Ward Mission' handleClick={() => handleSection('wardMission')} isActive={activeSection === 'wardMission'} ariaControls='activities-content' />
        </div>
      </div>
      <div id='activities-content' role='tabpanel' tabIndex={0}>
        {activeSection === 'sundaySchool' && <SundaySchool />}
        {activeSection === 'eldersQuorum' && <EldersQuorum />}
        {activeSection === 'reliefSociety' && <ReliefSociety />}
        {activeSection === 'aaronicPriesthood' && <AaronicPriesthood />}
        {activeSection === 'youngWomen' && <YoungWomen />}
        {activeSection === 'primary' && <Primary />}
        {activeSection === 'wardMission' && <WardMission />}
      </div>
    </div>
  )
}

export default Activities