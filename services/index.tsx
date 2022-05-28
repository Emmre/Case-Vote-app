import axios from "axios";
import { IQuestion } from "types";

export const getData = () => {
  const data = axios
    .get("https://polls.apiblueprint.org/questions")
    .then((res) => res.data);

  return data;
};

export const getDetails = (id: number) => {
  const data = axios
    .get(`https://polls.apiblueprint.org/questions/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return data;
};

export const postData = (questionData: IQuestion) => {
  const { question, newChoice: choices } = questionData;

  const data = axios
    .post("https://polls.apiblueprint.org/questions", {
      question,
      choices,
    })
    .finally(() => {
      window.location.reload();
    });

  return data;
};

export const deleteData = (id: number) => {
  const data = axios
    .delete(`https://polls.apiblueprint.org/questions/${id}`)
    .then((res) => res.data)
    .finally(() => window.location.reload());

  return data;
};

export const voteChoice = (
  question_id: number,
  choice_id: string,
  choice: string
) => {
  let newChoiceid = choice_id.replace(`/questions/${question_id}/choices/`, "");

  let dataObj = {
    question_id,
    votes: 1,
    choice,
  };

  const data = axios
    .post(
      `https://polls.apiblueprint.org/questions/${question_id}/choices/${newChoiceid}`,
      dataObj
    )
    .then((res) => res.data)
    .finally(() => window.location.reload());

  return data;
};
