import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TabBar } from './components/TabBar/TabBar';
import { Library } from './pages/Library/Library';
import { Welcome } from './pages/Welcome/Welcome';

import HomeEnabled from './assets/icons/home-enabled.svg';
import HomeDisabled from './assets/icons/home-disabled.svg';
import SearchEnabled from './assets/icons/search-enabled.svg';
import SearchDisabled from './assets/icons/search-disabled.svg';
import LibraryEnabled from './assets/icons/library-enabled.svg';
import LibraryDisabled from './assets/icons/library-disabled.svg';

function App() {
  return (
    <>
      <div className="page-container">
        <Router>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/library" element={<Library />} />
            <Route path="/"  element={<Welcome />} />
          </Routes>
        </Router>
      </div>
      <div className="tab-bar-container">
        <TabBar icons={[
          { activeUrl: HomeEnabled, deactiveUrl: HomeDisabled},
          { activeUrl: SearchEnabled, deactiveUrl: SearchDisabled},
          { activeUrl: LibraryEnabled, deactiveUrl: LibraryDisabled}
        ]} />
      </div>
    </>
  );
}

export default App;
