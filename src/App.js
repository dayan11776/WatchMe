import './App.css';
import { Header } from './components';
import { Footer } from './components/layouts/Footer';
import { AllRoutes } from './routes/AllRoutes';
import { useState } from 'react';


export default function App() {
   const [dropdown,setDropdown] = useState(false)
  
  return (
    <div className='dark:bg-black relative'>
      <Header dropdown={dropdown} setDropdown={setDropdown}/>
      <AllRoutes setDropdown={setDropdown}/>
      <Footer />
    </div>
  );
}
