import { Button } from 'semantic-ui-react';

const GeneralButton = ({buttonName, handleClick}) => {
  return (
    <Button onClick={handleClick}>{buttonName}</Button>
  )
}

export default GeneralButton