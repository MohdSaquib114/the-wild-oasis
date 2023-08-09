import React from 'react'
import { styled } from 'styled-components'
import MainNav from './MainNav'
import Logo from './Logo'

const Sidebar = styled.aside`
background-color: var(--color-grey-0);
padding: 3.2rem 2.4rem;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

`

export default function SideBar() {
  return (
    <Sidebar >
        <Logo/>
     <MainNav/>
    </Sidebar>
  )
}
