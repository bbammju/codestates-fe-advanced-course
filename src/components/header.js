import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a3896e;
  top: 0%;
`

const LogoContainer = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`

const Header = () => {
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate(`/`)
  }  
  return(
    
    <HeaderContainer>
      <LogoContainer src={Logo} onClick={() => {navigateHandler()}}/>
    </HeaderContainer>
    
  )
}

export default Header