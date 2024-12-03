import React, { useState, useEffect } from 'react';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { NavLink } from 'react-router-dom';
import {AppRoute} from '../../const'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setPage } from '../../store/auth';

const Service = () => {
  const [services, setServices] = useState([]);



const service = [
    { id: 1, name: 'Оформление планового отпуска', description: 'Оформление, изменение, перенос' },
    { id: 2, name: 'Оформление командировки', description: 'Оформление, изменение, перенос' },
    { id: 3, name: 'Выдача оборудования', description: 'Запрос на получение корпоративной техники' },
    { id: 4, name: 'Управление кадровыми услугами', description: 'Добавление, изменение, удаление персональной информации о сотруднике' },
    { id: 5, name: 'Запрос справок', description: '2-НДФЛ, кадровые и бухгалтерские справки, копии кадровых документов' },
    { id: 6, name: 'Обучение', description: 'Приказ на обучение с отрывом от производства' },
  ]; 

  return (
  <div className="card-list">
    {
     (
      service.map((item) => (
        <NavLink
          to={`${AppRoute.service}/${item.id}`}
          key={item.id}
          className="card-link"              >
          <Card
            verticalSpace="l"
            horizontalSpace="l"
            shadow
            className="card-item"
          >

            <div className="card-content">
              <p size="l" weight="bold" className="card-title">
                {item.name}
              </p>
              <Text size="s" view="secondary" className="card-description">
                {item.description}
              </Text>
            </div>
          </Card>
         </NavLink>
      ))
    )}
  </div>
);
};

export default Service;

