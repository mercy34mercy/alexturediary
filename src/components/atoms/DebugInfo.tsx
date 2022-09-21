import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ReactDOM } from 'react'

const FixedTextBox = styled.div`
    position: fixed;
    top: 100;
    left: 30;
    font-size: 12px;
    font-family: monospace;
`



export const DebugInfo = () => {
    
    const [pageYoffset, setpageYoffset] = React.useState(window.pageYOffset)
    window.addEventListener('scroll', () =>setpageYoffset(window.pageYOffset) )
    
    useEffect(() => {
        setpageYoffset(window.pageYOffset)
    })
    return (
        <FixedTextBox id='DebugInfo'>
            pageYoffset: {pageYoffset}
        </FixedTextBox>
    )
}