import { css, styled } from 'styled-components'

import landscape from './assets/landscape.jpg'

import { Link, Menu } from '@/components/styled'
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
        {/*/!*<StyledBtn as={Link} href={'https://google.com'}>*!/*/}
        {/*/!*  Link as Button*!/*/}
        {/*/!*</StyledBtn>*!/*/}
        {/*/!*<StyledBtn>Hello</StyledBtn>*!/*/}
        {/*/!*<SuperButton color={'red'}>Hello</SuperButton>*!/*/}
        {/*/!*<SuperButton fontSize={'4rem'}>Hello</SuperButton>*!/*/}
        {/*<StyledBtn btnType={'primary'}>Hello</StyledBtn>*/}
        {/*<StyledBtn btnType={'outlined'}>Hello</StyledBtn>*/}
        {/*<StyledBtn disabled>Disabled</StyledBtn>*/}
        <Card>
          <Image />
          <TextContainer>
            <Title>Headline</Title>
            <Content>
              {'Faucibus. Faucibus. Sit sit ' +
                'sapien sit tempusrisu ut. Sit molestie ' +
                'ornare in venen.\n'}
            </Content>
          </TextContainer>
          <ButtonContainer>
            <Button btnType={'primary'}>See more</Button>
            <Button btnType={'outlined'}>Save</Button>
          </ButtonContainer>
        </Card>
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
const Card = styled.div`
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`
const Image = styled.div`
  width: 280px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 10px;
  margin: 10px;
  background-image: url(${landscape});
  background-repeat: no-repeat;
  background-size: contain;
  //lightgray 50% / cover no-repeat;
`
const Title = styled.p`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 20px;
`
const Content = styled.p`
  color: #abb3ba;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`
const TextContainer = styled.div`
  width: 260px;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 10px;
  padding-bottom: 19px;
`

const ButtonContainer = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 22px;
  display: flex;
  gap: 12px;
`

type ButtonType = {
  btnType?: 'primary' | 'outlined'
}
const Button = styled.button<ButtonType>`
  border: 2px solid #4e71fe;
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 200% */
  padding: 4px 31px 6px;
  border-radius: 5px;
  ${props =>
    props.btnType === 'primary' &&
    css<ButtonType>`
      color: #fff;
      background-color: #4e71fe;
      &:hover {
      }
    `}

  ${props =>
    props.btnType === 'outlined' &&
    css<ButtonType>`
      color: #4e71fe;
      background-color: transparent;

      &:hover {
      }
    `}
`
