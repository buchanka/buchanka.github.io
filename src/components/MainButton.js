function MainButton({text, clickAction}) {
  return(
    <button onClick={clickAction}>{text}</button>
  )
}

export default MainButton;