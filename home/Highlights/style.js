import styled, { css } from 'styled-components'

// Local
import { Title as SectionTitle } from '../../shared/Section'

// Utils
import { mobile } from '../../utils/media'

export const Wrapper = styled.div`
  &:hover {
    & [data-hover-blur] {
      filter: blur(2px) opacity(0.8);
      transform: scale(0.9);
    }

    & [data-hover-scale] {
      transform: scale(1.1);
    }

    & [data-hover-glow] {
      border-radius: 10px;
      box-shadow: 0 8px 55px 1px rgba(120, 200, 255, 0.25);
    }
  }
`

export const Title = styled(SectionTitle)`
  transition: filter 300ms ease, transform 300ms ease;
`

export const ButtonsStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  ${mobile(css`
    flex-direction: column;
  `)};

  transition: transform 300ms ease;
`

export const LinkButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 390px;
  width: 100%;
  height: 65px;

  font-size: 18px;
  border-radius: 5px;

  --main-bg: linear-gradient(
    207.67deg,
    #3d00c3 12.08%,
    #81027e 53.53%,
    #cf0203 95.62%
  );
  background: var(--main-bg);
  transition: opacity 140ms ease-out, transform 140ms ease-out,
    box-shadow 300ms ease, border-radius 300ms ease-out;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transition: transform 140ms ease-out;
    opacity: 0.7;
    transform: scale(0.95);
  }

  margin-right: 40px;

  ${mobile(css`
    margin-bottom: 15px;
    margin-right: 0;
    height: 50px;
  `)};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`

export const LinkButtonIcon = styled.span`
  margin-left: 8px;
  margin-top: 1px;
`
