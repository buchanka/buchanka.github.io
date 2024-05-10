import React from 'react';
import MainButton from '../components/MainButton';
import glassedBg from "../assets/used/glass-bg.webp";
import { Link } from 'react-router-dom';


function FirstBlock(){
    return(
    <>
      <div className='absolute w-full -z-10'>
          <svg className='h-160 w-[100%] md:h-[60rem] sm:h-[54rem]' preserveAspectRatio='none' viewBox='0 0 1920 1118' fill='none' xmlns='http://www.w3.org/2000/svg' >
            <path d='M0 0H1920V990C1920 990 1618 1118 960 1118C302 1118 0 990 0 990V0Z' fill='#F5E0FE' />
          </svg>
      </div>

    
      <section className='flex gap-5 justify-around items-center p-24 flex-col-reverse
        lg:flex-row'>
        <article className='w-full flex flex-col gap-5
          lg:w-96'>
          <div className="text-4xl font-bold text-pinkish_lilac block">
              <h2>Теперь практиковать язык намного легче!</h2>
          </div>
          <div className="flex flex-col text-xl text-grey md:text-lg sm:text-base">        
            <p>
              Хотите поднять свой уровень знания языка? Пообщаться с его
            носителями? 
            </p>     
            <p>
              Найти новых друзей? Тогда мы, команда langlink, предлагаем вам наш сервис, абсолютно бесплатно!
            </p>
          </div>
          <div className="self-center m-8 lg:self-end">
            <Link to ="/signup">
            <MainButton className="text-lg" text="Начать"></MainButton>
            </Link>
          </div>
        </article>

        <div className=''>
          <img src={glassedBg} alt="bgOfblock1" className=""></img>
        </div>

      </section>

    </>     
  );
}

export default FirstBlock