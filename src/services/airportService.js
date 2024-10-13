// import { useQuery } from "@tanstack/react-query";
// import Axios from "axios";

// const fetchAirports = async () => {
//   const response = await Axios.get(
//     "https://ams-backend-n7r9.onrender.com/api/airports/getAirports"
//   );
//   return response.data;
// };

// export const useAirports = () => {
//   return useQuery({
//     queryKey: ["airports"], // The query key is now passed as an array
//     queryFn: fetchAirports,  // The query function
//     staleTime: 1000 * 60 * 5, // Stale time of 5 minutes
//   });
// };

import { useQuery } from "@tanstack/react-query";
import { supabase } from "./supabase";

// Function to fetch airports from Supabase
const fetchAirports = async () => {
  const { data, error } = await supabase.from("airports").select("*");

  if (error) {
    throw new Error(error.message); // Handle error appropriately
  }

  return data; // Return the fetched data
};

// Custom Hook to use Airports
export const useAirports = () => {
  return useQuery({
    queryKey: ["airports"], // The query key for caching purposes
    queryFn: fetchAirports, // The query function that fetches airports from Supabase
    staleTime: 1000 * 60 * 5, // Stale time of 5 minutes
  });
};
