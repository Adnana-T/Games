import { ColorMode,  HStack, Image, Switch, useColorMode , Text, Box } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
interface Props {
  onSearch  : (searchText :string )=> void
}
function navBar({onSearch} : Props) {
  const { colorMode, toggleColorMode } = useColorMode();
 
  return (
    <HStack  padding={"6px"}>
      <Image src={logo} width={"50px"} />
      <SearchInput onSearch={onSearch}/>
      
     <Switch  colorScheme="green" onClick={ toggleColorMode} onChange={toggleColorMode}>
      </Switch>
      <Text whiteSpace={'nowrap'}  > {colorMode === "light" ? "Dark" : "Light"} Mode</Text>

    
    </HStack>
  );
}

export default navBar;









