import React from 'react'

import { CardContainer, CardH2, CardIcon, CardP, CardSocial, CardSocialsWrapper} from './elements'

const Card = ({src, alt, header, description, github, linkedin}) => {
  return (
    <>
      <CardContainer>
        <CardIcon src={src} alt={alt}/>
        <CardH2>{header}</CardH2>
        <CardP>{description}</CardP>
        {/* <CardSocialsWrapper>
          <CardSocial src={require('../../images/github.png').default} href={github}></CardSocial>
          <CardSocial src={require('../../images/linkedin.png').default} href={linkedin}></CardSocial> */}
        {/* </CardSocialsWrapper> */}
      </CardContainer>
    </>
  )
}

export default Card