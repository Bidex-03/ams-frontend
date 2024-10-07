import styled from "styled-components";

const BookTicketContainer = styled.div`
  padding: 20px;
`;

const BookTicket = () => {
  return (
    <BookTicketContainer>
      <h1>Book a Flight</h1>
      {/* Booking form will be added here */}
    </BookTicketContainer>
  );
};

export default BookTicket;
