import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

export const Wrapper = styled.section``

export const Rainbow = styled.div`
  width: 100%;
  background-image: url('/static/bg-rainbooow.svg');
  background-repeat: repeat-x;
  background-position: center;
`

// For scrolling through all tickets on mobile
// export const MobileScrollView = styled.div`
//   ${mobile(css`
//     max-width: 100%;
//     overflow-x: scroll;
//     overflow-y: hidden;
//     padding-left: 55px;
//   `)};
// `

export const Grid = styled.div`
  display: flex;

  ${mobile(css`
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `)};
`

export const GridItem = styled.div`
  margin-right: 13px;
  flex-basis: calc((100% + 13px * 3) / 4);

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  ${mobile(css`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  `)};
`
