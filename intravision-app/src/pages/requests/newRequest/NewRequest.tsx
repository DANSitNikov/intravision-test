import React, { useEffect, useState } from 'react';
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
  getComments,
  getNewReqAddedStatus,
  getNewReqEditPanelStatus,
  getNewReqPanelStatus,
  getRequests,
} from '../../../selectors/selectors';
import createNewRequestAction from '../../../actions/createNewRequsetAction';
import NewRequestForm from './newRequestForm';
import AddCommentForm from './addCommentForm';
import EditStatus from './components/editStatus';
import Applicant from './components/applicant';
import Executor from './components/executor';
import Priority from './components/priority';
import Creator from './components/creator';
import Deadline from './components/deadline';
import Tags from './components/tags';
import { StyledSubmitButton } from './newRequestForm/styled';
import Comments from './comments';
import requestsAction, { updateCurRequest } from '../../../actions/requestsAction';
import { Request } from '../../../reducers/requestsReducer';

export interface ChangeRequestParameters {
  'priorityId'?: number,
  'priorityName'?: string,
  'statusId'?: number,
  'statusName'?: string,
  'statusRgb'?: string,
  'executorId'?: number,
  'executorName'?: string,
}

const NewRequest: React.FC = () => {
  const { setAllRequests } = requestsAction;
  const panelStatus = useSelector(getNewReqPanelStatus);
  const editPanelStatus = useSelector(getNewReqEditPanelStatus);
  const addedStatus = useSelector(getNewReqAddedStatus);
  const allRequests = useSelector(getRequests);
  const newRequest = useSelector(getRequests)[0];
  const comments = useSelector(getComments);
  const [parameters, setParameters] = useState<ChangeRequestParameters>({});
  const { changePanelStatus, changeEditPanelStatus } = createNewRequestAction;
  const dispatch = useDispatch();

  useEffect(() => {
    if (newRequest) {
      setParameters({
        ...parameters,
        priorityId: newRequest.priorityId,
        priorityName: newRequest.priorityName,
        statusId: newRequest.statusId,
        statusName: newRequest.statusName,
        statusRgb: newRequest.statusRgb,
        executorId: newRequest.executorId,
        executorName: newRequest.executorName,
      });
    }
  }, [newRequest]);

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
                        <StyledSubmitButton
                          onClick={() => {
                            // eslint-disable-next-line max-len
                            const reqComments = comments.filter((comment) => comment.id === newRequest.id);
                            const updateRequest = {
                              ...newRequest,
                              ...parameters,
                              comments: reqComments,
                            };
                            const setNewRequest: Array<Request> = [
                              updateRequest,
                              ...allRequests.slice(1),
                            ];
                            dispatch(setAllRequests(setNewRequest));
                            dispatch(updateCurRequest(updateRequest));
                          }}
                        >
                          Сохранить
                        </StyledSubmitButton>
                        <Comments request={newRequest} />
                      </StyledMainContent>
                      <StyledBorder />
                      <StyledChangeParametersBlock>
                        <EditStatus setParameters={setParameters} parameters={parameters} />
                        <Applicant />
                        <Creator />
                        <Executor setParameters={setParameters} parameters={parameters} />
                        <Priority setParameters={setParameters} parameters={parameters} />
                        <Deadline />
                        <Tags />
                      </StyledChangeParametersBlock>
                    </StyledEditPanel>
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
