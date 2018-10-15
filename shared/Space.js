import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../utils/media'

export const Space = styled.div`
  height: ${p => (typeof p.height === 'number' ? `${p.height}px` : 0)};
  width: ${p => (typeof p.width === 'number' ? `${p.width}px` : 0)};

  ${mobile(css`
    ${p =>
      typeof p.heightOnMobile === 'number' &&
      css`
        height: ${p.heightOnMobile}px;
      `};

    ${p =>
      typeof p.widthOnMobile === 'number' &&
      css`
        width: ${p.widthOnMobile}px;
      `};
  `)};
`
