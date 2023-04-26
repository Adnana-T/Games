import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Heading, Image, Input, List, ListItem , Spinner, Text, useDisclosure } from "@chakra-ui/react";
import useGenreList, { Genre } from "./Services/useGenreList";
import getCropped from "./image_url";
import React from "react";


interface Props {
   onSelectGenre :(genre : Genre)=> void,
   selectedGenre : Genre | null
}
const GenresList = ({onSelectGenre , selectedGenre} : Props) => {
  const { data  , isLoading , error} = useGenreList();
  if (error) return <Text>network problem!</Text>
  if (isLoading) return <Spinner/>
  return (
    <>
    <Heading marginBottom={2} fontSize={'2xl'}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCropped(genre.image_background)}
                objectFit={'cover'}
              />
              <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=> onSelectGenre(genre)} fontSize={"lg"} variant={"link"}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;


 