import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { paths } from "./path/paths";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ={paths.login} element={<Login/>}/>
          <Route path ={paths.register} element={<Register/>}/>
          <Route path ={paths.home} element={<Home/>}/>
        </Routes>
      </Router>
      <ToastContainer limit={1}/>
    </>
  );
}

export default App;
