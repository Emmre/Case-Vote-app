import Button from "components/Button";
import { FC, memo } from "react";
import { deleteData, voteChoice } from "services";
import { ICardProps, IChoice } from "types";
import styled from "./card.module.scss";

const Card: FC<ICardProps> = ({ item, detailPage = false }) => {
  const { question, url, choices } = item;
  let newUrl = url.replace(/^\/|\/$/g, "");
  let id = url.replace("/questions/", "");

  const handleVote = async (
    questionId: number,
    choiceId: any,
    choice: string | any
  ) => {
    try {
      await voteChoice(questionId, choiceId, choice);
    } catch (e) {
      console.log(e, "Error");
    }
  };

  const deleteQuestion = async (id: number) => {
    try {
      await deleteData(id);
    } catch (e) {
      console.log(e, "Error");
    }
  };

  return (
    <div className={styled.card}>
      <div className={styled.title}>{question}</div>
      {choices.map((item: IChoice, idx: number) => {
        const { choice, votes, url } = item;
        return (
          <a {...(!detailPage && { href: `/${newUrl}/` })} key={idx}>
            <div className={styled.detail}>
              <span>{choice}</span>
              {detailPage ? (
                <button onClick={() => handleVote(id, url, choice)}>
                  {votes}
                </button>
              ) : (
                <span>{votes}</span>
              )}
            </div>
          </a>
        );
      })}
      <Button onClick={() => deleteQuestion(id)}>Delete</Button>
    </div>
  );
};

export default memo(Card);
