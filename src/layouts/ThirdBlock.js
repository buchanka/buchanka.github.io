import React from 'react';
import step2 from "../assets/used/step-2.webp";
import step3 from "../assets/used/message.webp";
import MainButton from '../components/MainButton';


function ThirdBlock(){
    return( 
  <section>
    <div className='m-8 text-center text-4xl font-semibold text-plumy'>
      <h1 className=''>Как начать общение?</h1>
    </div>
    
    
  <ul className="timeline max-md:timeline-compact timeline-vertical">
    <li>
    
    <div className="flex flex-col timeline-end md:text-start mb-10 ml-8 self-start max-w-64">
      <time className="font-serif italic">Шаг первый</time>
      <div className="text-lg font-black">Зарегистрируйтесь на сайте</div>
      <MainButton className="" text="Зарегистрироваться" />
    </div>
    <hr/>
  </li>
  
  <li>
    <hr />
    
    <div className="flex flex-col timeline-start text-end mb-10 mr-8">
      <time className="font-serif italic">Шаг второй</time>
      <div className="text-lg font-black">Войдите в профиль</div>
      <img className='max-w-32 self-end' src={step2} alt=''></img>
    </div>
    <hr />
  </li>
  
  <li>
    <hr />

    <div className="flex flex-col timeline-end md:text-start mb-10 self-start ml-8">
      <time className="font-serif italic">Шаг третий</time>
      <div className="text-lg font-black">Найдите собеседника в сообществе и напишите сообщение</div>
      <img className='max-w-32' src={step3} alt=''></img>
    </div>
    <hr />
  </li>
</ul>
</section>
      
    )
  }

export default ThirdBlock