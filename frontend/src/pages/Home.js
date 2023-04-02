import styled from "styled-components";
import SearchBar from "../components/SearchBar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../components/Card";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

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

const StyledSwiperWrapper = styled.div`
  width: 100%;

  margin-top: 250px;
`;

const Home = () => {
  return (
    <StyledHome className="Home">
      <StyledSearcBarWrapper>
        <SearchBar />
      </StyledSearcBarWrapper>
      <StyledSwiperWrapper>
        <Swiper
          slidesPerView={"auto"}
          // loop={true}
          centeredSlides={true}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          onSwiper={(swiper) => {
            console.log("onSwiper");
            console.log(swiper);
          }}
          onSlideChange={(e) => {
            console.log("onSlideChange");
            console.log(e);
          }}
        >
          <SwiperSlide>
            <Card id={1} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={4} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={5} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={6} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={7} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={8} />
          </SwiperSlide>
          <SwiperSlide>
            <Card id={9} />
          </SwiperSlide>
        </Swiper>
      </StyledSwiperWrapper>
    </StyledHome>
  );
};

export default Home;
