import React from 'react';
import StyledSearchRequest, {
  SearchButton, SearchImage, StyledInput, StyledSearchInputWrapper,
} from './styled';
import search from '../../../assets/images/search.png';

const SearchRequest: React.FC = () => {
  const clickHandler = () => {
    console.log('clicked');
  };

  return (
    <StyledSearchRequest>
      <StyledSearchInputWrapper>
        <StyledInput />
        <SearchButton onClick={clickHandler}>
          <SearchImage src={search} alt="искать" />
        </SearchButton>
      </StyledSearchInputWrapper>
    </StyledSearchRequest>
  );
};

export default SearchRequest;
