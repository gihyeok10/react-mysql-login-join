import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from '../redux/actions/loginAction';
import  Axios  from 'axios'
const LoginPage = () => {
  const [password, setPassword]= useState("")
  const [name, setName] = useState("");
  const navigate = useNavigate()
  const joinGo = () => {
    navigate("/join")
  } 
  const dispatch = useDispatch();
  // const id = "v5fKtgSmq9N8oc_FeG_7"
  // const pw = "XAZi9ViGP4"
  // const newsApi = async() => {
  //    Axios.get("/v1/search/news.json",{
  //     params:{
  //       query:"스포츠"
  //     },
  //     headers:{
  //       'X-Naver-Client-Id':id,
  //       'X-Naver-Client-Secret':pw,
  //     }
      
  //   }).then((res)=> {
  //     console.log("뉴스데이타다",res.data)
  //   })
  // }
  // useEffect(() => {newsApi()},[])


  const [data, setData] = useState(null);  
  const onClick = async () => {
    try {
      const response = await Axios.get(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=95dbe05fd0a94565ad2bb9718feb8d06',
      );
      setData(response.data);
      console.log(response.data)
    } catch(e) {
      console.log(e);
    }    
  };
  const handelLogin = () => {
    Axios.post("http://localhost:3001/login",{
      password:password,
      name:name
    }).then((res)=>{
      console.log("핸들로긴",res)
      if(res.data[0].cnt === 1){
        dispatch(loginAction.login(name,password))
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
        <button onClick={onClick}>api Go!!</button>

      </div>

          {data&& data.articles.map((item,index)=> {
            return <div key={item.index}><h1>{item.title}</h1>
            <p>{item.content}</p>
            <img src={item.urlToImage}/>
            </div>
          })}
      </div>
  )
}

export default LoginPage