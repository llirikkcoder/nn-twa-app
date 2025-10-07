import type { FC } from 'react';
import './FeaturesSection.css';

import imgPhone1 from '@/assets/images/c3b0214ea19de8f8d4b6e75ce2fda45c61f2fe82.png';
import imgPhone2 from '@/assets/images/7966313013bf75f3dfc4013a351696cc9fb2ba67.png';

export const FeaturesSection: FC = () => {
  return (
    <div className="features-section">
      <div className="features-section__container">
        <div className="features-section__header">
          <h2 className="features-section__title">
            <span className="features-section__title--blue">NEXIFYNEO</span> —<br />
            ЭКОСИСТЕМА,<br />
            ПРОДАЮЩАЯ ЗА ВАС
          </h2>
        </div>

        <div className="features-section__item features-section__item--personalization">
          <img src={imgPhone1} alt="Phone with personalization" className="features-section__phone-image" />
        </div>

        <div className="features-section__item features-section__item--leads">
          <img src={imgPhone2} alt="Phone with chat" className="features-section__phone-image" />
        </div>
      </div>
    </div>
  );
};
