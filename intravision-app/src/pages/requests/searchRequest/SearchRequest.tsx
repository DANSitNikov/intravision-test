import React from 'react';
import { useSelector } from 'react-redux';
import StyledSearchRequest, {
  SearchButton, SearchImage, StyledInput, StyledSearchInputWrapper,
} from './styled';
import search from '../../../assets/images/search.png';
import { getPopupPersonStatus } from '../../../selectors/selectors';

const SearchRequest: React.FC = () => {
  const popupStatus = useSelector(getPopupPersonStatus);
  const clickHandler = () => {
    console.log('искать');
  };

  return (
    <StyledSearchRequest status={popupStatus}>
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
