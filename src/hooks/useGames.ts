import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre?: Genre | null, selectedPlatform?:Platform | null) => {
  const genreId = selectedGenre?.id;
  const platformId = selectedPlatform?.id

  const queryParams = new URLSearchParams();
  if (genreId) queryParams.append('genres', genreId.toString());
  if (platformId) queryParams.append('platforms', platformId.toString());

  const queryString = queryParams.toString();
  const endpoint = `/games${queryString ? `?${queryString}` : ""}`; 

  console.log(endpoint)

  return useData<Game>(
    endpoint, 
    undefined,               // requestConfig (optional)
    [genreId, platformId]               // deps: re-fetch when genreId changes
  );
};

export default useGames;
