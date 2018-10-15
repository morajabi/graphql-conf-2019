import React from 'react'

import { Nav } from '../../shared/Nav'
import {
  Wrapper,
  Flex,
  Left,
  Hero,
  Title,
  YearWrapper,
  SpinningLogo,
  Right,
  LocationAndDate
} from './style'
import { Container } from '../../shared/Container'
import { WhiteButtonLink } from '../../shared/WhiteButton'
import BigLogo from './BigLogo'
import Year19 from './Year19'

export default () => (
  <Wrapper>
    <Nav />

    <Container>
      <Flex>
        <Left>
          <Hero>
            <Title>
              <div>GraphQL</div>
              <div>Conf</div>
              <div>Berlin</div>
            </Title>
            <YearWrapper>
              <Year19 />
            </YearWrapper>
          </Hero>

          <SpinningLogo>
            <BigLogo />
          </SpinningLogo>
        </Left>

        <Right>
          <LocationAndDate>
            Kosmos, Berlin
            <br />
            June 20-21
          </LocationAndDate>
          <WhiteButtonLink href="#tickets">Get Ticket</WhiteButtonLink>
        </Right>
      </Flex>
    </Container>
  </Wrapper>
)
