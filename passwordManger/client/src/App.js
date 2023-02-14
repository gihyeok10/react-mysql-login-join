import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage'
import Join from './pages/JoinPage'
import Success from './pages/SuccessPage'

function App() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  const addPassword = () => {
    Axios.post("http://localhost:3001/addpassword", {
      password:password,
      name:name,
      phone:phone,
    });
  };
  return (
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>}></Route>
					<Route path="/join" element={<Join/>}></Route>
					<Route path="/success" element={<Success/>}></Route>
				</Routes>
			</BrowserRouter>
   
  );
}

export default App;
