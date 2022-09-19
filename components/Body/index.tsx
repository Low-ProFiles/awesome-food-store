import styled from "styled-components";

interface BodyProps {
  children: any;
}

const Body = ({ children }: BodyProps) => {
  return <BodyMain>{children}</BodyMain>;
};

const BodyMain = styled.div`
  display: grid;
  place-content: center;
  width: 40%;
  height: 100%;
  margin: 2% auto;
  border-radius: 8px;
  border: 2px solid #888888;
  min-height: 650px;
`;

export default Body;
