import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const fetchAirports = async () => {
  const response = await Axios.get(
    "https://ams-backend-n7r9.onrender.com/api/airports/getAirports"
  );
  return response.data;
};

export const useAirports = () => {
  return useQuery({
    queryKey: ["airports"], // The query key is now passed as an array
    queryFn: fetchAirports,  // The query function
    staleTime: 1000 * 60 * 5, // Stale time of 5 minutes
  });
};
