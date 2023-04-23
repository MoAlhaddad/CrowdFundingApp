import React from 'react';
import Sidebar from "./components/Sidebar";
import { Navbar } from './components';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar/>
        </div>
    <div className="flex-1 max-sm-10">
     <Navbar/>
      <Routes>
   <Route path="/" element={<Home />} />
        </Routes>
    </div>

      App</div>
  )
}

export default App