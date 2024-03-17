function MainButton({text, clickAction}) {
  return(
    <button className="py-3 px-5 bg-violet text-white rounded-3xl" onClick={clickAction}>{text}</button>
  )
}

export default MainButton;