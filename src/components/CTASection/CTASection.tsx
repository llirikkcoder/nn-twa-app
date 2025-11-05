import type { FC } from 'react';
import './CTASection.css';

import imgBusiness from '@/assets/images/79a07a780578dcd9f80404d80a28acd11bbe9382.png';
import imgGrowth from '@/assets/images/593afdaccb987feed35f41a70183e001cc489e7e.png';
import imgMarketing from '@/assets/images/a165dbd5bd1e99c9aa17f1fda6b2ba6cdfbbe69e.png';
import imgHR from '@/assets/images/5237baf1e3d2c76435b04a59e0fee77fbe317e99.png';
import imgChart from '@/assets/images/ed1c9fce5666359dccbf4dbdff5c4e11b4625fbb.png';
import imgArrow from '@/assets/images/15e33cfecbfe30ab5cb67e2ee7f16ce4db5a99fb.png';

export const CTASection: FC = () => {
  const handleBotClick = () => {
    window.open('https://t.me/nn_agent_sokolov', '_blank');
  };

  return (
    <div className="cta-section">
      <div className="cta-section__container">
        <div className="cta-section__header">
          <h2 className="cta-section__header-title">Для кого NexifyNeo?</h2>
        </div>

        <div className="cta-section__audience">
          <div className="cta-section__audience-item">
            <img src={imgBusiness} alt="Business" className="cta-section__audience-icon" />
            <div className="cta-section__audience-content">
              <h3 className="cta-section__audience-title">Малый и средний бизнес:</h3>
              <p className="cta-section__audience-text">рост без дополнительных сотрудников</p>
            </div>
          </div>

          <div className="cta-section__audience-item">
            <img src={imgGrowth} alt="Sales" className="cta-section__audience-icon" />
            <div className="cta-section__audience-content">
              <h3 className="cta-section__audience-title">Продажи:</h3>
              <p className="cta-section__audience-text">автоматизация лидогенерации</p>
            </div>
          </div>

          <div className="cta-section__audience-item">
            <img src={imgMarketing} alt="Marketing" className="cta-section__audience-icon" />
            <div className="cta-section__audience-content">
              <h3 className="cta-section__audience-title">Маркетинг:</h3>
              <p className="cta-section__audience-text">масштабные кампании</p>
            </div>
          </div>

          <div className="cta-section__audience-item">
            <img src={imgHR} alt="HR" className="cta-section__audience-icon" />
            <div className="cta-section__audience-content">
              <h3 className="cta-section__audience-title">HR-отделы:</h3>
              <p className="cta-section__audience-text">быстрый найм</p>
            </div>
          </div>
        </div>

        <div className="cta-section__community">
          <p className="cta-section__community-text">
            <strong>NN Community</strong> — ваша собственная система пассивного дохода вместе с ростом всей экосистемы
          </p>

          <ul className="cta-section__community-list">
            <li>Распространяйте продукты NexifyNeo</li>
            <li>Получайте процент от каждой продажи</li>
            <li>Доход начисляется каждый месяц пожизненно</li>
            <li>Чем больше клиентов у вас в структуре — тем выше ваш заработок</li>
            <li>Новые продукты = новые источники дохода</li>
          </ul>
        </div>

        <div className="cta-section__chart">
          <img src={imgChart} alt="Growth Chart" className="cta-section__chart-image" />
        </div>

        <div className="cta-section__tagline">
          <p>NexifyNeo = ваш AI-отдел<br />продаж в Telegram</p>
        </div>

        <div className="cta-section__cta">
          <h2 className="cta-section__cta-title">
            Начните сегодня<br />
            <br />
            получите преимущество<br />
            на рынке
          </h2>
          <img src={imgArrow} alt="Arrow" className="cta-section__cta-arrow" />
          <button onClick={handleBotClick} className="cta-section__cta-button">
            Чат с менеджером
          </button>
        </div>
      </div>
    </div>
  );
};
