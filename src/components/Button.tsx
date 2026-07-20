
type Props = {
  buttonName: string;
  handleClick: () => void;
  isActive?: boolean;
  ariaControls?: string;
};

const Button = ({ buttonName, handleClick, isActive, ariaControls }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={isActive ? 'active' : ''}
      role='tab'
      aria-selected={isActive ?? false}
      aria-controls={ariaControls}
    >
      {buttonName}
    </button>
  )
}

export default Button