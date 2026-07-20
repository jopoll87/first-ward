import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import GeneralInfo from './components/GeneralInfo';
import Program from './components/Program';
import Activities from './components/Activities';

type Section = 'generalInfo' | 'program' | 'activities';

function App() {
  const [activeSection, setActiveSection] = React.useState<Section | null>(null);

  const handleSection = (name: Section) =>
    setActiveSection(prev => (prev === name ? null : name));

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className='main-buttons' role='tablist'>
          <div>
            <Button
              buttonName='General Info'
              handleClick={() => handleSection('generalInfo')}
              isActive={activeSection === 'generalInfo'}
              ariaControls='main-section-content'
            />
          </div>
          <div>
            <Button
              buttonName='Sacrament Meeting Program'
              handleClick={() => handleSection('program')}
              isActive={activeSection === 'program'}
              ariaControls='main-section-content'
            />
          </div>
          <div>
            <Button
              buttonName='Upcoming Activities'
              handleClick={() => handleSection('activities')}
              isActive={activeSection === 'activities'}
              ariaControls='main-section-content'
            />
          </div>
        </div>
        <div id='main-section-content' role='tabpanel' tabIndex={0}>
          {activeSection === 'generalInfo' && <GeneralInfo />}
          {activeSection === 'program' && <Program />}
          {activeSection === 'activities' && <Activities />}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
