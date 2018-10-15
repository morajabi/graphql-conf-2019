import React from 'react'

// Local
import { Space } from '../shared/Space'
import Header from '../home/Header'
import { WithPhotoSection } from '../home/WithPhotoSection'
import { Community } from '../home/Community'
import { Subscribe } from '../home/Subscribe'

export default () => (
  <>
    <Header />

    <Space height={80} heightOnMobile={50} />

    <WithPhotoSection imageSrc="/static/graphql2.jpg" imageFirstOnMobile={true}>
      {({ Title, Description }) => (
        <>
          <Title>Attend Europe’s biggest GraphQL- dedicated conference</Title>
          <Description>
            GraphQL Conf is a non-profit GraphQL conference in Europe with
            speakers from all around the world. Learn about GraphQL best
            practices from industry experts and become part of the thriving
            GraphQL community. GraphQL Conf is organized by Prisma and Honeypot.
          </Description>
        </>
      )}
    </WithPhotoSection>

    <Space height={70} heightOnMobile={50} />

    <Community />

    <Space height={90} heightOnMobile={50} />

    <Subscribe />
  </>
)
