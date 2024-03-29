import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer';
const App = () => {
  return (
    <>

      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='main-cntainer'>
          <div className='sidenva-container'>

          </div>
          <div className='app-content'>
            <Outlet />
          </div>

        </div>
        <div className='footer-container'>
          <Footer />
        </div>

      </div>


    </>
  );
}
export default App;
