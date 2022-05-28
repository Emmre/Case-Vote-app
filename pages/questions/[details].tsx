import Card from "components/Card";
import { FC } from "react";
import { getDetails } from "services";
import { IData } from "types";

const Details: FC<IData> = ({ choices }) => {
  return (
    <div className="container content">
      <Card item={choices} detailPage />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { details } = context.params;
  const res = await getDetails(details);
  const choices = res.data;

  if (!res.data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      choices,
    },
  };
}

export default Details;
