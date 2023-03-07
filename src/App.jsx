import React from 'react';
import styles from './style';

import { Navbar, Hero, About, SoftSkills, Capabilities, Skills } from './components';

const App = () => (
  <div className = "bg-primary w-full overflow-hidden min-h-[1600px]">
    {/* navbar area */}

    <Navbar />
    <Hero />
    <About />
    <SoftSkills />
    <Capabilities />
    <Skills />

  </div>
);


export default App;

