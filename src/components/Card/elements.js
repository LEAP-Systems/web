import styled from "styled-components";

export const CardContainer = styled.a`
  background: #1c123b;
  display: flex;
  color: #855dd4;
  text-decoration: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 1000px) {
    height: 300px;
  }
  &:hover {
    transform: scale(1.03);
    color: #fff;
    background: #855dd4;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 30px;
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const CardP = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: left;
`;

export const CardSocialsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardSocial = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
`;
