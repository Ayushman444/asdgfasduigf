import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import {Dashboard} from "./Pages/Dashboard"
import { Play } from "./Pages/Play";
import { SignUp } from "./Pages/SignUp";
import { CreateRoom } from "./Pages/CreateRoom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/create" element={<CreateRoom/>} />
        
      </Routes>
    </div>
  );
}

export default App;
