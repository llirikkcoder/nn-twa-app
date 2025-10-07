import type { FC } from 'react';
import './FeaturesSection.css';

export const FeaturesSection: FC = () => {
  return (
    <div className="features-section">
      <div className="features-section__header">
        <h2 className="features-section__title">
          <span className="features-section__title--blue">NEXIFYNEO</span> —<br />
          ЭКОСИСТЕМА,<br />
          ПРОДАЮЩАЯ ЗА ВАС
        </h2>
      </div>

      <div className="features-section__item features-section__item--audience">
        <div className="features-section__icons">
          <div className="features-section__icon features-section__icon--purple">Т</div>
          <div className="features-section__icon features-section__icon--green">$</div>
        </div>
        <div className="features-section__magnifier">
          <div className="features-section__magnifier-circle"></div>
        </div>
        <div className="features-section__text-box">
          <p>Собирает<br />аудиторию из<br />групп и каналов<br />Telegram</p>
        </div>
      </div>

      <div className="features-section__item features-section__item--personalization">
        <div className="features-section__icons-left">
          <div className="features-section__icon features-section__icon--blue">А</div>
        </div>
        <div className="features-section__phone">
          <div className="features-section__phone-screen"></div>
        </div>
        <div className="features-section__text-box">
          <p>Масштабирует<br />персонализированные<br />рассылки без<br />блокировок</p>
        </div>
      </div>

      <div className="features-section__item features-section__item--leads">
        <div className="features-section__phone features-section__phone--dark">
          <div className="features-section__phone-screen"></div>
        </div>
        <div className="features-section__text-box">
          <p>Ведет клиента<br />до сделки 24/7</p>
        </div>
      </div>

      <div className="features-section__item features-section__item--efficiency">
        <div className="features-section__laptop">
          <div className="features-section__laptop-screen"></div>
        </div>
        <div className="features-section__text-box">
          <p>Увеличивает<br />эффективность<br />менеджера х10</p>
        </div>
      </div>

      <div className="features-section__footer">
        <p>Интерфейс SaleVision<br />для больших команд</p>
      </div>
    </div>
  );
};
