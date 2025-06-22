import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,

    }} templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      
      <GridItem area="aside" bg="" display={{ base: 'none', lg: 'block' }} paddingX={5}>
         <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
      </GridItem>
     
      <GridItem area="main" bg="">
        <div>
          <HStack paddingLeft={8}>
        <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
        <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} sortOrder={gameQuery.sortOrder} />
          </HStack>
         <GameGrid gameQuery={gameQuery}/>
          </div>
      </GridItem>
    </Grid>
  );
}

export default App;
