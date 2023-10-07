import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="blackAlpha.900">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="blue.800">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="red.700">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
