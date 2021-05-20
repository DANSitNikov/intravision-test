import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopupStatus, getUsers } from '../../selectors/selectors';
import close from '../../assets/images/close.png';
import StyledChoosePerson, {
  StyledClose, StyledInput, StyledInsidePerson, StyledPerson,
} from './styled';
import choosePersonAction from '../../actions/choosePersonAction';

const ChoosePerson: React.FC = () => {
  const users = useSelector(getUsers);
  const popupStatus = useSelector(getPopupStatus);
  const { changeStatus } = choosePersonAction;
  const dispatch = useDispatch();

  return (
    <StyledChoosePerson status={popupStatus}>
      <StyledInsidePerson>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <StyledClose
          src={close}
          alt="закрыть"
          onClick={() => dispatch(changeStatus(false))}
        />
        <StyledInput>
          <input type="text" />
        </StyledInput>
        <div>
          {
            users.map((user) => {
              return (
                <StyledPerson>
                  <p>{user.name}</p>
                </StyledPerson>
              );
            })
          }
        </div>
      </StyledInsidePerson>
    </StyledChoosePerson>
  );
};

export default ChoosePerson;
