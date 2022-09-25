import { GetStaticPaths } from "next";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <Body>
        <ol>
          Settings
          <li>yarn install</li>
          <li>yarn dev</li>
          <li>json-server -p 9000 db.json</li>
          <li>
            Stack - Next.js, Typescript, Styled-components, React-Bootstrap,
            axios
          </li>
        </ol>
        <ol>
          Progress
          <li>헤더 - 바디 - 푸터 형식으로 표현 - [O]</li>
          <li>
            헤더에는 프로젝트이름(AWESOME FOOD STORE)과 메뉴(ABOUT + STORE) 표현
            - [O]
          </li>
          <li>푸터에는 카피라이트 추가(@ 2021 내이름) - [O]</li>
          <li>ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지) - [O]</li>
          <li>
            STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용) - [O]
          </li>
          <li>
            하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명,
            홈페이지 바로가기(url이 있을 경우)를 표현 - [O]
          </li>
          <li>팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘 - [O]</li>
          <li>
            정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인
            페이지로 이동 - [O]
          </li>
        </ol>
        <ol>
          Review
          <ul>
            Takeaway
            <li>
              Css Framework에 대해 경험이 적었으나 해당 프로젝트를 통해
              React-bootstrap에 대한 인사이트가 생김
            </li>
            <li>
              map을 통해서 각 컴포넌트에 접근하는 방법에 대한 확실한 이해를 갖게
              됨
            </li>
            <li>
              타입 선언을 interface로 통일하며 interface와 type의 차이를 알게 됨
            </li>
            <li>
              정적페이지를 검색하면서 SSG와 SSR에 대한 이해를 높이게 됨
            </li>
          </ul>
          <ul>
            Regret
            <li>
              JSON 파일을 불러올 때 개행문자에 대한 처리를 놓쳐서 가독성이
              떨어지는 모달을 생성하게 됨
            </li>
          </ul>
        </ol>
        <strong>구현 영상은 README에 업로드하였습니다.</strong>
      </Body>
      <Footer />
    </>
  );
};

export default About;
