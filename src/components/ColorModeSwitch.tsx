import { HStack, Switch, Icon } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {

  const { toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
      <Switch.Root colorPalette="orange" size="lg" onCheckedChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label>{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode' }</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
