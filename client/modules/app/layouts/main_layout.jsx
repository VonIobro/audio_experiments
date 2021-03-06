import React from 'react';

import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';

const MainLayout = ( { content = () => null } ) => (
  <div>
    <NavbarMain />
    { content() }
    <hr />
    <Footer />
  </div>
);

export default MainLayout;
