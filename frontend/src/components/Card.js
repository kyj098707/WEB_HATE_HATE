import styled from "styled-components";

const StyledCard = styled.div`
  width: 180px;
  height: 240px;

  position: relative;

  overflow: hidden;
  border-radius: 10px;

  padding-top: 140px;
`;

const Card = () => {
  return (
    <StyledCard className="Card">
      <img
        src="https://cdn.lol.ps/assets/img/champion-loading/350.webp"
        style={{ width: "100%", height: "100%", transform: "scale(1.1)" }}
      />
      <h3
        style={{
          width: "100%",
          height: "fit-content",
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          color: "white",
          fontSize: "1rem",
          fontWeight: "normal",
          background: "rgba(0, 0, 0, 0.7)",
          margin: "0px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        유미
      </h3>
    </StyledCard>
  );
};

export default Card;
