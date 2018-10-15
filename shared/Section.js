import styled, { css } from 'styled-components'
import { mobile } from '../utils/mobile'

export const Title = styled.h2`
  font-size: 45px;
  line-height: 1.16;
  font-weight: bold;
  color: white;

  margin: 0;

  ${mobile(css`
    font-size: 30px;

    ${p =>
      p.centerOnMobile &&
      css`
        text-align: center;
      `};
  `)};
`

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: white;

  margin-top: 20px;
  margin-bottom: 0;

  ${mobile(css`
    font-size: 16px;
  `)};
`
