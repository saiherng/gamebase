import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre : Genre | null;
}


const GameGrid = ( { selectedGenre }: Props) => {

   const {data, error, isLoading} = useGames(selectedGenre);
   const skeletons = [1,2,3,4,5,6,7,8];
  
  return (
    <div>
    {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} columnGap="4" rowGap="4" padding='30px'>
        {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer> )}
        {data.map( game => <GameCardContainer key={game.id}><GameCard  game={game} /></GameCardContainer> )}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
