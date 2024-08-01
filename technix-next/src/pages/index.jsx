import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import HomeThree from "../components/homes/home-3";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Technix Main Home"} />
      <HomeThree />
    </Wrapper>
  );
};

export default Home;