import React from 'react'
import styled, { css, keyframes } from 'styled-components'

// Local
import { mobile } from '../utils/media'

export const StarsBackground = ({ children, opacity }) => (
  <Wrapper>
    <Stars opacity={opacity}>
      <Batch1 />
      <Batch2 />
      <Batch3 />
      <Batch4 />
      <Batch5 />
    </Stars>

    <Content>{children}</Content>
  </Wrapper>
)

// Style
const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;

  overflow: hidden;
`

const Content = styled.div`
  position: relative;
  z-index: 10;
`

const Stars = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  opacity: ${p => p.opacity || 1};
`

const batchStyle = css`
  position: absolute;
  top: 0;
  right: 50%;
  margin-right: -700px;
  width: 1400px;
  height: 100%;

  opacity: 0.1;
  background-repeat: no-repeat;

  ${mobile(css`
    transform: scale(0.8);

    /* perf on poor mobile */
    animation: none !important;
    opacity: 1;
  `)};
`

const blink = keyframes`
  0% { opacity: 0.15; }
  85% { opacity: 1; }
  100% { opacity: 1; }
`

const Batch1 = styled.div`
  ${batchStyle};

  background-image: url('/static/stars/stars-batch-1.svg');
  background-position: 0px 0px;

  animation: ${blink} 2s 0.5s ease-in-out alternate infinite;
`

const Batch2 = styled.div`
  ${batchStyle};

  background-image: url('/static/stars/stars-batch-2.svg');
  /* : x y */
  background-position: 80px 40px;

  animation: ${blink} 1.2s 1.4s ease-in-out alternate infinite;
`

const Batch3 = styled.div`
  ${batchStyle};

  background-image: url('/static/stars/stars-batch-3.svg');
  background-position: 148px 80px;

  animation: ${blink} 1.6s 0.9s ease-in-out alternate infinite;
`

const Batch4 = styled.div`
  ${batchStyle};

  background-image: url('/static/stars/stars-batch-4.svg');
  background-position: 90px 150px;

  animation: ${blink} 1.3s 1.5s ease alternate infinite;
`

const Batch5 = styled.div`
  ${batchStyle};

  background-image: url('/static/stars/stars-batch-5.svg');
  background-position: 180px 220px;

  animation: ${blink} 1s 0.6s ease-in-out alternate infinite;
`
