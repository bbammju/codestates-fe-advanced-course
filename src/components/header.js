import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"

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
  return(
    
    <HeaderContainer>
      <LogoContainer src={Logo}/>
    </HeaderContainer>
    
  )
}

export default Header