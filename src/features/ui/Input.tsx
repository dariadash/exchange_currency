import styled, { css } from 'styled-components'

type InputProps = {
  block?: boolean
}

export const Input = styled.input<InputProps>`
  font-family: 'Nunito', 'Valera-round';
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: none;
  border-bottom: 1px solid #4329669f;
  &:focus {
    border: none;
    border-bottom: 1px solid #b277ffa0;
  }
  ${({ block }) => block && css`
    width: 100%;
  `}
`

export const SearchInput = styled.input<InputProps>`
  font-family: 'Nunito', 'Valera-round';
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid #999;
  ${({ block }) => block && css`
    width: 100%;
  `}
`