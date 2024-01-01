
const Button = ({buttonName, handleClick}) => {
  return (
    <button onClick={handleClick} className='main-button'>{buttonName}</button>
  )
}

export default Button