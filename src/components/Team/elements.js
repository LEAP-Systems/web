import styled from 'styled-components';

export const TeamContainer = styled.div`
  height: 800px;
  color: #855dd4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;
  @media screen and (max-width: 1000px) {
    height: 1000px;
  }
  @media screen and (max-width: 768px) {
    height: 1600px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`

export const TeamWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const TeamH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const TopLine = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`