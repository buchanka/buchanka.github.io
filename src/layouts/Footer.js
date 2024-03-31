import * as React from "react";

function Logo() {
  return (
    <div className="flex gap-0 self-center ml-8 text-3xl font-bold tracking-widest text-purple-200 whitespace-nowrap">
      <div className="shrink-0 border border-purple-600 border-solid bg-purple-600 bg-opacity-50 h-[59px] w-[91px]" />
      <div className="flex-auto self-start mt-4">langlink</div>
    </div>
  );
}

function EmailForm() {
  return (
    <form className="flex gap-5 mt-6 ml-3.5 max-md:flex-wrap max-md:max-w-full">
      <label htmlFor="email" className="sr-only">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        className="grow justify-center items-start px-8 py-6 text-xl tracking-wider text-center border border-solid border-slate-500 rounded-[80px] text-slate-500 w-fit max-md:px-5"
      />
      <button
        type="submit"
        className="justify-center px-8 py-5 text-2xl font-medium text-fuchsia-800 whitespace-nowrap bg-white shadow-xl rounded-[80px] max-md:px-5"
      >
        Подписаться
      </button>
    </form>
  );
}

function Footer() {
  return (
    <>
      <nav className="flex gap-5 mt-24 text-2xl tracking-wider text-center text-slate-400 max-md:flex-wrap max-md:mt-10">
        <a href="#" className="flex-auto">
          Политика конфиденциальности
        </a>
        <a href="#" className="flex-auto">
          Пользовательское соглашение
        </a>
      </nav>
      <div className="self-center mt-6 text-2xl tracking-wider text-center text-slate-400">
        © 2024 buchanka Inc.{" "}
      </div>
    </>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-11 bg-purple-950 max-md:px-5">
      <div className="flex flex-col mt-8 max-w-full w-[765px]">
        <header className="flex flex-col pr-8 pl-20 max-md:px-5 max-md:max-w-full">
          <Logo />
          <h1 className="mt-24 ml-3.5 text-2xl font-medium tracking-wider text-center text-slate-400 max-md:mt-10 max-md:max-w-full">
            Подпишись, чтобы получать уведомления <br />
          </h1>
          <EmailForm />
        </header>
        <Footer />
      </div>
    </div>
  );
}

export default MyComponent;