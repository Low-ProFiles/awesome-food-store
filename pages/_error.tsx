import Router from "next/router";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Error = () => {
  const text = "잘못된 접근입니다!";
  const [time, setTime] = useState<number>(5);
  const timeCheck = useRef(5);

  const timeout = () => {
    setTimeout(() => Router.push("/"), 5000);
  };

  useEffect(() => {
    timeout();
    timeCheck.current = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <ErrorPage>
      <Stack sx={{ width: "30%" }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          잘못된 접근입니다!{" "}
          <strong>{time}초 후에 메인페이지로 돌아갑니다</strong>
        </Alert>
      </Stack>
    </ErrorPage>
  );
};

const ErrorPage = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export default Error;
