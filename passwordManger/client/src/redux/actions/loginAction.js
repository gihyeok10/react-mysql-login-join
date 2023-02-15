function login(name, password) {
  return (dispatch) => {
    dispatch({
      type: "SUCCESS_LOGIN",
      payload: {
        name: name,
        password: password,
      },
    });
  };
}

export const loginAction = {
  login,
};
