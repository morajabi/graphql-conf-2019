import { css } from 'styled-components'

export const mobile = (...body) => css`
  @media (max-width: 1070px) {
    ${body};
  }
`
