function ButtonForForms({text, clickAction}) {
    return(
      <button className=" py-3 px-5 w-full mt-4 bg-violet text-white rounded-3xl" onClick={clickAction}>{text}</button>
    )
  }
  
  export default ButtonForForms;