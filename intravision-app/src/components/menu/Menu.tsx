import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledMenu, {
  StyledAssets,
  StyledClients,
  StyledCompanyLogo, StyledEmployees, StyledKnowledgeBase, StyledRequest, StyledSettings,
} from './styled';
import companyLogo from '../../assets/images/logo.png';
import request from '../../assets/images/request.png';
import knowledgeBase from '../../assets/images/knowledgeBase.png';
import employees from '../../assets/images/employees.png';
import settings from '../../assets/images/settings.png';
import assets from '../../assets/images/assets.png';
import clients from '../../assets/images/clients.png';

const Menu: React.FC = () => (
  <StyledMenu>
    <NavLink to="/">
      <StyledCompanyLogo className="company-logo" src={companyLogo} alt="лого компании" />
    </NavLink>
    <NavLink to="/knowledge-base">
      <StyledKnowledgeBase src={knowledgeBase} alt="база знаний" />
      База знаний
    </NavLink>
    <NavLink to="/request">
      <StyledRequest src={request} alt="заявки" />
      Заявки
    </NavLink>
    <NavLink to="/employees">
      <StyledEmployees src={employees} alt="сотрудники" />
      Сотрудники
    </NavLink>
    <NavLink to="/clients">
      <StyledClients src={clients} alt="клиенты" />
      Клиенты
    </NavLink>
    <NavLink to="/assets">
      <StyledAssets src={assets} alt="активы" />
      Активы
    </NavLink>
    <NavLink to="/settings">
      <StyledSettings src={settings} alt="настройки" />
      Настройки
    </NavLink>
  </StyledMenu>
);

export default Menu;
