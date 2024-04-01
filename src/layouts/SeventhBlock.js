import * as React from "react";
import faqImage from '../assets/used/faq-img.jpg';
import article1 from '../assets/used/article1.webp';
import article2 from '../assets/used/article2.webp';

const FAQImage = () => (
  <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
    <img
      src={faqImage}
      alt="FAQ Image"
      className="self-stretch my-auto w-full aspect-[0.81] max-md:mt-10 max-md:max-w-full"
    />
  </div>
);

const FAQContent = () => (
  <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
    <div className="grow pt-28 pb-12 w-full text-5xl font-bold text-purple-900 bg-white leading-[86px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[80px]">
      + Что такое langlink?
      + Это бесплатная платформа?
      + Как начать общаться?
      + Сколько языков я могу изучать?
      + Как обеспечивается
      безопасность пользователей?
      + Могу ли я пожаловаться на пользователя?
      + Как удалить свой аккаунт?
      + Как я могу связаться с техподдержкой?
    </div>
  </div>
);

const BlogPost = ({ imageSrc, title }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex overflow-hidden relative flex-col grow justify-center items-end px-16 py-20 text-6xl font-bold text-center text-black leading-[115px] min-h-[542px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[79px]">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative px-5 pt-9 pb-16 max-w-full border border-black border-solid shadow-sm bg-zinc-300 bg-opacity-40 w-[559px] max-md:max-w-full max-md:text-4xl max-md:leading-[79px]">
        {title}
      </div>
    </div>
  </div>
);

function MyComponent() {
  const blogPosts = [
    {
      imageSrc: {article1},
      title: "Бывает ли поздно изучать новые языки?",
    },
    {
      imageSrc: {article2},
      title: "Советы по изучению языков",
    },
  ];

  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-6xl font-bold text-indigo-900 leading-[115px] max-md:max-w-full max-md:text-4xl max-md:leading-[79px]">
        <span className="text-fuchsia-900">Часто задаваемые вопросы(FAQ</span>
        <span className="">)</span>
      </h1>
      <div className="self-stretch mt-2.5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <FAQImage />
          <FAQContent />
        </div>
      </div>
      <h2 className="mt-80 text-6xl font-bold text-center text-fuchsia-900 leading-[115.2px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Посетите наш блог
      </h2>
      <p className="mt-56 text-5xl font-medium text-fuchsia-900 leading-[86px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[80px]">
        В нашем блоге мы собрали рекомендации и советы по изучению языков, статьи
        о культурных особенностях, которые влияют на языки, развлекательные и
        мотивационные статьи. Наша команда langlink надеется, что этот материал,
        собранный нами будет вам интересен и принесет пользу в изучении языков.
      </p>
      <div className="self-stretch mt-52 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} imageSrc={post.imageSrc} title={post.title} />
          ))}
        </div>
      </div>
      <button className="justify-center px-9 py-10 mt-36 text-3xl tracking-wider text-center border border-fuchsia-800 border-solid leading-[51.2px] rounded-[80px] text-purple-950 max-md:px-5 max-md:mt-10">
        Показать еще статьи
      </button>
    </div>
  );
}

export default MyComponent;