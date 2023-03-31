import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;

  width: 720px;

  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 10px;
`;

const StyledInput = styled.input`
  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;

  font-size: 14px;

  border: none;
  border-radius: 10px;
  outline: none;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledInput type={"text"} placeholder={"검색어 입력"} />
    </StyledSearchBar>
  );
};

export default SearchBar;
