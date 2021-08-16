import { FC, ReactElement } from "react";
import PageTitle from "../components/PageTitle/PageTitle";

const Home: FC<{}> = (): ReactElement => {

  return (
    <div id="page-home">
      <PageTitle title="Home" />
    </div>
  )
}

export default Home;
