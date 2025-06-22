import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const SortSelector = () => {
    
  return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Order By: Relevance <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
                <Menu.Item value={"1"}>Relevance</Menu.Item>
                <Menu.Item value={"2"}>Date</Menu.Item>
                <Menu.Item value={"3"}>Color</Menu.Item>
        
             
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
}

export default SortSelector