import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameContainer = ({children} : Props) => {
  return <Box className="fa" borderRadius={10} overflow={"hidden"}  boxShadow={"2xl"}>{children}</Box>;
};

export default GameContainer;
