import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import Main from './component/Main';
import Viewblog from './component/Viewblog';
import Addblog from './component/Addblog';
import Login from './component/Login';
import MyProfile from './component/MyProfile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/add' element={<Main child={<Addblog/>}/>}/>
        <Route path='/view' element={<Main child={<Viewblog/>}/>}/>
        <Route path='/my' element={<Main child={<MyProfile/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
