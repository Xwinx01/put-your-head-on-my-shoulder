import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 35px;
  line-height: 25px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(15deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/cat${useColorModeValue("", "-dark")}.ico`;

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image
            src={footPrintImg}
            width={22}
            height={22}
            alt="logo"
            transfrom="rotate(20deg)"
          />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="bold"
            ml={3}
          >
            黒猫
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
