import React from 'react'
import Card from '../Card'
import { aaron, brandon, christian, steven } from './data'
import { TeamContainer, TeamWrapper, TeamH1 } from './elements'

const Team = ({id}) => {
  return (
    <div>
      <TeamContainer id={id}>
        <TeamWrapper>
          <TeamH1>Our Team</TeamH1>
          <Card {...christian}/>
          <Card {...brandon}/>
          <Card {...steven}/>
          <Card {...aaron}/>
        </TeamWrapper>
      </TeamContainer>
    </div>
  )
}

export default Team
