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

export async function SUBMIT_USER_QUESTION(data, callback, onError) {
  try {
    let questions = await request.post(`/submit-response`, data);
    if (questions.data) {
      callback && callback(questions.data);
    } else {
      throw questions;
    }
    return questions;
  } catch (err) {
    onError && onError(err);
  }
}
