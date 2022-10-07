import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlogs';
import Login from './blog/Login'
import Admin from './blog/Admin.js'
import CompPartidos from './blog/Partidos.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Verpartidos from './blog/Verpartidos.js'





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                    <button > <i className="fa-brands fa-react" ></i></button>
      </header>
      <BrowserRouter>
        <Routes>
        <Route path='/app' element={ <Admin />} />
        <Route path='/login' element={ <Login />} />
           <Route path='/' element={ <CompShowBlogs />} />
            <Route path='/create' element={ <CompCreateBlog />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} />
            <Route path='/usuarios/Crear' element={ <CompPartidos />} />
            <Route path='/usuarios/part' element={ <Verpartidos />} />
        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
