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

const useGames = (selectedGenre?: Genre | null) => {
  const genreId = selectedGenre?.id;

  return useData<Game>(
    `/games${genreId ? `?genres=${genreId}` : ""}`, 
    undefined,               // requestConfig (optional)
    [genreId]               // deps: re-fetch when genreId changes
  );
};

export default useGames;
