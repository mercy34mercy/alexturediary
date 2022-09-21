import React from 'react'
import '../../stylesheets/Header.css';
import img from '../../assets/user_icon.svg';
import { Logo } from './Logo';
import styled from 'styled-components';
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop({duration: 400});
};

const LogoContainer = styled.div`
    position: absolute;
    top: 30;
    left: 30;
    /* top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%); */
`

// もっといい方法ある気がする
const UserIconContainer = styled.div`
    position: absolute;
    top: 30px;
    left: auto;
    right: 30px;
`

const HomeButton = styled.a`
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        color: var(--color-sub)
    }
`

const UserIcon = styled.a`

`

const Header = () => {
    return (
        <div className="header">
            <div className="inner">
                <LogoContainer>
                    <HomeButton onClick={scrollToTop}>
                        <Logo />
                    </HomeButton>
                </LogoContainer>
                <UserIconContainer>
                    <UserIcon>
                        <img src={img}></img>
                    </UserIcon>
                </UserIconContainer>
            </div>
        </div>
    )
}

export default Header