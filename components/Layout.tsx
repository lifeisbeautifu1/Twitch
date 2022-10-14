import { Main, SideMenu } from './index';

const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
      <SideMenu />
      <Main />
    </div>
  );
};

export default Layout;
