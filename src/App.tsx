import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import GeneralInfo from './components/GeneralInfo';
import Program from './components/Program';
import Activities from './components/Activities';

function App() {
  const [generalInfo, setGeneralInfo] = React.useState(false);
  const [program, setProgram] = React.useState(false);
  const [activities, setActivities] = React.useState(false);

  const handleGeneralInfo = () => {
    setGeneralInfo(!generalInfo);
    setProgram(false);
    setActivities(false);
  };
  const handleProgram = () => {
    setProgram(!program);
    setGeneralInfo(false);
    setActivities(false);
  };
  const handleUpcomingActivities = () => {
    setActivities(!activities);
    setGeneralInfo(false);
    setProgram(false);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className='main-buttons'>
          <Button
            buttonName='General Info'
            handleClick={handleGeneralInfo}
          />
          <Button
            buttonName='Sacrament Meeting Program'
            handleClick={handleProgram}
          />
          <Button
            buttonName='Upcoming Activities'
            handleClick={handleUpcomingActivities}
          />
        </div>
        <div>
          {generalInfo && <GeneralInfo />}
          {program && <Program />}
          {activities && <Activities />}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
