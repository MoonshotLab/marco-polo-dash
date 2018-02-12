import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 60px;
`;
const StyledNav = styled.nav`
  border-bottom: 2px solid #ddd;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const StyledNavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 1em;
  display: inline-block;
  margin-right: 1em;
  text-transform: uppercase;
  color: #333;
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <StyledNav>
          <div className="container">
            <StyledNavItem href="#lyrebird">Lyrebird</StyledNavItem>
            <StyledNavItem href="#mitsuku">Mitsuku</StyledNavItem>
            <StyledNavItem href="#sal">S.A.L.</StyledNavItem>
            <StyledNavItem href="#device-buffet">Device Buffet</StyledNavItem>
            <StyledNavItem href="#casebot">Casebot</StyledNavItem>
          </div>
        </StyledNav>
      </StyledHeader>
    );
  }
}

export default Header;
