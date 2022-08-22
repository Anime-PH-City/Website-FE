import type { NextPage } from "next";
import { homeStylesCss } from "../styles/pages/home";

const Home: NextPage = () => {
  return (
    <div css={homeStylesCss}>
      <h1 className="sam">Sammy</h1>
    </div>
  );
};

export default Home;
