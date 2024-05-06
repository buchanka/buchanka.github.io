import React from "react";
import testimony from '../assets/used/testimony.jpg';
import AltButton from "../components/AltButton";

function FifthBlock(){
    return(
        <div className="flex gap-5 max-md:flex-col m-12">
            <div className="flex flex-col w-full max-md:w-full"> 
                <div className="flex flex-col px-6 mt-6 max-md:mt-10 max-md:px-0"> 
                    <div className="shrink-0 h-px bg-slate-500 w-85 max-md:hidden" /> 
                    <h1 className="mt-20 text-4xl font-bold text-plumy max-md:mt-10 max-md:text-2xl">Нам важно знать, что вы думаете о langlink</h1> 
                    <p className="mt-32 text-3xl tracking-wider text-gray leading-[51px] max-md:mt-10"> 
                        Langlink - платформа для людей, которые изучают иностранный язык. 
                        Мы хотим знать мнение каждого участника нашего сообщества о нашем приложении, чтобы становится лучше и предоставлять более удобный сервис.
                        Для нас ценен каждый отзыв, если у вас есть предложения, вы можете написать отзыв, кликнув по кнопке ниже.
                    </p>
                    <div className="flex justify-center items-center">
                        <AltButton text="Напишите отзыв о нас!" className='text-2xl text-plumy max-md:pr-8 max-md:pl-5'></AltButton>
                    </div>
                </div> 
            </div> 

            <div className="flex flex-col w-full max-md:w-full"> 
                <div className="flex flex-col text-2xl text-gray-500 max-md:mt-10"> 
                    <img src={testimony} alt="testimony" className="max-w-full self-center rounded-3xl" /> 
                    <div className="flex gap-5 self-end pr-14 bg-white rounded-3xl shadow-2xl max-md:flex-wrap max-md:pr-5"> 
                        <div className="shrink-0 bg-amber-300 rounded-3xl shadow-2xl h-428 w-[15px] max-md:hidden" /> 
                        <div className="flex flex-col grow shrink-0 my-auto w-fit max-md:max-w-full"> 
                            <div className="flex gap-5 tracking-wide leading-10 max-md:flex-wrap"> 
                                <div className="shrink-0 self-start w-px border border-solid bg-slate-300 border-slate-300" /> 
                                <blockquote className="flex-auto max-md:max-w-full"> 
                                    &quot;Не описать словами как я благодарна сервису langlink. Я провожу много времени на этом сайте и знакомлюсь с интересными людьми, которые помогают изучать иностранный язык и понимать особенности культуры носителей этого языка&quot;
                                </blockquote>
                            </div> 
                            <div className="flex gap-5 self-center mt-20 max-w-full font-semibold leading-[180%] max-md:flex-wrap max-md:mt-10"> 
                                <p className="mt-3">Варвара Буханкова</p> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    );
}

export default FifthBlock;
