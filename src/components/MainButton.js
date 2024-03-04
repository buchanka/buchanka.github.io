import './ButtonStyles.css'
function MainButton({text, clickAction}) {
  return(
    <button className="mainButton" onClick={clickAction}>{text}</button>
  )
}

export default MainButton;