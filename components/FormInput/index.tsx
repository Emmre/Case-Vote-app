import React, { FC } from "react";
import Input from "components/Input";
import Button from "components/Button";
import styled from "./form.module.scss";
import { postData } from "services";
import { IChoice, IQuestion } from "types";

const Form: FC<IChoice> = () => {
  const addQuestion = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let question = formData.get("question");
    let choices = formData.getAll("choices");
    let newChoice = choices.filter((n) => n);

    if (!String(question)?.length || !newChoice.length) {
      return alert("Please write something.");
    }

    try {
      await postData({ question, newChoice } as IQuestion);
    } catch (e) {
      console.log(e, "Error");
    }
  };

  return (
    <form className={styled.form} onSubmit={addQuestion}>
      <div>
        <Input
          name="question"
          label="Question?"
          placeholder="Add some question"
        />
        <div className={styled.choices}>
          <Input
            name="choices"
            label="Choice 1"
            placeholder="Add some choice"
          />
          <Input
            name="choices"
            label="Choice 2"
            placeholder="Add some choice"
          />
          <Input
            name="choices"
            label="Choice 3"
            placeholder="Add some choice"
          />
        </div>
        <Button type="submit">Please add your question...</Button>
      </div>
    </form>
  );
};

export default Form;
