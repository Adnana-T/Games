import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { Platform, useGames } from "../hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
import { Genre } from "./Services/useGenreList";
 
import { GameQuery } from "../App";

interface Props {
  gameQuery : GameQuery

}
const   GridGame = ({gameQuery} : Props ) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={5}
        padding={"10px"}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameContainer key={Skeleton}>
              <GameCardSkeleton />
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer key={game.id}>
            <GameCard game={game} key={game.id} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridGame;
