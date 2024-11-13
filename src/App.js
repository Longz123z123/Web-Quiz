
import './App.scss';
import Header from './components/Header/Headerr';
import { Outlet, Link } from 'react-router-dom';


const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header></Header>

      </div>
      <div className='main-container'>
        <div className='sidenav-container'></div>

      </div>
      <div className='app-content'>
        <Outlet></Outlet>
      </div>

    </div>
  );
}



export default App;
