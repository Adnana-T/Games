import {
  Box,
  Button,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./components/navBar";
import GridGame from "./components/GridGame";
import GenresList  from "./components/GenresList";
import { Genre } from "./components/Services/useGenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid justifyContent={'center'}
 
      templateAreas={`"header header" "nav main" `}
      templateColumns={{
        base:'auto',
        lg: "200px 1fr",
     
      }}
      color={colorMode === "dark" ? "white" : "black"}
      gap="4px"
    >
      <GridItem pl="2" area={"header"} height={"60px"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
   

   <Show above="lg">
    <GridItem area={"nav"} paddingX={5}>
        <GenresList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
    
      </GridItem>
    

   </Show>
 
      <GridItem area={"main"} >
        {/* here is problem */}
        <Box   >
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5} marginLeft={2} className=" gap-4   sm:flex-row md:flex-row flex-col items-start" >
            <Box   >
              <PlatformSelector
                selectedPlatform={gameQuery?.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <Box>
        <GridGame gameQuery={gameQuery}  />

        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
