import * as React from "react";

function Logo() {
  return (
    <div className="flex gap-0 self-center ml-8 text-3xl font-bold tracking-widest text-purple-200 whitespace-nowrap">
      <div className="shrink-0 border border-purple-600 border-solid bg-purple-600 bg-opacity-50 h-[59px] w-[91px]" />
      <div className="flex-auto self-start mt-4">langlink</div>
    </div>
  );
}



function Footer() {
  return (
    <>
      
      <div className="self-center mt-6 text-2xl tracking-wider text-center text-slate-400">
        © 2024 buchanka Inc.{" "}
      </div>
    </>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-11 bg-purple-950 backdrop-filter backdrop-blur-lg max-md:px-5">
      <div className="flex flex-col mt-8 max-w-full w-[765px]">
        <header className="flex flex-col pr-8 pl-20 max-md:px-5 max-md:max-w-full">
          <Logo />
        </header>
        <Footer />
      </div>
    </div>
  );
}

export default MyComponent;