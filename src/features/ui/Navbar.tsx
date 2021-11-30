import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

export const Navbar = () => (
  <NavbarContainer>
    <NavbarWrapper>
      <NavLink to="/">
        Конвертер
      </NavLink>
      <NavLink to="/about">
        Курсы валют
      </NavLink>
    </NavbarWrapper>
  </NavbarContainer>
);


const NavbarContainer = styled.div`
  height: 50px;
  background-color: #b277ffa0;
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const NavbarWrapper = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  `

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #111;
  :hover{
    background-color: #eee1ff9f;
  }
`