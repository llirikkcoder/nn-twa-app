import type { FC } from 'react';
import './ProblemsSection.css';

import imgQuestion from '@/assets/images/for_problems_section.png';
import imgArrow from '@/assets/images/bb384dde93bf54ce43a8a44ddd8a75695765b098.png';

export const ProblemsSection: FC = () => {
  return (
    <div className="problems-section">


      <h2 className="problems-section__title">
        Сколько клиентов и денег вы теряете сегодня из-за этих проблем?
      </h2>
      <div className="problems-section__question-icon">
        <img alt="?" src={imgQuestion} />
      </div>
      <div className="problems-section__list">
        <div className="problems-section__item problems-section__item--blue">
          <div className="problems-section__item-line"></div>
          <div className="problems-section__item-content">
            <h3>Менеджеры тратят часы на рутину вместо продаж</h3>
            <p>- 80% времени уходит на копипаст и поиск клиентов</p>
          </div>
        </div>

        <div className="problems-section__item problems-section__item--green">
          <div className="problems-section__item-line"></div>
          <div className="problems-section__item-content">
            <h3>Клиенты остаются без ответа</h3>
            <p>- Потенциальные сделки теряются из-за задержек и хаоса в диалогах</p>
          </div>
        </div>

        <div className="problems-section__item problems-section__item--yellow">
          <div className="problems-section__item-line"></div>
          <div className="problems-section__item-content">
            <h3>Высокие расходы на команду</h3>
            <p>- 10 сотрудников делают то, что AI может делать 24/7 дешевле и быстрее</p>
          </div>
        </div>

        <div className="problems-section__item problems-section__item--orange">
          <div className="problems-section__item-line"></div>
          <div className="problems-section__item-content">
            <h3>Нет прозрачной системы</h3>
            <p>- Контакты раскиданы по Excel и личным аккаунтам без контроля</p>
          </div>
        </div>

        <div className="problems-section__item problems-section__item--red">
          <div className="problems-section__item-line"></div>
          <div className="problems-section__item-content">
            <h3>Отсутствие масштабирования</h3>
            <p>
              - Бизнес не может вырасти, потому что менеджеры физически ограничены
              по количеству диалогов
            </p>
          </div>
        </div>
      </div>

      <div className="problems-section__arrow">
        <img alt="Arrow down" src={imgArrow} />
      </div>
    </div>
  );
};
