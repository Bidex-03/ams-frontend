import styled from "styled-components";

const FlightsContainer = styled.div`
  padding: 20px;
`;

const Flights = () => {
  return (
    <FlightsContainer>
      <h1>Available Flights</h1>
      {/* Flight list goes here */}
    </FlightsContainer>
  );
};

export default Flights;
