// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CardsDetails from './components/CardDetails';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/home';
import Cards from './components/Cards';

function App() {
  return (
    <>
    <Header/>
   
    <Routes>
      <Route path='/'  element={<Cards/>}/>
      <Route path='/cart/:id'  element={<CardsDetails/>}/>
      
      
    </Routes>
    </>
  );
}

export default App;
