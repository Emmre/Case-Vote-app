import Card from "components/Card";
import Form from "components/FormInput";
import { FC } from "react";
import { getData } from "services";
import { IProps } from "types";

const Home: FC<IProps> = ({ res }) => {
  return (
    <div className="container content" data-testid="home-page">
      <Form />
      <div className="card-content">
        {res?.map((item, idx: number) => {
          return <Card item={item} key={idx} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData();
  return {
    props: {
      res,
    },
  };
}

export default Home;
