import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {

   const {games, error} = useGames();
  
  return (
    <div>
    {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} columnGap="4" rowGap="4" padding='30px'>
        {games.map( game => <GameCard key={game.id} game={game} /> )}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
