import React from 'react'
import ReactImage from 'react-image'
import styled, { css, ThemeProvider } from 'styled-components'

// Utils
import { mobile } from '../utils/mobile'

// Local
import { Container } from '../shared/Container'
import { GradientImageBox } from './GradientImageBox'
import { Title, Description } from '../shared/Section'

export const WithPhotoSection = ({
  imageSrc,
  children,
  imageFirst,
  imageFirstOnMobile
}) => {
  return (
    <ThemeProvider
      theme={{
        imageFirst,
        imageFirstOnMobile
      }}
    >
      <Container>
        <Wrapper>
          <TextsSide>
            {typeof children === 'function'
              ? children({ Title, Description })
              : console.error('Children must be function.')}
          </TextsSide>

          <Space />

          <ImageSide>
            <GradientImageBox>
              <ReactImage src={imageSrc} />
            </GradientImageBox>
          </ImageSide>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

// Style
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
  `)};
`

const ImageSide = styled.div`
  order: ${p => (p.theme.imageFirst ? 1 : 3)};

  ${mobile(css`
    order: ${p => (p.theme.imageFirstOnMobile ? 1 : 3)};
  `)};
`

const Space = styled.div`
  flex-basis: 100px;
  flex-shrink: 0;
  flex-grow: 0;
  order: 2;

  ${mobile(css`
    flex-basis: 20px;
  `)};
`

const TextsSide = styled.div`
  order: ${p => (p.theme.imageFirst ? 3 : 1)};

  ${mobile(css`
    order: ${p => (p.theme.imageFirstOnMobile ? 3 : 1)};
  `)};
`
