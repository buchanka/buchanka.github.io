import React from 'react';
import MainButton from '../components/MainButton';
import block1img from '../assets/used/block-1-img.png';
import companies from '../assets/used/companies.svg';
import stepsTimeline from '../assets/used/steps.svg';
import aboutUs from "../assets/used/about-us.jpg";

function FirstBlock(){
    return(
    <div>
        <div className='absolute w-full -z-10'>
          <svg className='h-160 w-full' preserveAspectRatio='none' viewBox='0 0 1920 1118' fill='none' xmlns='http://www.w3.org/2000/svg' >
            <path d='M0 0H1920V990C1920 990 1618 1118 960 1118C302 1118 0 990 0 990V0Z' fill='#F5E0FE' />
          </svg>
        </div>
    
          <article className="text-4xl font-bold text-pinkish_lilac block relative inset-x-12 inset-y-28 w-96">
              <h2>Теперь практиковать язык намного легче!</h2>
          </article>

              <block1-img className="w-1/2 bg-cover pt-12">
                <img src={block1img} alt="block1" className="rounded-xl float-right"></img>
              </block1-img>
            
                <div className="text-xl text-grey block relative inset-x-12 inset-y-40 w-96">        
                  <p>
                  Хотите поднять свой уровень знания языка? Пообщаться с его
                носителями? 
                  </p>
                </div>

                  <div className="text-xl text-grey block relative inset-x-12 inset-y-40 w-96">        
                    <p>
                    Найти новых друзей? Тогда мы, команда langlink, предлагаем вам наш сервис, абсолютно бесплатно!
                    </p>
                    <div className="block relative pt-5 px-60 mr-8">
                      <MainButton className="" text="Начать"></MainButton>
                    </div>
                  </div>

                  
                  <h3 className="font-semibold text-dusty text-4xl text-center block relative inset-x-80 inset-y-96">Наши партнеры</h3>
                  <img src={companies} alt="companies" className="block relative py-44 px-14"></img>
      
                  <h4 className="text-4xl font-semibold text-plumy text-center block-relative inset-x-74 inset-y-96">Как начать общение?</h4>
                  <img src={stepsTimeline} alt="steps" className="block relative mx-32 my-32"></img>

                  <h4 className="text-4xl font-semibold text-plumy text-center block-relative inset-x-74 inset-y-96">О нас</h4>
                  <p className="text-2xl text-plumy text-center block relative inset-x-12 inset-y-8">Langlink - это платформа для изучения иностранных языков, путем культурного обмена с людьми по всему миру.</p>

                  <img src={aboutUs} alt="about" className="block relative py-28 px-80"></img>
    </div>
    
    
    )
}

export default FirstBlock