import React, { useState } from 'react';
import aboutUs from "../assets/used/about-us.jpg";
import manAvatar from '../assets/used/man-avatar.webp';
import girlAvatar from '../assets/used/girl-avatar.webp';
import womanAvatar from '../assets/used/woman-avatar.webp';
import '../layouts/FourthBlock.css';
import ratingFour from '../assets/used/ratingFour.svg';
import ratingFive from '../assets/used/ratingFive.svg';

function FourthBlock(){
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    return(
    <>
        <div className='flex flex-col items-center m-24'>
            <h4 className="text-4xl font-semibold text-plumy">О нас</h4>
            <p className="text-2xl text-plumy m-12 text-center font-normal">Langlink - это платформа для изучения иностранных языков, путем культурного обмена с людьми по всему миру.</p>
            <img src={aboutUs} alt="about" className="max-w-full h-auto"></img>
        </div>

        <div className='container'>
            <div className='review_card'>
                <img src={ratingFive} alt='ratingFive' className='items-center justify-self-center self-center content-center w-1/3'></img> 
                <p className={`text-xl text-center text-black ${expanded ? '' : 'line-clamp-1'}`}>В процессе поиска удобного сервиса для языкового обмена я нашел langlink, с тех пор пользуюсь этим приложением 3 года, всем советую</p>
                <p onClick={handleExpand} className="font-extralight cursor-pointer">{expanded ? 'свернуть' : 'развернуть'}</p>
                <img src={manAvatar} alt="manAvatar" className=""></img>
                <p className=' flex flex-col font-regular'>Михаил, изучает чешский</p>
            </div>
        

            <div className='review_card'>
               <img src={ratingFour} alt='ratingFour' className='flex items-center justify-self-center self-center content-center w-1/3'></img>
               <p className={`text-xl text-center text-black ${expanded ? '' : 'line-clamp-1'}`}>Возможность изучать языки, общаясь с носителями языка стала возможна для меня с сервисом langlink, надеюсь на дальнейшее развитие приложения! </p>
               <p onClick={handleExpand} className="font-extralight cursor-pointer">{expanded ? 'свернуть' : 'развернуть'}</p>
               <img src={girlAvatar} alt="girlAvatar" className="flex content-end justify-self-center justify-center self-stretch"></img>
               <p className='flex flex-col font-regular'>Анна, изучает французский</p>
            </div>

           <div className='review_card'>
             <img src={ratingFive} alt='ratingFive' className='items-center self-center content-center w-1/3'></img> 
             <p className={`text-xl text-center text-black ${expanded ? '' : 'line-clamp-1'}`}>Удивительно как легко и безопасно общаться с помощью langlink, я уже посоветовала это приложение всем друзьям, кто изучает иностранные языки</p>
             <p onClick={handleExpand} className="font-extralight cursor-pointer">{expanded ? 'свернуть' : 'развернуть'}</p>
             <img src={womanAvatar} alt="womanAvatar" className=""></img>
             <p className='flex flex-col font-regular'>Марина, изучает корейский</p>
          </div>
      </div>
    </>
    )
}

export default FourthBlock