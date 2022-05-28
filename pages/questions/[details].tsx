import Card from "components/Card";
import { FC } from "react";
import { getDetails } from "services";
import { IData } from "types";

const Details: FC<IData> = ({ choices }) => {
  return (
    <div className="container content">
      <Card item={choices} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { details } = context.params;
  const choices = await getDetails(details);

  return {
    props: {
      choices,
    },
  };
}

export default Details;
