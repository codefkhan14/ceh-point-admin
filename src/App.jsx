import './App.css';
import Header from "./Components/Header/Header"
import Sidebar from './Components/Sidebar/Sidebar';
import Overview from './Pages/Overview/Overview';
import Excel from './Pages/Excel/Excel';
import Investor from './Pages/Investor/Investor';
import Insights from './Pages/Insights/Insights';
import Target from './Pages/Target/Target';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='container'>
          <div className='appleft'>
            <Sidebar/>
          </div>
          <div className='appright'>
          <Routes>
              <Route exact path='/' Component={Overview}></Route>

              <Route exact path='/Excel' Component={Excel}></Route>

              <Route exact path='/Insights' Component={Insights}></Route>
              <Route exact path="/user/:userId" Component={Investor}></Route>

              <Route exact path='/Target' Component={Target}></Route>

          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
