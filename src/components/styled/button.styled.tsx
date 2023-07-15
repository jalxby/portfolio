import { styled } from 'styled-components'

import { StyledAnimation } from '@/styles/animations'

export const StyledBtn = styled.button`
  border: none;
  background-color: #535bf2;
  color: aliceblue;
  padding: 10px 20px;

  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: cadetblue;
    color: aliceblue;
  }

  &:last-child {
    background-color: gold;
    color: darkslateblue;
  }
`
export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: fuchsia;

  &:hover {
    animation: ${StyledAnimation} 2s ease-in-out infinite;
  }
`
