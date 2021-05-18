import styled from 'styled-components';

const StyledSearchRequest = styled.div`
  height: 65px;
  width: 100%;
  background: #d1e0ed;
  padding-top: 15px;
  padding-left: 17px;
  padding-bottom: 10px;
`;

export const StyledSearchInputWrapper = styled.div`
  position: relative;
  width: 680px;
  height: 35px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 7px rgba(0, 140, 240, 0.15), inset -1px 0 7px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  border: 1px solid #42aaff;
  padding-left: 30px;
  outline: none;
`;

export const SearchButton = styled.button`
  position: absolute;
  outline: none;
  background: white;
  border: none;
  top: 50%;
  right: 13px;
  transform: translate(-13px, -40%);
  
  &:hover {
    cursor: pointer;
  }
`;

export const SearchImage = styled.img`
  width: 19px;
  height: 19px;
`;

export default StyledSearchRequest;
