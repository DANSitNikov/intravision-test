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
import { getNewReqEditPanelStatus, getNewReqPanelStatus } from '../../../selectors/selectors';
import createNewRequestAction from '../../../actions/createNewRequsetAction';
import NewRequestForm from './newRequestForm';
import AddCommentForm from './addCommentForm';
import Comment from '../../../components/comment';

const NewRequest: React.FC = () => {
  const panelStatus = useSelector(getNewReqPanelStatus);
  const editPanelStatus = useSelector(getNewReqEditPanelStatus);
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
            <StyledNewRequestHeader>
              <p>№ 67 304</p>
              <StyledNameRequest>
                Просьба оценить разработку рекламного баннера на новорижском шоссе.
                Форматы 600x500x30. Материал – полиестирол хорошего качества.
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
                <p>Описание</p>
                <p>
                  Длительное время занимает сохранение продажи
                  (вне зависимости от кол-ва добавленных товаров).
                  Проверить, почему занимает столько времени.
                  Это третья строка Это третья строкаЭто
                  третья строкаЭто третья строкаЭто третья
                  строкаЭто третья строкаЭто третья строкаЭто
                  третья строкаЭто третья строкаЭто третья
                  строкаЭто третья строка  третья строка
                  тья строка  тья строка  конец!
                </p>
                <AddCommentForm />
                <Comment />
              </StyledMainContent>
              <StyledBorder />
              <StyledChangeParametersBlock>
                one
              </StyledChangeParametersBlock>
            </StyledEditPanel>
          </>
        )
      }
    </StyledNewRequest>
  );
};

export default NewRequest;
