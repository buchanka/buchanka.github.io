function AltButton({text, clickAction}) {
  return(
    <button onClick={clickAction}>{text}</button>
  )
}

export default AltButton;