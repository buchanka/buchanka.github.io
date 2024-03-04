import React from 'react';
import './FirstBlock.css';
import MyButtons from './MyButtons';


function FirstBlock(){
    return(
    <div>
        <first-block className="first-block">
            <first-block className="bg-img">
            {/* <img src='src/rectangle4204-pkoj.svg' alt='back-img' className="bg-img"></img> */}
            </first-block>
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
            {/* <img
              src="/src/d37b4a1dfb45f94dc9403189a195a95c12022-i68-800w.png"alt="img-first-block" className="img-1"></img> */}
        </block1-img>
    </div>
        <MyButtons text="Начать"></MyButtons>
      </first-block>
    </div>   
    )
}

export default FirstBlock