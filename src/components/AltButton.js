// import './ButtonStyles.css'
function AltButton({text, clickAction}) {
  return(
    <button className='py-3 px-5 text-grey bg-white border border-violet rounded-3xl' onClick={clickAction}>{text}</button>
  )
}

export default AltButton;