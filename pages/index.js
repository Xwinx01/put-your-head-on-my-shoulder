import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function index() {
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.md" p={3} m={3}>
      <Box>
        <Heading textDecoration="underline">About me</Heading>
      </Box>
      <Box
        mt={4}
        bg={useColorModeValue("blue", "dark")}
        maxW="max-content"
        p="6px"
        borderRadius="md"
      >
        <Box
          display="flex"
          textAlign="start"
          p={1}
          bg={useColorModeValue("purple", "light")}
          borderRadius="md"
        >
          <Text>
            Hi there, I am the one who made this web, which is my portfolio, and
            my name is Luis Lu Dong A certified failure in the asian department,
            hope you find this page at least somewhat interesting.
          </Text>
        </Box>
      </Box>
      <Box alignSelf="end" bg="red">
        What ius happening
      </Box>
    </Container>
  );
}

export default index;

{
  /* <Container
bg="#2C3333"
width="100%"
height="100%"
position="fixed"
top="0"
left="0"
>
<Box>
  <Text color="white"> Hi</Text>
</Box>
</Container> */
}
