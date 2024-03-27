import React from 'react';
import MainButton from '../components/MainButton';
import block1img from '../assets/used/block-1-img.png';
import airbnb from '../assets/used/airbnb.svg';
import facebook from '../assets/used/facebook.svg';
import google from '../assets/used/google.svg';
import grab from '../assets/used/grab-logo.svg';
import netflix from '../assets/used/netflix.svg';
import amazon from '../assets/used/amazon.svg';
import stepsTimeline from '../assets/used/steps.svg';
import aboutUs from "../assets/used/about-us.jpg";

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
          <div className="self-center lg:self-end">
            <MainButton className="text-lg" text="Начать"></MainButton>
          </div>
        </article>

        <div>
          <img src={block1img} alt="block1" className="rounded-xl" />
        </div>
      </section>

      
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-dusty text-4xl">Наши партнеры</h3>
        <img src={google} alt="google" className="block relative py-44 px-14"></img>
      </div>

      <div className='flex flex-col items-center'>
        <h4 className="text-4xl font-semibold text-plumy">Как начать общение?</h4>
        <img src={stepsTimeline} alt="steps" className="block relative mx-32 my-32"></img>
      </div>
    
    <div className='flex flex-col items-center'>
        <h4 className="text-4xl font-semibold text-plumy ">О нас</h4>
        <p className="text-2xl text-plumy">Langlink - это платформа для изучения иностранных языков, путем культурного обмена с людьми по всему миру.</p>
        <img src={aboutUs} alt="about" className="block relative py-28 px-80"></img>
    </div>
    </>     
  );
}

export default FirstBlock