import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopupPersonStatus, getUsers } from '../../selectors/selectors';
import close from '../../assets/images/close.png';
import StyledChoosePerson, {
  StyledClose, StyledInput, StyledInsidePerson, StyledPerson, StyledPersonWrapper,
} from './styled';
import choosePersonAction from '../../actions/choosePersonAction';

const ChoosePerson: React.FC = () => {
  const users = useSelector(getUsers);
  const popupStatus = useSelector(getPopupPersonStatus);
  const { changeStatus } = choosePersonAction;
  const dispatch = useDispatch();

  return (
    <StyledChoosePerson status={popupStatus}>
      <StyledInsidePerson>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <StyledClose
          src={close}
          alt="закрыть"
          onClick={() => {
            dispatch(changeStatus(false));
            document.body.style.overflow = 'auto';
          }}
        />
        <StyledInput>
          <input type="text" />
        </StyledInput>
        <StyledPersonWrapper>
          {
            users.map((user) => {
              return (
                <StyledPerson key={user.id}>
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <p
                    onClick={() => {
                      dispatch(changeStatus(false));
                      document.body.style.overflow = 'auto';
                    }}
                  >
                    {user.name}
                  </p>
                </StyledPerson>
              );
            })
          }
        </StyledPersonWrapper>
      </StyledInsidePerson>
    </StyledChoosePerson>
  );
};

export default ChoosePerson;
