import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import  Axios  from 'axios'
const LoginPage = () => {
  const [password, setPassword]= useState("")
  const [name, setName] = useState("");
  const navigate = useNavigate()
  const joinGo = () => {
    navigate("/join")
  } 
  
  const handelLogin = () => {
    Axios.post("http://localhost:3001/login",{
      password:password,
      name:name
    }).then((res)=>{
      console.log("핸들로긴",res)
      if(res.data[0].cnt === 1){
        alert("로그인됌~이동함~")
        navigate("/success")
      }
      else{
        alert("존재하는 이름 또는 비번이 없습니다.")
        navigate('/')
      }
     
    }) 
  }
  
  return (
    <div className="App">
      <div className="AddingPassword">
        <label>이름</label>
        <input
          type="text"
          placeholder="EX. 김기혁"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      <label>비번</label>
        <input
          type="text"
          placeholder="EX. password123"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
 
        <button onClick={handelLogin}>로그인</button>
        <button onClick={joinGo}>회원가입</button>

      </div>
      </div>
  )
}

export default LoginPage