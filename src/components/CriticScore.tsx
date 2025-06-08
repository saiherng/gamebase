import { Badge } from '@chakra-ui/react';

interface Props {
    score : number;
}


const CriticScore = ({ score }: Props) => (

    <Badge  fontSize='14px' 
    paddingX={2} 
    borderRadius='4px' 
    colorPalette={
        score >= 85 ? 'green' :
        score >= 70 ? 'yellow' :
        score >= 60 ? 'orange' :
        'red'
  } >{score}</Badge>
);
  

export default CriticScore