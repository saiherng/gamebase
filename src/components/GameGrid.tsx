import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { Genre } from '../hooks/useGenres';
import type { Platform } from '../hooks/usePlatforms';
import type { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery
}


const GameGrid = ( { gameQuery }: Props) => {

   const {data, error, isLoading} = useGames(gameQuery);
   const skeletons = [1,2,3,4,5,6,7,8,9,10];
  
  return (
<div>
      {error && <Text color="red.500" textAlign="center" my={4}>{error}</Text>}
      
      {isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} columnGap="5" rowGap="5" padding="30px">
          {skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}

      {!isLoading && data.length === 0 && (
        <Text textAlign="center" mt={10}>No games found.</Text>
      )}

      {!isLoading && data.length > 0 && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} columnGap="5" rowGap="5" padding="30px">
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default GameGrid;
