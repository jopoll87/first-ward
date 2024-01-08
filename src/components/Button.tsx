
type Props = {
  buttonName: string;
  handleClick: () => void;
}
const Button = (props: Props) => {
  return (
    <button onClick={props.handleClick}>{props.buttonName}</button>
  )
}

export default Button