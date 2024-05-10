import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import MainButton from "../../components/MainButton";

const Plan = ({ title, price, features, isActive, buttonText }) => (
  <section className="flex flex-col w-full md:w-6/12 p-4">
    <div className="flex flex-col items-center w-full text-center bg-gray-50 border border-solid border-slate-500 rounded-3xl py-8 px-6 text-indigo">
      <h2 className="text-3xl md:text-5xl font-medium text-oceanblue mb-4">
        {title}
      </h2>
      {price && <div className="text-xl md:text-2xl font-semibold mb-6">{price}</div>}
      <ul className="space-y-4">
        {features.map(({ icon, text }, index) => (
          <li key={index} className="flex items-center gap-2 text-lg md:text-xl">
            {icon}
            <span>{text}</span>
          </li>
        ))}
      </ul>
      {isActive && <div className="mt-8 text-xl md:text-2xl font-semibold tracking-wider text-violet">
        Активна
      </div>}
      {buttonText && <MainButton text={buttonText} className="mt-8" />}
    </div>
  </section>
);

function Subscriptions() {
  return (
    <div className="bg-ghost w-full pt-32 max-w-screen mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        <Plan
          title="Essential"
          price="бесплатно"
          features={[
            { icon: <MdCheckBox />, text: "Редактирование профиля, управление контактами" },
            { icon: <MdCheckBox />, text: "Поддержка уведомлений" },
            { icon: <MdCheckBox />, text: "Статус друга для одного из собеседников" },
            { icon: <MdCheckBoxOutlineBlank />, text: "Ограничение на размер отправляемых файлов" },
            { icon: <MdCheckBoxOutlineBlank />, text: "Ограничение в создании групповых чатов" },
          ]}
          isActive
        />
        <Plan
          title="Advanced"
          price="120 руб. в месяц"
          features={[
            { icon: <MdCheckBox />, text: "Редактирование профиля, управление контактами" },
            { icon: <MdCheckBox />, text: "Поддержка уведомлений" },
            { icon: <MdCheckBox />, text: "Статус друга для неограниченного количества собеседников" },
            { icon: <MdCheckBox />, text: "Нет ограничений на размер отправляемых файлов" },
            { icon: <MdCheckBox />, text: "Возможность создания групповых чатов" },
            { icon: <MdCheckBox />, text: "Отправление временных сообщений" },
          ]}
          buttonText="Приобрести"
        />
      </div>
    </div>
  );
}

export default Subscriptions;
