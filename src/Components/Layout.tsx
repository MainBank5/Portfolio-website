import { ReactNode } from 'react';
import NavBar from './NavBar';
import ScrollToTopButton from './Scrollbutton';

type Layoutprops = {
    children: ReactNode;
}

const Layout = ({ children } :Layoutprops) => {
  return (
    <div className="relative">
      <NavBar />
      <div className="pt-[90px]">
        {children}
      </div>
      <ScrollToTopButton/>
    </div>
  );
};

export default Layout;
