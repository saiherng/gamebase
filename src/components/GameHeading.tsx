import { Heading } from "@chakra-ui/react"
import type { GameQuery } from "../App"


interface Props {
    gameQuery: GameQuery;
}


const GameHeading = ({gameQuery}: Props) => {

   const heading =  `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as='h1' size='4xl'>{heading}</Heading>
  )
}

export default GameHeading