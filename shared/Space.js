import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../utils/mobile'

export const Space = styled.div`
  height: ${p => (typeof p.height === 'number' ? `${p.height}px` : 0)};
  width: ${p => (typeof p.width === 'number' ? `${p.width}px` : 0)};

  ${mobile(css`
    height: ${p =>
      typeof p.heightOnMobile === 'number' && `${p.heightOnMobile}px`};
    width: ${p =>
      typeof p.widthOnMobile === 'number' && `${p.widthOnMobile}px`};
  `)};
`
