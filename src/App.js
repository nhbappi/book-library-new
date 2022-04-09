
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Books from './Component/Books/Books';
import Login from './Component/Login/Login';
import Navigation from './Component/Navigation/Navigation';
import NotFound from './Component/NotFound/NotFound';



function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
    
      <Routes>
        <Route path='/' element = {<Home></Home>}> </Route>
        <Route path='/home' element ={<Home></Home>}> </Route>
        <Route path='/books' element ={<Books></Books>}> </Route>
        <Route path='/login' element = {<Login></Login>}> </Route>
        <Route path='*' element = {<NotFound></NotFound>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
