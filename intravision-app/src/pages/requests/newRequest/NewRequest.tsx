import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledNewRequest, {
  StyledBorder, StyledChangeParametersBlock,
  StyledEditPanel, StyledMainContent,
  StyledNameRequest,
  StyledNewRequestCloseHeader,
  StyledNewRequestHeader,
} from './styled';
import close from '../../../assets/images/close.png';
import {
  getNewReqAddedStatus,
  getNewReqEditPanelStatus,
  getNewReqPanelStatus,
  getRequests,
} from '../../../selectors/selectors';
import createNewRequestAction from '../../../actions/createNewRequsetAction';
import NewRequestForm from './newRequestForm';
import AddCommentForm from './addCommentForm';
import Comment from '../../../components/comment';
import EditStatus from './components/editStatus';
import Applicant from './components/applicant';
import Executor from './components/executor';
import Priority from './components/priority';
import Creator from './components/creator';
import Deadline from './components/deadline';
import Tags from './components/tags';
import ChoosePerson from '../../../components/choosePerson/ChoosePerson';

const NewRequest: React.FC = () => {
  const panelStatus = useSelector(getNewReqPanelStatus);
  const editPanelStatus = useSelector(getNewReqEditPanelStatus);
  const addedStatus = useSelector(getNewReqAddedStatus);
  const newRequest = useSelector(getRequests)[0];
  const { changePanelStatus, changeEditPanelStatus } = createNewRequestAction;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changePanelStatus(false));
  };

  return (
    <StyledNewRequest panelStatus={panelStatus}>
      {
        !editPanelStatus
        && (
        <>
          <StyledNewRequestHeader>
            <p>Новая заявка</p>
            <StyledNewRequestCloseHeader onClick={handleClick}>
              <img src={close} alt="закрыть" />
            </StyledNewRequestCloseHeader>
          </StyledNewRequestHeader>
          <NewRequestForm />
        </>
        )
      }
      {
        editPanelStatus
        && (
          <>
            {
              addedStatus
                ? (
                  <>
                    <StyledNewRequestHeader>
                      <p>
                        №
                        {newRequest.id}
                      </p>
                      <StyledNameRequest>
                        {newRequest.name}
                      </StyledNameRequest>
                      <StyledNewRequestCloseHeader
                        onClick={() => {
                          handleClick();
                          dispatch(changeEditPanelStatus(false));
                        }}
                      >
                        <img src={close} alt="закрыть" />
                      </StyledNewRequestCloseHeader>
                    </StyledNewRequestHeader>
                    <StyledEditPanel>
                      <StyledMainContent>
                        <p style={{
                          color: '#a09fa8',
                          fontSize: '16px',
                        }}
                        >
                          Описание
                        </p>
                        <p
                          style={{
                            maxWidth: '650px',
                          }}
                        >
                          {newRequest.description}
                        </p>
                        <AddCommentForm />
                        <Comment />
                      </StyledMainContent>
                      <StyledBorder />
                      <StyledChangeParametersBlock>
                        <EditStatus />
                        <Applicant />
                        <Creator />
                        <Executor />
                        <Priority />
                        <Deadline />
                        <Tags />
                      </StyledChangeParametersBlock>
                    </StyledEditPanel>
                    <ChoosePerson />
                  </>
                )
                : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '30px',
                    }}
                  >
                    ...загрузка...
                  </div>
                )
            }
          </>
        )
      }
    </StyledNewRequest>
  );
};

export default NewRequest;
