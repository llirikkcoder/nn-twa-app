import type { FC } from 'react';
import './SolutionSection.css';

import imgNexifyNeo from '@/assets/images/5bc35ade8504598ea93af4284eeaa0d5dadae7d1.png';
import imgSetting from '@/assets/images/d60c7e84287f44cbd5ea872f5f79e3154acf6595.png';
import imgCircle from '@/assets/images/circle.png';

export const SolutionSection: FC = () => {
  return (
    <div className="solution-section">
      <div className="solution-section__container">
        <img src={imgNexifyNeo} alt="NexifyNeo" className="solution-section__hero-image" />

        <h2 className="solution-section__main-title">
          NexifyNeo (NN) — это<br />
          AI-экосистема для<br />
          автоматизации<br />
          и масштабирования<br />
          бизнеса в telegram
        </h2>

        <div className="solution-section__cards">
          <div className="solution-section__card solution-section__card--parser">
            <img src={imgSetting} alt="Settings" className="solution-section__card-icon" />
            <h3 className="solution-section__card-title solution-section__card-title--green">
              NN Parser —
            </h3>
            <p className="solution-section__card-subtitle">«умный поиск аудитории»</p>
            <div className="solution-section__card-content">
              <p><strong>Что это:</strong> инструмент для сбора открытых данных из Telegram (участники чатов, биографии, сообщения, посты, комментарии)</p>
              <p><strong>Что даёт бизнесу:</strong> помогает находить целевую аудиторию и потенциальных клиентов</p>
              <p><strong>Особенность:</strong> превращает «сырой поток сообщений» в готовую базу для анализа и продаж</p>
            </div>
          </div>

          <div className="solution-section__card solution-section__card--agent">
            <img src={imgSetting} alt="Settings" className="solution-section__card-icon" />
            <h3 className="solution-section__card-title solution-section__card-title--blue">
              NN Agent —
            </h3>
            <p className="solution-section__card-subtitle">«масштабные персональные касания»</p>
            <div className="solution-section__card-content">
              <p><strong>Что это:</strong> инструмент для автоматизированных рассылок по базе username</p>
              <p><strong>Что даёт бизнесу:</strong> решает задачу холодного охвата большого числа клиентов без ручной рутины</p>
              <p><strong>Особенность:</strong> персонализирует первое сообщение под каждого получателя</p>
            </div>
          </div>

          <div className="solution-section__card solution-section__card--manager">
            <img src={imgSetting} alt="Settings" className="solution-section__card-icon" />
            <h3 className="solution-section__card-title solution-section__card-title--yellow">
              AI Manager —
            </h3>
            <p className="solution-section__card-subtitle">«ваш виртуальный продавец»</p>
            <div className="solution-section__card-content">
              <p><strong>Что это:</strong> искусственный интеллект, который подключается к диалогам после первого контакта</p>
              <p><strong>Что даёт бизнесу:</strong> ведёт диалог, отвечает на вопросы, закрывает возражения, доводит до сделки</p>
              <p><strong>Особенность:</strong> работает 24/7 и подстраивается под стиль компании</p>
            </div>
          </div>

          <div className="solution-section__card solution-section__card--crm">
            <img src={imgSetting} alt="Settings" className="solution-section__card-icon" />
            <h3 className="solution-section__card-title solution-section__card-title--purple">
              NN CRM —
            </h3>
            <p className="solution-section__card-subtitle">«центр управления продажами»</p>
            <div className="solution-section__card-content">
              <p><strong>Что это:</strong> специализированная CRM-система, интегрированная с Telegram и AI-инструментами</p>
              <p><strong>Что даёт бизнесу:</strong> хранит базу лидов и сделок, отслеживает историю общения, подсказывает следующие шаги</p>
              <p><strong>Особенность:</strong> умеет переключать диалоги между AI и живыми сотрудниками</p>
            </div>
          </div>

          <div className="solution-section__card solution-section__card--community">
            <img src={imgSetting} alt="Settings" className="solution-section__card-icon" />
            <h3 className="solution-section__card-title solution-section__card-title--red">
              NN Community —
            </h3>
            <p className="solution-section__card-subtitle">«экосистема вокруг продукта»</p>
            <div className="solution-section__card-content">
              <p><strong>Что это:</strong> платформа для клиентов, партнёров и команды NexifyNeo</p>
              <p><strong>Что даёт бизнесу и клиентам:</strong> обучение, поддержка, нетворкинг, обратная связь</p>
              <p><strong>Особенность:</strong> превращает пользователей в сообщество, усиливает лояльность и удержание</p>
            </div>
          </div>
        </div>
        <img src={imgCircle} alt="Ecosystem" className="solution-section__ecosystem-circle" />

        <div className="solution-section__benefits">
          <h2 className="solution-section__benefits-title">
            Преимущества<br />для бизнеса
          </h2>

          <div className="solution-section__benefits-list">
            <div className="solution-section__benefit">
              <div className="solution-section__benefit-icon"></div>
              <div className="solution-section__benefit-content">
                <h3 className="solution-section__benefit-title">Масштаб:</h3>
                <p className="solution-section__benefit-text">тысячи диалогов одновременно</p>
              </div>
            </div>

            <div className="solution-section__benefit">
              <div className="solution-section__benefit-icon"></div>
              <div className="solution-section__benefit-content">
                <h3 className="solution-section__benefit-title">Экономия:</h3>
                <p className="solution-section__benefit-text">меньше людей → ниже расходы</p>
              </div>
            </div>

            <div className="solution-section__benefit">
              <div className="solution-section__benefit-icon"></div>
              <div className="solution-section__benefit-content">
                <h3 className="solution-section__benefit-title">AI продаёт</h3>
                <p className="solution-section__benefit-text">без ошибок и перерывов</p>
              </div>
            </div>

            <div className="solution-section__benefit">
              <div className="solution-section__benefit-icon"></div>
              <div className="solution-section__benefit-content">
                <h3 className="solution-section__benefit-title">Рост выручки</h3>
                <p className="solution-section__benefit-text">за счёт увеличения охвата</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
