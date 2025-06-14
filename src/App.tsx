import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);


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
         <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
      </GridItem>
     
      <GridItem area="main" bg="">
        <PlatformSelector/>
         <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
