import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBarLogo = styled.div`
  color: white;
`;

const NavBarLogo = () => {
  return (
    <StyledNavBarLogo className="NavBarLogo">
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        HATE.HATE
      </Link>
    </StyledNavBarLogo>
  );
};

const StyledNavBarMenu = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const NavBarMenu = () => {
  // 메뉴 추가 확장 가능성 때문에 만들어놓음.
  return <StyledNavBarMenu className="NavBarMenu"></StyledNavBarMenu>;
};

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;

  background-color: black;
`;

const NavBar = () => {
  return (
    <StyledNavBar className="NavBar">
      <NavBarLogo />
      <NavBarMenu />
    </StyledNavBar>
  );
};

export default NavBar;
