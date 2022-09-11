import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorMode,
} from "@chakra-ui/react";

function about() {
  const { toggleColorMode } = useColorMode();
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      height="100vh"
      marginTop="6rem"
    >
      <Flex direction="column" bg="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Bye</Heading>
        <Button onClick={toggleColorMode} bg="whiteAlpha.400">
          Theme Toggle
        </Button>
      </Flex>
    </Container>
  );
}

export default about;
