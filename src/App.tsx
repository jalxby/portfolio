import { styled } from 'styled-components'

import { Link, Menu, StyledBtn } from '@/components/styled'

export function App() {
  return (
    <div>
      <Menu>
        <ul>
          <li>
            <a href="">menu item 1</a>
          </li>
          <li>
            <a href="">menu item 2</a>
          </li>
          <li>
            <a href="">menu item 3</a>
          </li>
        </ul>
      </Menu>
      <Box>
        {/*<StyledBtn as={Link} href={'https://google.com'}>*/}
        {/*  Link as Button*/}
        {/*</StyledBtn>*/}
        {/*<StyledBtn>Hello</StyledBtn>*/}
        {/*<SuperButton color={'red'}>Hello</SuperButton>*/}
        {/*<SuperButton fontSize={'4rem'}>Hello</SuperButton>*/}
        <StyledBtn btnType={'primary'}>Hello</StyledBtn>
        <StyledBtn btnType={'outlined'}>Hello</StyledBtn>
        <StyledBtn disabled>Disabled</StyledBtn>
      </Box>
    </div>
  )
}

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  button {
    cursor: pointer;
  }
  ${Link} {
    cursor: zoom-in;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
