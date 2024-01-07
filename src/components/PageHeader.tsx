import chapel from '/chapel.jpg';
import { Header, Image } from 'semantic-ui-react';

const PageHeader = () => {
  return (
    <>
      <div className='header'>
        <Header as='h1'>South Weber First Ward News</Header>
      </div>
      <div className='header-image'>
        <Image src={chapel} size='medium' centered rounded />
        {/* <img src={chapel} alt='South Weber Drive chapel' /> */}
      </div>
    </>
  );
};

export default PageHeader;
