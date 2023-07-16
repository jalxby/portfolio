import { css, styled } from 'styled-components'

import { StyledAnimation } from '@/styles/animations'

type StyledBtnType = {
  color?: string
  fontSize?: string
  btnType?: 'primary' | 'outlined'
  disabled?: boolean
}
export const StyledBtn = styled.button<StyledBtnType>`
  border: none;
  color: aliceblue;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  ${props =>
    props.btnType === 'primary' &&
    css<StyledBtnType>`
      color: aliceblue;
      background-color: ${props => props.color || 'purple'};
      border: 2px solid ${props => props.color || 'purple'};
      &:hover {
        background-color: transparent;

        color: ${props => props.color || 'purple'};
      }
    `}

  ${props =>
    props.btnType === 'outlined' &&
    css<StyledBtnType>`
      background-color: transparent;
      border: 2px solid ${props => props.color || 'purple'};
      color: ${props => props.color || 'purple'};
      &:hover {
        color: aliceblue;
        background-color: ${props => props.color || 'purple'};
      }
    `}

  ${props =>
    props.disabled &&
    css<StyledBtnType>`
      background-color: inherit;
      border: 2px solid gray;
      color: gray;
      &:hover {
        cursor: initial;
      }
    `}
`
export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: fuchsia;

  &:hover {
    animation: ${StyledAnimation} 2s ease-in-out infinite;
  }
`
