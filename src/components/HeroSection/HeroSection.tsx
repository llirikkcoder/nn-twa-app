import type { FC } from 'react';
import './HeroSection.css';

import imgChart from '@/assets/images/chart.png';
// import imgNn from '@/assets/images/nn.png';
import imgHeader from '@/assets/images/nn_header.png';

export const HeroSection: FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__nn-agent">
        <img alt="NN Agent" src={imgHeader} />
      </div>

      <div className="hero-section__title">
        <p>
          NEXIFYNEO<span className="hero-section__title--white"> </span>—
        </p>
        <p className="hero-section__title--white">AI-ПЛАТФОРМА ПРОДАЖ</p>
        <p className="hero-section__title--white">В TELEGRAM</p>
      </div>

      <div className="hero-section__chart">
        <img alt="Chart" src={imgChart} />
      </div>
    </div>
  );
};
