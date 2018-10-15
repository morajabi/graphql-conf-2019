import React from 'react'
import styled from 'styled-components'

export const JoinSlack = () => (
  <Wrapper href="https://slack.com">
    <Icon>i</Icon>
    <Text>
      Join us in Prisma's Slack: <Channel>#graphql-conf</Channel>
    </Text>
    <Arrow>
      <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
        <path
          d="M10.7795 3.39645L7.69304 0.248521C7.36814 -0.0828402 6.83439 -0.0828402 6.49789 0.248521C6.173 0.579882 6.173 1.12426 6.49789 1.46746L8.13397 3.13609H0.847046C0.382911 3.13609 0 3.52663 0 4C0 4.47337 0.382911 4.86391 0.847046 4.86391H8.14557L6.49789 6.53254C6.173 6.86391 6.173 7.40828 6.49789 7.75148C6.66034 7.91716 6.8808 8 7.08966 8C7.31013 8 7.51899 7.91716 7.68143 7.75148L10.7563 4.61538C10.9188 4.4497 11 4.23669 11 4.01183C11 3.78698 10.9304 3.5503 10.7795 3.39645Z"
          fill="#7A808A"
        />
      </svg>
    </Arrow>
  </Wrapper>
)

// Style
const Wrapper = styled.a`
  min-width: 330px;
  height: 35px;
  padding: 6px;
  border-radius: 35px;
  background: white;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
  transition: background 140ms ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    box-shadow: 0 2px 5px 1px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transition: none;
    background: rgba(255, 255, 255, 0.82);
  }
`

const Icon = styled.div`
  width: 23px;
  height: 100%;
  margin-right: 6px;
  align-self: stretch;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-weight: bold;
  background: #2e1865;
  border-radius: 30px;
  color: white;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 1;
  margin-right: 10px;

  color: #7a808a;
  user-select: none;
`

const Channel = styled.span`
  font-weight: bold;
  color: #7a808a;
  user-select: text;
`

const Arrow = styled.div`
  margin-right: 6px; /* + 6px padding of parent */
  line-height: 1;
  margin-top: -1px;
`
