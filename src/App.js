import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Signup } from './components/signup';
import { Login } from './components/login';
import { Success} from './components/success';
import {Admin} from "./components/admin"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={<Signup/>}/>
        <Route path = "/login" element ={<Login/>}/>
        <Route path = "/success" element ={<Success/>}/>
        <Route path = "/admin" element ={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
