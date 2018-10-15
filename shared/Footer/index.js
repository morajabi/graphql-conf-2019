import React from 'react'
import ReactImage from 'react-image'
import Link from 'next/link'

// Local
import { Container } from '../../shared/Container'
import { Space } from '../../shared/Space'
import { X } from '../../shared/vectors/X'
import {
  Wrapper,
  Column,
  LogoColumn,
  OrganizersColumn,
  FooterLink,
  XWrapper,
  TwitterIcon,
  MediumIcon,
  GithubIcon,
  MailIcon
} from './style'
import Logo from '../../shared/vectors/Logo'

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoColumn>
          <Logo color="white" />
        </LogoColumn>

        <Column width={160}>
          <FooterLink href="http://getticketlinkon">Attend</FooterLink>
          <FooterLink href="#speakers">Speakers</FooterLink>
          <FooterLink href="#sp">Sponsors</FooterLink>
          <Link href="/team" passHref>
            <FooterLink>Team</FooterLink>
          </Link>
        </Column>

        <Column width={180}>
          <FooterLink href="https://prisma.io">API</FooterLink>
          <FooterLink href="mailto:support@graphql-europe.org">
            Email Us
          </FooterLink>
          <Link href="/code-of-conduct" passHref>
            <FooterLink>Code of Conduct</FooterLink>
          </Link>
          <Link href="/imprint" passHref>
            <FooterLink href="/imprint">Imprint</FooterLink>
          </Link>
        </Column>

        <Column width={170}>
          <FooterLink href="https://twitter.com/graphqleu">
            <TwitterIcon />
            Twitter
          </FooterLink>
          <FooterLink href="https://medium.com/graphql-europe">
            <MediumIcon />
            Medium
          </FooterLink>
          <FooterLink href="https://github.com/prisma/graphql-conf-2019">
            <GithubIcon />
            Source
          </FooterLink>
        </Column>

        <OrganizersColumn>
          <a
            href="https://honeypot.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactImage src="/static/honeypot.svg" width={118} height={26} />
          </a>
          <XWrapper>
            <X width={12} height={12} opacity={1} />
          </XWrapper>
          <a href="https://prisma.io" target="_blank" rel="noopener noreferrer">
            <ReactImage src="/static/prisma.svg" width={88} height={35} />
          </a>
        </OrganizersColumn>
      </Wrapper>
    </Container>
  )
}
