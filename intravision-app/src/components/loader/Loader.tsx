import React from 'react';
import loader from '../../assets/images/rings.svg';
import StyledLoader from './styled';

const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <img style={{ width: '100px', height: '100px' }} src={loader} alt="загрузка" />
    </StyledLoader>
  );
};

export default Loader;
