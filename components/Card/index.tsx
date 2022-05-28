import Button from "components/Button";
import { FC, memo } from "react";
import { deleteData } from "services";
import { ICardProps, IChoice } from "types";
import styled from "./card.module.scss";

const Card: FC<ICardProps> = ({ item, redirect = false }) => {
  const { question, url, choices } = item;
  let newUrl = url.replace(/^\/|\/$/g, "");
  let id = url.replace("/questions/", "");

  return (
    <div className={styled.card}>
      <div className={styled.title}>{question}</div>
      {choices.map((item: IChoice, idx: number) => {
        const { choice, votes } = item;
        return (
          <a
            className={!redirect ? styled.disabled : styled.link}
            href={`/${newUrl}/`}
            key={idx}
          >
            <div className={styled.detail}>
              <span>{choice}</span>
              <span>{votes}</span>
            </div>
          </a>
        );
      })}
      <Button onClick={() => deleteData(id)}>Delete</Button>
    </div>
  );
};

export default memo(Card);
