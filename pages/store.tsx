import type { NextPage } from "next";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import StoreModal from "../components/StoreModal";

const Home: NextPage = () => {
  const [data, setData] = useState([]) as any;
  const [openModal, setOpenModal] = useState<string>("");

  const openHandler = (id) => {
    setOpenModal(id);
  };

  const closeHandler = () => {
    setOpenModal("");
  };

  useEffect(() => {
    axios.get("http://localhost:9000/stores").then((res) => {
      console.log(data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Body>
        <StoreItems>
          {data.map((user) => {
            return (
              <>
                <Columns
                  thumb={user.thumb}
                  onClick={() => openHandler(user.id)}
                />
                {openModal === user.id ? (
                  <StoreModal
                    open={openModal}
                    close={closeHandler}
                    title={user.name}
                    description={user.description}
                    image={user.image}
                    url={user.url}
                  />
                ) : null}
              </>
            );
          })}
        </StoreItems>
      </Body>
      <Footer />
    </div>
  );
};

const StoreItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 300px;
`;

const Columns = styled(StoreItems)`
  display: flex;
  align-items: center;
  min-height: 200px;
  min-width: 200px;
  margin: 10%;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.thumb});
  zoom: 1.2;
  border: 8px;

  transition-duration: 0.3s;
  transition-property: transform;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  &:hover {
    transform: scale(1.1);
  }
`;

export default Home;
