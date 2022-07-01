import React from 'react'
import Header from './Components/Header';
import GeneralInformation from './Components/GeneralInformation'
import Education from './Components/Education';
import Experience from './Components/Experience'

import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <GeneralInformation />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
