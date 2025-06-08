import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card.Root width='380px' borderRadius={10} overflow='hidden'>
        <Skeleton height='200px' />
        <Card.Body>
            <SkeletonText />
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton