import styled, { css } from 'styled-components';

import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { TrashFill } from '@styled-icons/bootstrap/TrashFill';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 25% 30% 25% 10%;
  grid-template-areas: 'Left HomeTeam Info AwayTeam Right';
  justify-items: center;

  position: relative;
  -webkit-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);

  border-radius: 10px;
  border: 0.5px solid var(--primary);
  height: 10rem;
  max-height: 200px;
`;

const logoStyles = css`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const HomeTeamLogo = styled.img`
  ${logoStyles}
  grid-area: HomeTeam;
`;

export const AwayTeamLogo = styled.img`
  ${logoStyles}
  grid-area: AwayTeam;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  grid-area: Info;
  height: 100%;
  max-height: 100%;
  .result {
    font-weight: bold;
  }
`;

export const EditIcon = styled(Edit)`
  width: 40px;
  height: 40px;
  grid-area: Right;
  &:hover {
    color: grey;
  }
`;

export const ModalContent = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 2rem 0 2rem;
`;

export const TrashIcon = styled(TrashFill)`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  &:hover {
    color: grey;
  }
`;
