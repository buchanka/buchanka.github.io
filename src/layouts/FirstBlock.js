import React from 'react';
import MainButton from '../components/MainButton';
import block1img from '../assets/used/block-1-img.png';
import airbnb from '../assets/used/airbnb.svg';
import facebook from '../assets/used/facebook.svg';
import google from '../assets/used/google.svg';
import grab from '../assets/used/grab-logo.svg';
import netflix from '../assets/used/netflix.svg';
import amazon from '../assets/used/amazon.svg';
import aboutUs from "../assets/used/about-us.jpg";
import glassedBg from "../assets/used/glass-bg.webp";
import step2 from "../assets/used/step-2.webp"
import step3 from "../assets/used/message.webp"

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

      
      <div className="flex flex-col items-center m-16">
        <h3 className="font-semibold text-dusty text-4xl">Наши партнеры</h3>
      </div>
        
      <div className="flex flex-col items-center justify-center gap-24 lg:flex-row">
        <img src={google} alt="google" className=""></img>
        <img src={airbnb} alt="airbnb" className=""></img>
        <img src={facebook} alt="facebook" className=""></img>
        <img src={grab} alt="grab" className=""></img>
        <img src={netflix} alt="netflix" className=""></img>
        <img src={amazon} alt="amazon" className=""></img>
      </div>

      <div className='flex flex-col items-center m-24'>
        <h4 className="text-4xl font-semibold text-plumy">Как начать общение?</h4>
      </div>

      <div className='flex flex-wrap items-center items-stretch gap-32 '>
        <div>
        <h5 className='text-2xl font-semibold text-black'>Шаг первый</h5>
        <p className='text-2xl text-plumy'>Зарегистрируйтесь на сайте</p>
        <MainButton text="Зарегистрироваться" />
        </div>
        
        <div>
        <h5 className='text-2xl font-semibold text-black'>Шаг второй</h5>
        <p className='text-2xl text-plumy'>Войдите в профиль</p>
        <img src={step2} alt="step2" className=''></img>
        </div>

        <div>
        <h5 className='text-2xl font-semibold text-black'>Шаг третий</h5>
        <p className='text-2xl text-plumy'>Найдите собеседника в сообществе и напишите сообщение</p>
        <img src={step3} alt='step3' className=''></img>
        </div>
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