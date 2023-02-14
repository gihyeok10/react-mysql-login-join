import React from 'react'
import Axios from "axios";
import {useState} from "react"

const JoinPage = () => {
  const [password, setPassword]= useState("")
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
    <div className="App">
      <div className="AddingPassword">
        <input
          type="text"
          placeholder="EX. password123"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="EX. 김기혁"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <input
          type="text"
          placeholder="EX. 01046418141"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>

        
        <button onClick={addPassword}>Add Password</button>
      </div>
      </div>
  )
}

export default JoinPage