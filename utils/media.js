import { css } from 'styled-components'

export const mobile = (...body) => css`
  @media (max-width: 1070px) {
    ${body};
  }
`

export const desktop = (...body) => css`
  @media (min-width: 1070px) {
    ${body};
  }
`
