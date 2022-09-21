import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.p`
    font-family: 'Montserrat';
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
`

export const Logo = () => {
  return (
    <LogoContainer>
        <span style={{fontWeight: "bolder", marginRight: "6px"}}>ALEXTURE</span>DIARY
    </LogoContainer>
  )
}
