import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => (
  <div>
    <NavLink to="/">
      Добро пожаловать
    </NavLink>
    <NavLink to="/database">
      База данных
    </NavLink>
    <NavLink to="/request">
      Заявки
    </NavLink>
    <NavLink to="/employees">
      Работники
    </NavLink>
    <NavLink to="/clients">
      Клиенты
    </NavLink>
    <NavLink to="/assets">
      Активы
    </NavLink>
    <NavLink to="/settings">
      Настройки
    </NavLink>
  </div>
);

export default Menu;
