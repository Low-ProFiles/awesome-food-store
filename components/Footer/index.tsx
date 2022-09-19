import styled from "styled-components";

const Footer = () => {
  return (
    <FooterMain>
      <span>Copyright © Parkmincheol. All Rights Reserved</span>
    </FooterMain>
  );
};

const FooterMain = styled.div`
  display: grid;
  place-items: center;
  background-color: #e9e9e9;
  width: 100%;
  padding: 2%;
  font-size: 0.8vw;

  span {
    display: block;
    margin-bottom: 1%;
  }
`;

export default Footer;
