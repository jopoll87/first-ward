import React from 'react';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import GeneralInfo from './components/GeneralInfo';
import Program from './components/Program';
import Activities from './components/Activities';
import GeneralButton from './components/GeneralButton';

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
      <PageHeader />

      <main>
        <div className='main-buttons'>
          <GeneralButton buttonName='General Info' handleClick={handleGeneralInfo} />
          <GeneralButton
            buttonName='Sacrament Meeting Program'
            handleClick={handleProgram}
          />
          <GeneralButton
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
