import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { supabase } from "../services/supabase";
import GlobalStyles from "../styles/GlobalStyles";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";
import LoadingSpinner from "../ui/Spinner";
import { FullPage } from "../ui/ProtectedRoute";

const Container = styled.div`
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);

  h1 {
    margin-bottom: 20px;
    color: var(--primary-color);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-size: 16px;
    outline: red;
  }

  select {
    background-color: var(--background-color);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-color);
  }

  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`;

const BookTicket = () => {
  const queryClient = useQueryClient();
  const { user, isAuthenticated } = useUser(); // Use the user from useUser
  const { data: flights, isLoading: flightsLoading } = useQuery({
    queryKey: ["flights"],
    queryFn: fetchFlights,
  });

  const { mutate: bookTicket, isLoading: bookingLoading } = useMutation({
    mutationFn: bookFlight,
    onSuccess: () => {
      queryClient.invalidateQueries("flights");
      toast.success("Flight booked successfully!");
    },
    onError: (error) => {
      console.error("Booking error:", error);
      toast.error("Error booking the flight");
    },
  });

  if (flightsLoading) {
    return (
      <FullPage>
        <LoadingSpinner />
      </FullPage>
    );
  }

  const handleBookTicket = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error("You must be logged in to book a flight.");
      return;
    }

    const formData = new FormData(e.target);
    const flightId = formData.get("flight_id");
    const seatNumber = formData.get("seat_number");

    bookTicket({
      flight_id: flightId,
      seat_number: seatNumber,
      user_id: user.id, // Pass the user ID from useUser
    });
  };

  return (
    <Container>
      <GlobalStyles />
      <h1>Book a Flight</h1>

      <form onSubmit={handleBookTicket}>
        <label htmlFor="flight_id">Select Flight:</label>
        <select id="flight_id" name="flight_id" required>
          <option>Select Route</option>
          {flights.map((flight) => (
            <option key={flight.flight_id} value={flight.flight_id}>
              {flight.departure_city} → {flight.destination_city} (
              {flight.departure_time})
            </option>
          ))}
        </select>

        <label htmlFor="seat_number">Seat Number:</label>
        <input
          type="text"
          id="seat_number"
          name="seat_number"
          placeholder="e.g. A12"
          required
        />

        <Button type="submit" disabled={bookingLoading}>
          {bookingLoading ? "Booking..." : "Book Ticket"}
        </Button>
      </form>
    </Container>
  );
};

// Fetch all available flights
const fetchFlights = async () => {
  const { data, error } = await supabase.from("flights").select("*");
  if (error) throw new Error(error.message);
  return data;
};

// Mutation to book a flight
const bookFlight = async ({ flight_id, seat_number, user_id }) => {
  const { data, error } = await supabase.from("bookings").insert([
    { flight_id, seat_number, user_id }, // Now use user_id from the props
  ]);

  if (error) throw new Error(error.message);
  return data;
};

export default BookTicket;
