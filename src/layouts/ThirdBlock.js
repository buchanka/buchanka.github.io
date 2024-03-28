import React from 'react';
import step2 from "../assets/used/step-2.webp";
import step3 from "../assets/used/message.webp";
import MainButton from '../components/MainButton';

function ThirdBlock(){
    return(
        <>
        <div className='flex flex-col items-center m-24'>
        <h4 className="text-4xl font-semibold text-plumy">Как начать общение?</h4>
      </div>

      <div className='flex flex-row justify-center gap-96'>
        <div className='flex flex-col basis-6'>
        <h5 className='text-2xl font-semibold text-black m-4 text-center'>Шаг первый</h5>
        <p className='text-2xl text-plumy m-12 text-center'>Зарегистрируйтесь на сайте</p>
        <MainButton text="Зарегистрироваться" />
        </div>
        
        <div className='flex flex-col basis-40'>
        <h5 className='text-2xl font-semibold text-black text-center m-1.5'>Шаг второй</h5>
        <p className='text-2xl text-plumy text-center m-1.5'>Войдите в профиль</p>
        <img src={step2} alt="step2" className=''></img>
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        <div className='flex flex-col basis-52'>
        <h5 className='text-2xl font-semibold text-black text-center'>Шаг третий</h5>
        <p className='text-2xl text-plumy text-center'>Найдите собеседника в сообществе и напишите сообщение</p>
        <img src={step3} alt='step3' className=''></img>
        </div>
      </div>
        </>
    )
}

export default ThirdBlock