import {
  Container,
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  Spacer,
  ButtonGroup,
  Button,
  Image,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import "@fontsource/amarante";
import Logo from "./Logo";
// import ThemeToggleButton from "./ColorToggleButton";
import ColorToggleButton from "./ColorToggleButton";

function NavBar() {
  return (
    <Box
      // position="fixed"
      w="100%"
      // top="0"
      p={4}
      backdropFilter="blur(1.5px)"
      boxShadow="md"
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="auto"
        align="center"
        justify="space-between"
        alignItems="center"
      >
        <Flex align="center" mr="auto">
          <Logo />
        </Flex>
        <Flex ml="auto" align="center">
          <ButtonGroup gap="2" colorScheme="teal">
            <Button>
              <NextLink href="/works" passHref>
                <Link>Works</Link>
              </NextLink>
            </Button>
            <Button>
              <NextLink href="/about" passHref>
                <Link> About</Link>
              </NextLink>
            </Button>
            <Button> Social</Button>
            <ColorToggleButton />
          </ButtonGroup>
        </Flex>
      </Container>
    </Box>
  );
}

export default NavBar;
// {/* <Button>
// <NextLink href="/about" passHref>
//   <Link>About</Link>
// </NextLink>
// </Button> */}

// {
//   /* <Container
//       bg="white"
//       display="flex"
//       borderRadius="0.2rem"
//       boxShadow="0px 1px 10px #d5d8dc"
//       justifyContent="flex-end"
//     >
//       <Flex display="flex" alignItems="center" borderStyle="dashed">
//         <Text mr="2rem">Hi</Text>
//         <Text mr="2rem">How</Text>
//       </Flex>
//       <Box justifySelf="flex-start" borderStyle="dotted" mr="revert"></Box>
//     </Container> */
// }

// {
//   /* <Flex
// minWidth="max-content"
// alignItems="center"
// gap="2"
// >
// <Box p="2">
//   <NextLink href="/">
//     <Image src="/duck.ico" boxSize="75px" ml="1rem" />
//   </NextLink>
// </Box>
// <Spacer />
// <ButtonGroup gap="2" mr="1" size="md">
//   <Button colorScheme="teal">
//     <NextLink href="/about" passHref>
//       <Link>About</Link>
//     </NextLink>
//   </Button>
//   <Button colorScheme="teal">
//     <NextLink href="/works/" passHref>
//       <Link>Works</Link>
//     </NextLink>
//   </Button>
//   <Button colorScheme="teal" mr="1">
//     Green
//   </Button>
// </ButtonGroup>
// </Flex> */
// }

// {
//   /* <Box
// position="fixed"
// w="100%"
// bg={useColorModeValue("#beb5b3", "#2342343")}
// css={{ backdropFilter: "blur(10px)" }}
// top="0"
// zIndex={2}
// >
// <Container
//   display="flex"
//   p={2}
//   maxW="container.md"
//   wrap="wrap"
//   align="center"
//   justify="space-between"
// >
//   <Flex align="center" mr={5}>
//     <Heading>Hi</Heading>
//   </Flex>
//   <Stack
//     direction={{ base: "column", md: "row" }}
//     display={{ base: "none", md: "flex" }}
//     width={{ base: "full", md: "auto" }}
//     alignItems="center"
//     flexGrow={1}
//     mt={{ base: 4, md: 0 }}
//   ></Stack>
// </Container>
// </Box> */
// }
