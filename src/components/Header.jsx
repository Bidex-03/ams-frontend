import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SignOut from "../authentication/SignOut";
import UserAvatar from "./UserAvatar";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: var(--background-color);
  box-shadow: 0px 4px 6px var(--black-color);
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--background-color);
`;

const LogoLink = styled(Link)`
  color: var(--background-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: var(--background-color);
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--primary-color);
    width: 100%;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    a {
      padding: 10px;
      text-align: center;
    }
  }
`;

const UserActions = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--background-color);

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoLink to="/home">Airline</LogoLink>
      </Logo>

      <Hamburger onClick={toggleMenu}>
        <FiMenu />
      </Hamburger>

      <NavLinks isOpen={menuOpen}>
        <Link to="/bookings">Bookings</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/about">About</Link>
      </NavLinks>

      <UserActions>
        <UserAvatar />
        <SignOut />
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;
