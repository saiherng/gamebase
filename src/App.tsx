import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,

    }}>
      <GridItem area="nav" bg="coral">
        nav
      </GridItem>
      
      <GridItem area="aside" bg="gold" display={{ base: 'none', lg: 'block' }}>
          aside
      </GridItem>
     
      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
