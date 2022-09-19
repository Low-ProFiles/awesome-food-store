import styled from "styled-components";
import Tab from "../Tab";

const Header = () => {
  return (
    <HeaderMain>
      <span>AWESOME FOOD STORE</span>
      <Tab />
    </HeaderMain>
  );
};

const HeaderMain = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 2%;
  font-size: 1.2vw;
  background-color: #e9e9e9;

  span {
    display: block;
    margin-bottom: 1%;
  }
`;

export default Header;
