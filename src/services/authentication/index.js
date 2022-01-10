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
