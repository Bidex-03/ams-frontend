import { useParams } from "react-router-dom";
import styled from "styled-components";

const BoardingPassContainer = styled.div`
  padding: 20px;
`;

const BoardingPass = () => {
  const { id } = useParams();
  return (
    <BoardingPassContainer>
      <h1>Boarding Pass for Client {id}</h1>
      {/* Boarding pass details will go here */}
    </BoardingPassContainer>
  );
};

export default BoardingPass;
