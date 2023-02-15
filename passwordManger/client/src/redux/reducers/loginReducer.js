let initialState = {
  name:"",
  password:""
  };



  function loginReducer(state = initialState, action){

    let {type,payload} = action;

    switch(type) {
        case "SUCCESS_LOGIN":
            return{
                ...state,
                name:payload.name,
                password:payload.password,
            }

            default:return{...state}
    }

  }

  export default loginReducer