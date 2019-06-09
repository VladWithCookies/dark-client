import * as React from 'react';

import Navbar from '../Navbar';

interface IProps {
  children: React.ReactNode
}

const PrivateLayout = ({ children }: IProps) => (
  <React.Fragment>
    <Navbar />
    {children}
  </React.Fragment>
);

export default PrivateLayout;
