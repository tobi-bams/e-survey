import request from "..";

export async function GET_USER_QUESTION(callback, onError) {
  try {
    let question = await request.get(`/user-questions`);
    if (question.data) {
      callback && callback(question.data);
    } else {
      throw question;
    }
    return question;
  } catch (error) {
    onError && onError(error);
  }
}
