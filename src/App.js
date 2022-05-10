// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CardsDetails from './components/CardDetails';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/home';

function App() {
  return (
    <>
    <Header/>
   
    <Routes>
      <Route path='/'  element={<HomePage/>}/>
      <Route path='/cart/:id'  element={<CardsDetails/>}/>
      
    </Routes>
    </>
  );
}

export default App;
