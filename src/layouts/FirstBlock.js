import React from 'react';
import MainButton from '../components/MainButton';
import block1img from '../assets/used/block-1-img.png';
import glassedBg from "../assets/used/glass-bg.webp";

function FirstBlock(){
    return(
    <>
      <div className='absolute w-full -z-10'>
          <svg className='h-160 w-full' preserveAspectRatio='none' viewBox='0 0 1920 1118' fill='none' xmlns='http://www.w3.org/2000/svg' >
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
          <div className="text-xl text-grey block">        
            <p>
              Хотите поднять свой уровень знания языка? Пообщаться с его
            носителями? 
            </p>     
            <p>
              Найти новых друзей? Тогда мы, команда langlink, предлагаем вам наш сервис, абсолютно бесплатно!
            </p>
          </div>
          <div className="self-center m-16 lg:self-end">
            <MainButton className="text-lg" text="Начать"></MainButton>
          </div>
        </article>

        <div className='relative'>
          <img src={block1img} alt="block1" className="rounded-xl absolute top-0 left-0 z-10"></img>
          <img src={glassedBg} alt="bgOfblock1" className="relative z-1"></img>
        </div>
      </section>

    </>     
  );
}

export default FirstBlock