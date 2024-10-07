import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { useAirports } from "../services/airportService";

// Styled-components for the landing page sections
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--background-color);
`;

const HeroSection = styled.section`
  width: 100%;
  height: 80vh;
  background: url("src/assets/hero-image.jpg") no-repeat center center/cover;
  /* src\assets\hero-image.jpg */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

const FlightSearch = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin-top: -50px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  input,
  select {
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid var(--secondary-color);
    width: 100%;
  }

  @media (max-width: 768px) {
    input,
    select,
    button {
      width: 100%;
    }
  }
`;

const FeaturesSection = styled.section`
  padding: 50px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .features {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .feature-card {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      flex: 1;
      min-height: 150px;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        color: var(--text-color);
      }
    }
  }
`;

const CTASection = styled.section`
  background-color: var(--secondary-color);
  color: #fff;
  padding: 50px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const { data: airports, isLoading, isError } = useAirports(); // Fetching airports

  const handleSearchFlights = () => {
    // Handle flight search logic
    navigate("/flights");
  };

  // Render loading or error state if needed
//   if (isLoading) return <p>Loading Airports...</p>;
//   if (isError) return <p>Error loading airports. Please try again later.</p>;

  console.log(airports); // Log the airports data to see its structure

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>Fly with Comfort & Safety</h1>
        <p>Your adventure starts here. Book your flight today!</p>
        <Button onClick={() => navigate("/book-ticket")}>Book a Flight</Button>
      </HeroSection>

      {/* Flight Search Section */}
      <FlightSearch>
        <select
          value={selectedFrom}
          onChange={(e) => setSelectedFrom(e.target.value)}
        >
          <option value="">Flying From</option>
          {airports?.map((airport) => (
            <option key={airport.id} value={airport.name}>
              {airport.airport_name} ({airport.airport_code})
            </option>
          ))}
        </select>

        <select
          value={selectedTo}
          onChange={(e) => setSelectedTo(e.target.value)}
        >
          <option value="">Flying To</option>
          {airports?.map((airport) => (
            <option key={airport.id} value={airport.name}>
              {airport.airport_name} ({airport.airport_code})
            </option>
          ))}
        </select>

        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />

        <Button onClick={handleSearchFlights}>Search Flights</Button>
      </FlightSearch>

      {/* Features Section */}
      <FeaturesSection>
        <h2>Our Services</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Book Flights</h3>
            <p>
              Book your next flight with ease using our seamless booking system.
            </p>
          </div>
          <div className="feature-card">
            <h3>Flight Status Tracking</h3>
            <p>
              Track the status of your flight in real-time with our updates.
            </p>
          </div>
          <div className="feature-card">
            <h3>Customer Support</h3>
            <p>Our 24/7 customer support ensures you get the help you need.</p>
          </div>
        </div>
      </FeaturesSection>

      {/* Call to Action Section */}
      <CTASection>
        <h2>Ready to Take Off?</h2>
        <Button size="large" onClick={() => navigate("/book-ticket")}>
          Book Now
        </Button>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;
