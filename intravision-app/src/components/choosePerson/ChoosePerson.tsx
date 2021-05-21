import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopupPersonStatus, getUsers } from '../../selectors/selectors';
import close from '../../assets/images/close.png';
import StyledChoosePerson, {
  StyledClose, StyledInsidePerson, StyledPerson, StyledPersonWrapper,
} from './styled';
import choosePersonAction from '../../actions/choosePersonAction';
import { ChangeRequestParameters } from '../../pages/requests/newRequest/NewRequest';

interface PropsType {
  setParameters: (arg: ChangeRequestParameters) => void,
  parameters: ChangeRequestParameters,
}

const ChoosePerson: React.FC<PropsType> = (props) => {
  const { setParameters, parameters } = props;
  const users = useSelector(getUsers);
  const popupStatus = useSelector(getPopupPersonStatus);
  const { changeStatus } = choosePersonAction;
  const dispatch = useDispatch();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(changeStatus(false));
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => document.removeEventListener('keydown', keyDownHandler);
  });

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
        <StyledPersonWrapper>
          {
            users.map((user) => {
              return (
                <StyledPerson key={user.id}>
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <p
                    onClick={() => {
                      dispatch(changeStatus(false));
                      setParameters({
                        ...parameters,
                        executorId: user.id,
                        executorName: user.name,
                      });
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
