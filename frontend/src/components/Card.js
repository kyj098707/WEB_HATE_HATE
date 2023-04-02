import styled from "styled-components";

const StyledCard = styled.div`
  width: 400px;
  height: 200px;
  background-color: pink;
`;

const Card = ({ id }) => {
  return (
    <StyledCard className="Card">
      <h1>{id}</h1>
    </StyledCard>
  );
};

export default Card;
