import * as React from "react";
import woman_avatar from '../used/woman_avatar.webp';
import MainButton from '../../components/MainButton';
import AltButton from '../../components/AltButton';
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="bg-ghost w-full h-full pb-10 pt-36">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="flex flex-col items-center md:items-end md:w-1/5"> 
            <div className="flex flex-col size-32 md:size-40 lg:size-40">
              <img className="" src={woman_avatar} alt="Avatar"></img>
            </div>
          </div>

          <section className="flex flex-col w-full md:w-4/5 mt-4">
            <div className="flex flex-col">
              <div className=" flex gap-5 self-center text-center md:self-start lg:self-start">
                <h1 className="flex-auto my-auto text-3xl text-violet">Emily Huff</h1>
                <MainButton text="Редактировать" className="" />
              </div>
              <div className="bg-paleblue w-[50%]self-start my-4 p-4 md:px-5 md:p-3 md:w-[600px] lg:w-[70%]">
                <div className="flex flex-col md:ml-0 md:w-full">
                  <div className="flex flex-col text-2xl text-center text-violet gap-4 items-center md:flex-row lg:flex-row">
                    <div className="flex flex-row">
                      <div className="py-3 px-5 text-indigo bg-block border border-violet rounded-3xl">
                        Speaks: EN
                      </div>
                    </div>
                    <div className="flex items-center ">
                      <div className="py-3 px-5 text-indigo bg-block border border-violet rounded-3xl">
                        Learns: NO
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="py-3 px-5 text-indigo bg-block border border-violet rounded-3xl">
                        Страна: США
                      </div>
                    </div>
                    <Link className="shadow-lg" to="/subscribe">
                      <AltButton text="Подписка: Essential"></AltButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col md:flex-col md:ml-40 md:mt-5 gap-4">
          <h2 className="text-violet text-3xl">Обо мне</h2>
          <p className="items-start w-[400px] h-[100px] text-2xl bg-paleblue text-indigo md:max-w-[700px] md:ml-0 lg:w-[900px]">
            looking for friends from across the world :)
          </p>
          <h2 className="text-violet text-3xl">Интересы</h2>
          <p className="items-start w-[400px] h-[300px] text-2xl bg-paleblue text-indigo md:max-w-[800px] md:h-[300px] md:ml-0 lg:w-[900px] lg:h-[100px]:">#Books and Literature, #Movies and TV Shows, #Gaming, #Music, #Food, #Cooking, #Sport, #Make-up, #Cosplay, #Anime, #Manga</p>
          
          <h2 className="text-violet text-3xl">Родной/родные язык/языки</h2>
          <div className="items-start w-[400px] h-[100px] text-2xl bg-paleblue text-indigo md:max-w-[700px] md:ml-0 lg:w-[900px]">
            English
          </div>
        </div>
      </div>
  );
}

export default Profile;


