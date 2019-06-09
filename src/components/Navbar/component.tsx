import React from 'react';
import {
  Button,
  Alignment,
  NavbarGroup,
  NavbarHeading,
  Navbar as NavBar,
} from '@blueprintjs/core';

interface IProps {
  onLogout: VoidFunction;
}

const Navbar = ({ onLogout }: IProps) => (
  <NavBar>
    <NavbarGroup>
      <NavbarHeading>
        Dark
      </NavbarHeading>
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <Button
        onClick={onLogout}
        className="bp3-minimal"
        icon="log-out"
        text="Logout"
      />
    </NavbarGroup>
  </NavBar>
);

export default Navbar;
