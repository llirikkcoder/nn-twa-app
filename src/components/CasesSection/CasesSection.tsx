import type { FC } from 'react';
import './CasesSection.css';

import imgTitle from '@/assets/images/3631576e648ceea5ecc21a426e2a4f094e122e02.png';
import imgSetting from '@/assets/images/d60c7e84287f44cbd5ea872f5f79e3154acf6595.png';
import imgCase1 from '@/assets/images/947df131685ab0144e54df2606940fb8fd156c69.png';
import imgCase2 from '@/assets/images/marketing.png';
import imgCase3 from '@/assets/images/c21e4bce7988f1a8e203bbe1563fabb405774c1a.png';

export const CasesSection: FC = () => {
  return (
    <div className="cases-section">
      <div className="cases-section__container">
        <img src={imgTitle} alt="Кейсы" className="cases-section__title-image" />

        <div className="cases-section__case">
          <img src={imgCase1} alt="HR Case" className="cases-section__case-image" />
          <img src={imgSetting} alt="Settings" className="cases-section__case-icon" />
        </div>

        <div className="cases-section__case cases-section__case--hr2">
          <img src={imgCase2} alt="HR Case" className="cases-section__case-image" />
          <img src={imgSetting} alt="Settings" className="cases-section__case-icon" />
        </div>

        <div className="cases-section__case cases-section__case--sales">
          <img src={imgCase3} alt="Sales Case" className="cases-section__case-image" />
          <img src={imgSetting} alt="Settings" className="cases-section__case-icon" />
        </div>
      </div>
    </div>
  );
};
