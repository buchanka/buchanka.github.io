import React from 'react';
import MainButton from '../components/MainButton';
import block1img from '../assets/d37b4a1dfb45f94dc9403189a195a95c12022-i68-800w.png';


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
             <img src={block1img} alt="block1-img" className="rounded-xl float-right"></img>
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
            <MainButton className="block relative right-16" text="Начать"></MainButton>
            </div> 
    </div>   
    )
}

export default FirstBlock