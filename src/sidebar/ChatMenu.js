import React from "react";

function Menu({ setMenuStatus, isOpen }) {
  return (
    <div className=" flex justify-center px-8 text-base tracking-wide whitespace-nowrap bg-paleblue rounded-2xl max-w-[40px]">
      <div className="">
        <button className=""
          type="button"
          onClick={() => {
            setMenuStatus(true);
          }}
        >...
        <div  className={isOpen ? "open:" : ""}/>
        </button>
      </div>
    </div>
  );
}
export default Menu