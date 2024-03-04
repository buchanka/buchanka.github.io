import React from 'react';
import './FirstBlock.css';
import MyButtons from './MyButtons';
import HeaderBgIcon from './HeaderBgIcon';
import block1img from '../assets/d37b4a1dfb45f94dc9403189a195a95c12022-i68-800w.png';


function FirstBlock(){
    return(
    <div>
        <div className='headerBg'>
          <HeaderBgIcon className="headerBg"/>
    </div>
    <div className="introduction">
        <article className="text-content">
            <h2>Теперь практиковать язык намного легче!</h2>
            <p>
              Хотите поднять свой уровень знания языка? Пообщаться с его
              носителями? Найти новых друзей? Тогда мы, команда langlink,
              предлагаем вам наш сервис, абсолютно бесплатно!
            </p>
        </article>
        <block1-img className="img-1">
             <img src={block1img} alt="block1-img" className="img-1"></img>
        </block1-img>
    </div>
        <MyButtons text="Начать"></MyButtons>
      
    </div>   
    )
}

export default FirstBlock