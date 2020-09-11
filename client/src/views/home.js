import React, { Fragment } from "react";
import { Hero } from "../components";
import { Loading } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Fragment>
        <Hero />
      </Fragment>
    </div>
  );
};

export default Home;
