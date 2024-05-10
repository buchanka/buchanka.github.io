import support from "../assets/used/support.webp";

function SupportHero(){
    return(
        <>
      <div className='absolute w-full -z-10'>
          <svg className='h-160 w-[100%] md:h-[60rem] sm:h-[46rem]' preserveAspectRatio='none' viewBox='0 0 1920 1118' fill='none' xmlns='http://www.w3.org/2000/svg' >
            <path d='M0 0H1920V990C1920 990 1618 1118 960 1118C302 1118 0 990 0 990V0Z' fill='#F5E0FE' />
          </svg>
      </div>

    
      <section className='flex gap-5 justify-around items-center p-24 flex-col-reverse
        lg:flex-row'>
        <article className='w-full flex flex-col gap-5
          lg:w-96'>
          <div className="text-3xl font-bold text-pinkish_lilac block">
              <h2>Поддержка</h2>
          </div>
          <div className="flex flex-wrap text-lg md:text-lg sm:text-sm text-grey">        
            <p>
              Вам нужна помощь?
            </p>     
            <p>
            Заполните форму ниже, чтобы обратиться в техподдержку. 
            Если у вас есть вопросы возможно вам также помогут часто задаваемые вопросы(FAQ) под формой.
            </p>
          </div>
        </article>

        <div className=''>
          <img src={support} alt="support" className=""></img>
        </div>
      </section>

    </>     
    )
}

export default SupportHero;