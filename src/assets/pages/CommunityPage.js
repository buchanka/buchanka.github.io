import * as React from "react";

const profiles = [
  {
    name: "Konrad C.",
    age: 28,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/214b2c5112ed64c5a1337e101ca8847d671ae73034c0ef764b95c7d4c75ee2a3?apiKey=afebe131897d43fbbe157245a960cb21&",
    speaks: "PL",
    learns: "EN",
  },
  {
    name: "Emily H.",
    age: 24,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8481260288ee5834953ca01dc558a7401dfbde7501f58c98761cdb34d13deae9?apiKey=afebe131897d43fbbe157245a960cb21&",
    speaks: "EN", 
    learns: "NO",
  },
  {
    name: "Stefanie M.",
    age: 15,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b153bbd02ecb9962a567937b633c6dfad97686270763cd137fba0d418b68cc3a?apiKey=afebe131897d43fbbe157245a960cb21&",
    speaks: "FR",
    learns: "GE",
  },
  {
    name: "Anna B.",
    age: 46,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70b8522f5652d5c3f5d9e887db4cbe902c37aba43074bdfb0de4802a21429583?apiKey=afebe131897d43fbbe157245a960cb21&",
    speaks: "HUN",
    learns: "IT",
  },
  {
    name: "Alexander O.",
    age: 49,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce49364676b7cbca7c0a5502f9527973eba539d77a7ef2d0f0d0f4866b8cdd4c?apiKey=afebe131897d43fbbe157245a960cb21&",
    speaks: "SW",
    learns: "TR",
  },
  {
    name: "Max R.",
    age: 16,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4e3b4b6aa5cb9c40a0e9874bdd51723df1d8802a8bccf38fa6ce604dec973a9?apiKey=afebe131897d43fbbe157245a960cb21&",
    speaks: "GE",
    learns: "PL",
  },
];

function ProfileCard({ profile }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="grow px-4 py-7 mt-2 w-full bg-violet-100 border border-solid border-slate-500 rounded-[56px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl tracking-wide text-center text-white whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src={profile.image}
                alt={`Profile picture of ${profile.name}`}
                className="self-center rounded-full border border-violet-700 border-solid aspect-[0.96] w-[171px]"
              />
              <div className="justify-center px-8 py-6 mt-6 bg-fuchsia-800 rounded-2xl max-md:px-5">
                Профиль
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-3 text-2xl tracking-wide text-center max-md:mt-10">
              <div className="px-10 pt-6 pb-9 bg-violet-100 text-fuchsia-950 text-opacity-70 max-md:px-5">
                {profile.name.split(" ")[0]}{" "}
                <span className="text-fuchsia-950">
                  {profile.name.split(" ")[1]}
                </span>{" "}
                {profile.age}
              </div>
              <div className="flex flex-col items-start pr-5 pl-12 mt-12 whitespace-nowrap text-violet-950 max-md:px-5 max-md:mt-10">
                <div className="justify-center px-10 py-3 bg-violet-100 border border-solid border-slate-500 rounded-[38.625px] max-md:px-5">
                  Speaks: <br /> {profile.speaks}
                </div>
                <div className="px-12 pt-2.5 pb-4 mt-12 bg-violet-100 border border-solid border-slate-500 rounded-[38.625px] max-md:px-5 max-md:mt-10">
                  Learns: <br /> {profile.learns}
                </div>
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
    <div className="flex flex-col px-16 pt-9 pb-16 mt-36 w-full bg-violet-50 border border-gray-300 border-solid max-w-[1720px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="px-px max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {profiles.slice(0, 3).map((profile) => (
            <ProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
      <div className="mt-28 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {profiles.slice(3).map((profile) => (
            <ProfileCard key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;