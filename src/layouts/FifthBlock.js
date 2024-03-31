import React from "react";
import testimony from '../assets/used/testimony.jpg';
import AltButton from "../components/AltButton";

function FifthBlock(){
    return(
        <div> 
        <div className="flex gap-5 max-md:flex-col">
         <div className="flex flex-col w-6/12 max-md:ml-2 max-md:w-full"> 
         <div className="flex flex-col grow px-6 mt-6 max-md:mt-10 max-md:max-w-full"> 
         <div className="shrink-0 h-px bg-slate-500 w-[85px]" /> 
         <h1 className="mt-20 text-4xl font-bold text-plumy max-md:mt-10 max-md:max-w-full max-md:text-2xl"> Нам важно знать, что вы думаете о langlink </h1> 
         <p 
         className="mt-32 text-3xl tracking-wider text-gray leading-[51px] max-md:mt-10 max-md:max-w-full"> 
         Langlink - платформа для людей, которые изучают иностранный язык. 
         Мы хотим знать мнение каждого участника нашего сообщества о нашем приложении, чтобы становится лучше и предоставлять более удобный сервис.
         Для нас ценен каждый отзыв, если у вас предложения вы можете написать отзыв, кликнув по кнопке ниже. </p>
         <div className="flex justify-center items-center">
         <AltButton className='text-2xl text-plumy max-md:pr-8 max-md:pl-5 max-md:max-w-full'>Напишите отзыв о нас!</AltButton>
         </div>
          </div> 
          </div> 
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"> 
          <div className="flex flex-col text-2xl text-gray-500 max-md:mt-10 max-md:max-w-full"> 
          <img src={testimony} alt="testimony" className="max-w-full aspect-[0.66] w-[350px] self-center" /> 
          <TestimonialCard /> 
          </div> 
          </div> 
          </div> 
          </div> 
          ); } 
          
          function TestimonialCard() 
          { return ( 
          <div className="flex gap-5 self-end pr-14 bg-white rounded-3xl shadow-2xl max-md:flex-wrap max-md:pr-5"> 
          <div className="shrink-0 bg-amber-300 rounded-3xl shadow-2xl h-[428px] w-[15px] max-md:hidden" /> 
          <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full"> 
          <div className="flex gap-5 tracking-wide leading-10 max-md:flex-wrap"> 
          <div className="shrink-0 self-start w-px border border-solid bg-slate-300 border-slate-300 h-[180px]" /> 
          <blockquote className="flex-auto max-md:max-w-full"> &quot;Не описать словами как я благодарна сервису langlink. 
          Я провожу много времени на этом сайте и знакомлюсь с интересными людьми, которые помогают изучать 
          иностранный язык и понимать особенности культуры носителей этого языка&quot; 
          </blockquote> 
          </div> 
          <div className="flex gap-5 self-center mt-20 max-w-full font-semibold leading-[180%] w-[541px] max-md:flex-wrap max-md:mt-10"> 
          <p className="flex-auto self-start mt-3"> Варвара Буханкова </p> 
          
          </div> 
          </div> 
          </div> 
          )   
    }

    export default FifthBlock;