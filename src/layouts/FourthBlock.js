import React from 'react';
import aboutUs from "../assets/used/about-us.jpg";
import manAvatar from '../assets/used/man-avatar.webp';
import girlAvatar from '../assets/used/girl-avatar.webp';
import womanAvatar from '../assets/used/woman-avatar.webp';
import '../layouts/FourthBlock.css';
import ratingFour from '../assets/used/ratingFour.svg';
import ratingFive from '../assets/used/ratingFive.svg';


function FourthBlock(){
    return(
        <>
        <div className='flex flex-col items-center m-24'>
        <h4 className="text-4xl font-semibold text-plumy">О нас</h4>
        <p className="text-2xl text-plumy m-12 text-center font-normal">Langlink - это платформа для изучения иностранных языков, путем культурного обмена с людьми по всему миру.</p>
        <img src={aboutUs} alt="about" className="max-w-3xl"></img>
        </div>

        <div className='text-4xl font-semibold text-plumy text-start m-28'>
        <h5>Отзывы людей</h5>
      </div>

      <div className='container mx-auto'>
        <div className='column'>
        <img src={ratingFive} alt='ratingFive' className='items-center justify-self-center self-center content-center w-1/3'></img> 
        <p className='text-xl text-center text-black'>В процессе поиска удобного сервиса...</p>
        <p className="font-extralight">развернуть</p>
        <img src={manAvatar} alt="manAvatar" className=""></img>
        <p className=' flex flex-col font-regular'>Михаил, изучает чешский</p>
        </div>
        

        <div className='column'>
        <img src={ratingFour} alt='ratingFour' className='flex items-center justify-self-center self-center content-center w-1/3'></img>
        <p className='text-xl text-center text-black'>Возможность изучать языки с помощью langlink...</p>
        <p className="font-extralight">развернуть</p>
        <img src={girlAvatar} alt="girlAvatar" className="flex content-end justify-self-center justify-center self-stretch"></img>
        <p className='flex flex-col font-regular'>Анна, изучает французский</p>
        </div>

        <div className='column'>
        <img src={ratingFive} alt='ratingFive' className='items-center self-center content-center w-1/3'></img> 
        <p className='text-xl text-center text-black'>Удивительно как легко и безопасно общаться с помощью langlink...</p>
        <p className="font-extralight">развернуть</p>
        <img src={womanAvatar} alt="womanAvatar" className=""></img>
        <p className='flex flex-col font-regular'>Марина, изучает корейский</p>
        </div>
        
      </div>
        </>
    )
}

export default FourthBlock