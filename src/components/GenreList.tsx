import {
  HStack,
  List,
  Image,
  Spinner,
  Link,
  Heading,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre : (genre: Genre) => void;
  selectedGenre : Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre}: Props) => {

  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading size='lg' marginBottom={5} marginTop={5}>Genres</Heading>

    <List.Root listStyleType="none" paddingY='0px'>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link
              fontSize="lg"
              fontWeight={selectedGenre === genre ? 'bold' : 'normal'}
              variant="underline"
              onClick={() => onSelectGenre(genre)}
              colorPalette="orange"

            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
    </>
  );
};

export default GenreList;
