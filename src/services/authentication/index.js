import request from "..";

export async function LOGIN(data, callback, onError) {
  try {
    let login = await request.post(`/login`, data);
    if (login.data) {
      callback && callback(login.data);
    } else {
      throw login;
    }
    return login;
  } catch (error) {
    onError && onError(error);
  }
}

export async function SIGNUP(data, callback, onError) {
  try {
    let signup = await request.post(`/signup`, data);
    if (signup.data) {
      callback && callback(signup.data);
    } else {
      throw signup;
    }
    return signup;
  } catch (error) {
    onError && onError(error);
  }
}
