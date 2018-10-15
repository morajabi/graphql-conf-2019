import styled, { css } from 'styled-components'

import { mobile } from '../utils/media'

export const Container = styled.div`
  max-width: 1070px;
  width: 100%;
  margin: 0 auto;

  /* on mobile */
  ${mobile(css`
    padding-right: 20px;
    padding-left: 20px;
    max-width: 500px;
  `)};
`
