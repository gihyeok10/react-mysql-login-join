import React from 'react'
import { useSelector} from "react-redux";

const SuccessPage = () => {
  const { name,password } =
    useSelector((state) => state.login);
  return (
    <div>
      <h1>로그인 성공</h1>
      <h1>{name}환영합니다</h1>
      <h1>{password}비번이거죠?</h1>

    </div>
  )
}

export default SuccessPage