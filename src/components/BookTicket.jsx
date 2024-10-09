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

// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import styled from "styled-components";
// import { supabase } from "../services/supabase";
// import GlobalStyles from "../styles/GlobalStyles";

// const BookTicket = () => {
//   const queryClient = useQueryClient();

//   // Fetch flights
//   const { data: flights, isLoading: flightsLoading } = useQuery(
//     "flights",
//     fetchFlights
//   );

//   // Mutation for booking a ticket
//   const { mutate: bookTicket, isLoading: bookingLoading } = useMutation(
//     bookFlight,
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("flights");
//         alert("Flight booked successfully!");
//       },
//       onError: (error) => {
//         console.error("Booking error:", error);
//         alert("Error booking the flight");
//       },
//     }
//   );

//   if (flightsLoading) {
//     return <p>Loading available flights...</p>;
//   }

//   // Submit booking form
//   const handleBookTicket = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const flightId = formData.get("flight_id");
//     const seatNumber = formData.get("seat_number");

//     bookTicket({
//       flight_id: flightId,
//       seat_number: seatNumber,
//     });
//   };

//   return (
//     <Container>
//       <GlobalStyles />
//       <h1>Book a Flight</h1>

//       <form onSubmit={handleBookTicket}>
//         <label htmlFor="flight_id">Select Flight:</label>
//         <select id="flight_id" name="flight_id" required>
//           {flights.map((flight) => (
//             <option key={flight.flight_id} value={flight.flight_id}>
//               {flight.departure_city} → {flight.destination_city} (
//               {flight.departure_time})
//             </option>
//           ))}
//         </select>

//         <label htmlFor="seat_number">Seat Number:</label>
//         <input
//           type="text"
//           id="seat_number"
//           name="seat_number"
//           placeholder="e.g. A12"
//           required
//         />

//         <Button type="submit" disabled={bookingLoading}>
//           {bookingLoading ? "Booking..." : "Book Ticket"}
//         </Button>
//       </form>
//     </Container>
//   );
// };

// // Fetch all available flights
// const fetchFlights = async () => {
//   const { data, error } = await supabase.from("flights").select("*");
//   if (error) throw new Error(error.message);
//   return data;
// };

// // Mutation to book a flight
// const bookFlight = async ({ flight_id, seat_number }) => {
//   const { data, error } = await supabase
//     .from("bookings")
//     .insert([{ flight_id, seat_number, user_id: supabase.auth.user().id }]);

//   if (error) throw new Error(error.message);
//   return data;
// };

// export default BookTicket;

// const Container = styled.div`
//   padding: 20px;
//   background-color: var(--background-color);
//   color: var(--text-color);

//   h1 {
//     margin-bottom: 20px;
//     color: var(--primary-color);
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//   }

//   label {
//     font-weight: bold;
//   }

//   input,
//   select {
//     padding: 10px;
//     border: 1px solid var(--border-color);
//     border-radius: 5px;
//     font-size: 16px;
//   }

//   select {
//     background-color: var(--background-color);
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: var(--primary-color);
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: var(--secondary-color);
//   }

//   &:disabled {
//     background-color: var(--border-color);
//     cursor: not-allowed;
//   }
// `;
