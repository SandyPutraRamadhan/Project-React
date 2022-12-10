import Login from './component/Login';
import Register from './component/Register'
import Home from './view/Home';
import Category from './component/Category';
import Dashboard from './component/Dashboard'
import Makanan from './Menu/Makanan';
import Minuman from './Menu/Minuman'
import Edit from './view/PutMakanan';
import {  Route, Routes  } from 'react-router-dom';
import Games from './Menu/Games';

function App() {
  return (
    <div>
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/makanan' element={<Makanan/>}/>
        <Route path='/minuman' element={<Minuman/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
