import { Outlet} from 'react-router-dom';
import { Footer, Header } from '../../components';
import './mainapp.scss'


const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
      <div className='header-wrapper'>
        <Header />
      </div>
      <div className='content-wrapper'>
        <Outlet />
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;