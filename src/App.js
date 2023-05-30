import React from 'react';
import './App.css';

import { Header, Main  } from './containers';
import { Navbar } from './components';

function App() {

  return (
    <div>
      <Navbar />
      <Header/>
      <Main />
    </div>
  );
}

export default App;
