import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";

const Tab = () => {
  const aboutRoute = () => {
    Router.push("/");
  };
  const storeRoute = () => {
    Router.push("/store");
  };

  return (
    <HeaderMain>
      <button type="button" onClick={aboutRoute}>
        About
      </button>
      <button type="button" onClick={storeRoute}>
        Store
      </button>
    </HeaderMain>
  );
};

const HeaderMain = styled.div`
  button {
    font-size: 0.8vw;
    border: 0;
    background-color: #e9e9e9;
    display: inline-block;
    transition-duration: 0.3s;
    transition-property: transform;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      transform: scale(1.1);
    }
  }
`;
export default Tab;
