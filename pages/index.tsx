import type { NextPage } from "next";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Body>Store</Body>
      <Footer />
    </div>
  );
};

export default Home;
