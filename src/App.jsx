import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/Home";
import Flights from "./components/Flights";
import BookTicket from "./components/BookTicket";
import BoardingPass from "./components/BoardingPass";
import AdminDashboard from "./components/AdminDashboard";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Toaster } from "react-hot-toast";
import RootLayout from "./ui/RootLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/book-ticket" element={<BookTicket />} />
            <Route path="/boardingPass/:id" element={<BoardingPass />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--background-color)",
            color: "var(--primary-color)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;


