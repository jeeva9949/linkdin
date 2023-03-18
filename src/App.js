import  {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Login from './components/login';
import Header from "./components/Header"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/home" element={<><Header/><Home/></>}/>
      </Routes>

      </BrowserRouter>
    
  );
}

export default App;
