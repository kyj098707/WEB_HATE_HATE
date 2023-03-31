import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  position: relative;

  overflow: hidden;

  &::before {
    width: 100%;
    height: 100%;

    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${`${process.env.PUBLIC_URL}/assets/main-background.png`});
    background-size: cover;
    background-repeat: no-repeat;

    position: absolute;
    top: 0px;
    left: 0px;

    z-index: -1;

    content: "";

    filter: blur(10px);

    transform: scale(1.03);
  }
`;

const StyledSearcBarWrapper = styled.div`
  /* width: 100%;
  height: 50px;

  display: flex;
  justify-content: center; */

  margin-top: 100px;
`;

const Home = () => {
  return (
    <StyledHome className="Home">
      <StyledSearcBarWrapper>
        <SearchBar />
      </StyledSearcBarWrapper>
    </StyledHome>
  );
};

export default Home;
