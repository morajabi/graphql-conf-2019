import React from 'react'

// Local
import { MobileLineBreak } from '../../shared/Section'
import { Container } from '../../shared/Container'
import { ChevronRight } from '../../shared/vectors/ChevronRight'
import { Space } from '../../shared/Space'
import {
  Title,
  Wrapper,
  ButtonsStack,
  LinkButton,
  LinkButtonIcon
} from './style'

export const Highlights = () => {
  return (
    <Container>
      <Wrapper>
        <Title data-hover-blur textAlign="center">
          Highlights from <MobileLineBreak />
          GraphQL Europe 2018
        </Title>

        <Space height={30} heightOnMobile={10} />

        <ButtonsStack data-hover-scale>
          <Button href="https://medium.com/graphql-europe/watch-all-talks-from-graphql-europe-2018-4a47ee28570a">
            Watch all the talks
          </Button>
          <Button href="https://medium.com/graphql-europe/top-5-talks-from-graphql-europe-2017-45c6aa02ef79">
            Top 5 talks from 2017
          </Button>
        </ButtonsStack>
      </Wrapper>
    </Container>
  )
}

const Button = ({ children, href }) => (
  <LinkButton href={href} target="_blank" data-hover-glow>
    {children}
    <LinkButtonIcon>
      <ChevronRight color="white" height={10} width={13} />
    </LinkButtonIcon>
  </LinkButton>
)
