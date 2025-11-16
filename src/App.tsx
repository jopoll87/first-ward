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

  const wardChristmasPartyLink = 'https://docs.google.com/forms/d/e/1FAIpQLScEpidB17gg3w1OW_IZqslGR8EWGSlPEs6V-QIBtGfzzT-EMQ/viewform?usp=sharing&ouid=111659746328980918343';

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <h2 className='christmas'>Upload Family Photo <a href={wardChristmasPartyLink} target='_blank'>HERE</a></h2>
        <div className='main-buttons'>
          <div>
            <Button
              buttonName='General Info'
              handleClick={handleGeneralInfo}
            />
          </div>
          <div>
            <Button
              buttonName='Sacrament Meeting Program'
              handleClick={handleProgram}
            />
          </div>
          <div>
            <Button
              buttonName='Upcoming Activities'
              handleClick={handleUpcomingActivities}
            />
          </div>
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
