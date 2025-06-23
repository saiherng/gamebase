import type { GameQuery } from "../App";
import useData from "./useData";

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

const useGames = (gameQuery?:GameQuery | null) => {
  
  const genreId = gameQuery?.genre?.id;
  const platformId = gameQuery?.platform?.id;
  const ordering = gameQuery?.sortOrder;
  const search = gameQuery?.searchText;

  const queryParams = new URLSearchParams();
  if (genreId) queryParams.append('genres', genreId.toString());
  if (platformId) queryParams.append('platforms', platformId.toString());
  if (ordering) queryParams.append('ordering', ordering.toString());
  if (search) queryParams.append('search', search.toString());

  const queryString = queryParams.toString();
  const endpoint = `/games${queryString ? `?${queryString}` : ""}`; 

  console.log(endpoint)

  return useData<Game>(
    endpoint, 
    undefined,               // requestConfig (optional)
    [gameQuery]               // deps: re-fetch when genreId changes
  );
};

export default useGames;
