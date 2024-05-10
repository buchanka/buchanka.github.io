import * as React from "react";
import girl_avatar from '../used/girl_avatar.webp';
import man_avatar from '../used/man_avatar.webp';
import woman_avatar from '../used/woman_avatar.webp';
import lady_avatar from '../used/lady_avatar.webp';
import grown_man_avatar from '../used/grown_man_avatar.webp';
import boy_avatar from '../used/boy_avatar.webp';
import MainButton from '../../components/MainButton';
import { Link } from "react-router-dom";
import { BsFilterLeft } from "react-icons/bs";


const profiles = [
  {
    name: "Konrad C.",
    age: 28,
    image: man_avatar,
    speaks: "PL",
    learns: "EN",
  },
  {
    name: "Emily H.",
    age: 24,
    image: woman_avatar,
    speaks: "EN", 
    learns: "NO",
  },
  {
    name: "Stefanie M.",
    age: 15,
    image: girl_avatar,
    speaks: "FR",
    learns: "GE",
  },
  {
    name: "Anna B.",
    age: 46,
    image: lady_avatar,
    speaks: "HUN",
    learns: "IT",
  },
  {
    name: "Alexander O.",
    age: 49,
    image: grown_man_avatar,
    speaks: "SW",
    learns: "TR",
  },
  {
    name: "Max R.",
    age: 16,
    image: boy_avatar,
    speaks: "GE",
    learns: "PL",
  },
];





function ProfileCard({ profile }) {
  return (
    <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 p-4 md:p-6 bg-paleblue">
      <div className="bg-block border border-wreck rounded-lg p-2 md:p-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0">
            <img
              src={profile.image}
              alt={`Profile picture of ${profile.name}`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-violet-700 object-cover"
            />
            <Link to="/profile" className="block mt-2 md:mt-4 text-start">
              <MainButton text="Профиль" />
            </Link>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4">
            <div className="text-lg md:text-xl font-bold text-fuchsia-950">
              {profile.name} ({profile.age})
            </div>
            <div className="mt-1 md:mt-2 text-sm md:text-base text-violet-950">
              <div className="bg-violet-100 border border-slate-500 rounded-lg p-1 w-[120px] md:p-2">
                Speaks: {profile.speaks}
              </div>
              <div className="mt-1 md:mt-2 bg-violet-100 border border-slate-500 rounded-lg p-1 w-[120px] md:p-2">
                Learns: {profile.learns}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <>
  <div className="pt-40 pb-20 bg-ghost">
    
    <div className='flex flex-row justify-around'>
      <div className="bg-paleblue rounded-xl h-10 w-46">
        <label className="input input-bordered flex items-center bg-paleblue active:bg-paleblue hover:bg-lilac rounded-xl h-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 opacity-70 items-baseline"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input type="text" className="grow bg-paleblue rounded-xl h-10 text-center active:bg-paleblue hover:bg-lilac" placeholder="Search..." />
        </label>
      </div>
        <button className=" btn rounded-3xl active:bg-paleblue hover:bg-lilac flex flex-row items-center gap-1 text-manatee">Фильтры
          <BsFilterLeft className="size-10"></BsFilterLeft>
        </button>
    </div>

    <div className="flex flex-col w-full max-w-[1720px] md:px-5 gap-4 pt-10">
      <div className="flex flex-wrap">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
    </div>
  </div>
    </>
  );
}

export default MyComponent;








