// @flow
import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../utils/mobile'

export const GradientImageBox = styled.div`
  height: 345px;
  width: 510px;
  padding: 10px;

  background: linear-gradient(
    244deg,
    #3d00c3 15.93%,
    #81027e 55.39%,
    #cf0203 95.46%
  );

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  ${mobile(css`
    height: 100%;
    width: 100%;
  `)};
`
