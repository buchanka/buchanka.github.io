import React, { useState } from 'react';
import faqImage from '../assets/used/faq-img.jpg';

function FAQContent() {
  const [expandedItems, setExpandedItems] = useState({});

  const handleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <section className="">
        <div className="mt-32 text-center text-3xl font-bold text-indigo-900 leading-[115px] max-md:max-w-full max-md:text-4xl max-md:leading-[79px]">
          <h1 className="text-plumy">Часто задаваемые вопросы(FAQ)</h1>
        </div>

        <div className="flex gap-5 justify-around items-center p-6 flex-col lg:flex-row">
          <div className="w-[70%] md:h-full my-auto lg:w-[40%]">
            <img src={faqImage} alt="" className="rounded-3xl w-full" />
          </div>
          <div className="text-2xl font-bold text-indigo leading-[70px] width-100% md:text-3xl md:leading-[60px] lg:text-3xl lg:leading-[70px]">
            {faqItems.map((item, index) => (
              <div key={index}>
                <p onClick={() => handleExpand(index)} className="cursor-pointer">
                  {expandedItems[index] ? '- ' : '+ '}
                  {item.question}
                </p>
                {expandedItems[index] && <p className='text-oceanblue text-xl mt-2'>{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const faqItems = [
  {
    question: 'Что такое langlink?',
    answer: 'Langlink - сервис для общения с носителями языка, идеален для вас если вы ищете безопасную площадку для поиска собеседников'
  },

  {
    question: 'Это бесплатная платформа?',
    answer: 'Есть два плана подписки: бесплатный и платный. Бесплатная версия содержит базовый функционал, но платная подписка дает большие возможности для общения и кастомизации своего профиля.'
  },

  {
    question: 'Как начать общаться?',
    answer: 'Для того чтобы присоединиться к сообществу langlink и начать искать собеседников, необходимо лишь зарегистрироваться и авторизоваться. Собеседников можно найти на странице поиска после того как вы авторизуетесь. Кликните написать сообщение выбранному собеседнику и начните общение'
  },

  {
    question: 'Сколько языков я могу изучать?',
    answer: 'Максимальное количество языков, которое вы можете указать как изучаемые для поиска собеседников - 3'
  },

  {
    question: ' Как обеспечивается безопасность пользователей?',
    answer: 'Для предотвращения атак ботов регистрация и авторизация проходит в несколько этапов, а данные которые вы указываете при регистрации мы надежно зашифровываем:)'
  },

  {
    question: 'Могу ли я пожаловаться на пользователя?',
    answer: 'Вы можете пожаловаться на пользователя, чье поведение нарушило правила нашего сообщества, его аккаунт будет заблокирован и он не сможет отправлять вам сообщения'
  },

  {
    question: 'Как удалить свой аккаунт?',
    answer: 'Чтобы удалить свой аккаунт перейдите в профиль > настройки профиля > данные и безопасность, там вы найдете кнопку деактивировать аккаунт. Нажмите ее, подтвердите свое решение и ваши данные и аккаунт будут удалены.'
  },

  {
    question: 'Как я могу связаться с техподдержкой?',
    answer: 'Вы можете связаться с техподдержой на соответствующей странице, ссылку на нее вы найдете в шапке, заполните форму и подождите пока вам ответит оператор в сообщении. Обычно это занимает не больше 10 минут, поэтому не волнуйтесь вам обязательно помогут:3'
  },
];

export default FAQContent;